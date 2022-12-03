import { Wrap, NavLinkStyled } from './AppBar.styled';
import home from '../../img/nav_icons/home.svg';
import about from '../../img/nav_icons/about.svg';
import portfolio from '../../img/nav_icons/portfolio.svg';
import skills from '../../img/nav_icons/skills.svg';
import experience from '../../img/nav_icons/experience.svg';
import education from '../../img/nav_icons/education.svg';


export const AppBar = () => {

    return (
        <Wrap> 
            <ul>
                <li key="Home">
                    <NavLinkStyled to={'/'}><img src={home} alt="Small house" title="Home page" width="40px"/></NavLinkStyled>
                </li>
                <li key="About">
                    <NavLinkStyled to={'about'}><img src={about} alt="Man's outline" title="About me" width="40px"/></NavLinkStyled>
                </li>
                <li key="Education">
                    <NavLinkStyled to={'education'}><img src={education} alt="Stairs up" title="My education" width="40px"/></NavLinkStyled>
                </li>
                <li key="Experience">
                    <NavLinkStyled to={'experience'}><img src={experience} alt="Stairs up" title="My work experience" width="40px"/></NavLinkStyled>
                </li>
                <li key="Portfolio">
                    <NavLinkStyled to={'portfolio'}><img src={portfolio} alt="Buisiness bag" title="My portfolio" width="40px"/></NavLinkStyled>
                </li>
                <li key="Skills">
                    <NavLinkStyled to={'skills'}><img src={skills} alt="Man's outline with stars" title="My skills" width="40px"/></NavLinkStyled>
                </li>
            </ul>
        </Wrap>
    )
};