import { Name, Profi } from "./HomePage.styled";
import { getPeoples } from "fakeAPI";
import { useEffect, useState } from "react";




const HomePage = () => {

    const [peoples, setPeoples] = useState(null);

    useEffect(() => {
        async function getPeoplesOnLoad () {
            await getPeoples().then(setPeoples);
        }
        getPeoplesOnLoad();
    }, [])

function getRandomPhoto() {
  return `#${Math.floor(Math.random() * 16777215).toString()}`}

    return (
        <>
        <img src={peoples[0].url} alt="Man"/>
        <Name>Rudenko Serhii</Name>
        <Profi>Developer</Profi>
        </>
    )
}

export default HomePage;