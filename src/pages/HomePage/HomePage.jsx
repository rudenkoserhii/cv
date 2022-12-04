import { Name, Profi, Img } from "./HomePage.styled";
// import { getPeoples } from "fakeAPI";
// import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';




const HomePage = () => {

    // const [peoples, setPeoples] = useState([]);

    // useEffect(() => {
    //     async function getPeoplesOnLoad () {
    //         await getPeoples().then(setPeoples);
    //     }
    //     getPeoplesOnLoad();
    // }, [])

    const { peoples } = useContext(ThrowContext);

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min}

    const selected = peoples[getRandom(0, peoples.length)];

    return (
        (peoples.length > 0) && <><Img src={selected.urlJpg} alt="Man"/><Name>{selected.name}</Name><Profi>{selected.job}</Profi></>
    )
}

export default HomePage;