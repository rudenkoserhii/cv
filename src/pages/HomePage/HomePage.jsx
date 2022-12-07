import { Img } from "./HomePage.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';




const HomePage = () => {

    const { selected } = useContext(ThrowContext);

    return (
        (selected) && 
        <>
            <Img src={selected.urlJpg} alt="Man" width="800px" className="first"/>
        </>
    )
}

export default HomePage;