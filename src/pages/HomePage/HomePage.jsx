import { Name, Profi } from "./HomePage.styled";
import { getPeoples } from "fakeAPI";
import { useEffect, useState } from "react";




const HomePage = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        async function getPeoplesOnLoad () {
            await getPeoples().then(setPeoples);
        }
        getPeoplesOnLoad();
    }, [])

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min}

const selected = peoples[getRandom(0, peoples.length)];

    return (
        (peoples.length > 0) && <><img src={selected.urlJpg} alt="Man"/><Name>{selected.name}</Name><Profi>{selected.job}</Profi></>
        
        
    )
}

export default HomePage;