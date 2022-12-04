import { Name, Profi, Img } from "./HomePage.styled";
// import { getPeoples } from "fakeAPI";
// import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';




const HomePage = () => {

    const { selected } = useContext(ThrowContext);

    return (
        (selected) && 
<><Img src={selected.urlJpg} alt="Man"/><Name>{selected.name}</Name><Profi>{selected.job}</Profi></>
    )
}

export default HomePage;