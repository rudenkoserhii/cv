import { LinkStyled, ListStyled, ListItem } from './Portfolio.styled';

const Portfolio = () => {

    return (
        <ListStyled>
            <ListItem><LinkStyled>Ice-Cream</LinkStyled></ListItem>
            <ListItem><LinkStyled>Filmoteka</LinkStyled></ListItem>
            <ListItem><LinkStyled>GitHub</LinkStyled></ListItem>
        </ListStyled>
)};

export default Portfolio;