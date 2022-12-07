import { LinkStyled, ListStyled, ListItem, Title, Text } from './Portfolio.styled';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';


const Portfolio = () => {
    const { selected } = useContext(ThrowContext);


    return (
        <>
            <Title className="first">Portfolio</Title>
            <ListStyled className="second">
                {selected.portfolios.map(({ name, url, preview }) => 
<ListItem key={nanoid()}>
<LinkStyled href={url} target="_blank"><Text className='portfolioName'>{name}</Text><img src={preview} alt={`Site ${name} preview`} width="200px"/></LinkStyled></ListItem>)}
            </ListStyled>
        </>
)};

export default Portfolio;