import Language from 'components/Lamguage/Language';
import {
  Wrap,
  NavLinkStyled,
  HomeStyled,
  AboutStyled,
  EducationStyled,
  ExperienceStyled,
  PortfolioStyled,
  SkillsStyled,
} from './AppBar.styled';
import { ListItem, ListStyled } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Wrap>
      <ListStyled>
        <ListItem key="Home">
          <NavLinkStyled to={'/'}>
            <HomeStyled
              alt="Small house"
              title="Home page"
              className="navIcon"
            />
          </NavLinkStyled>
        </ListItem>
        <ListItem key="About">
          <NavLinkStyled to={'about'}>
            <AboutStyled
              alt="Man's outline"
              title="About me"
              className="navIcon"
            />
          </NavLinkStyled>
        </ListItem>
        <ListItem key="Education">
          <NavLinkStyled to={'education'}>
            <EducationStyled
              alt="Stairs up"
              title="My education"
              className="navIcon"
            />
          </NavLinkStyled>
        </ListItem>
        <ListItem key="Experience">
          <NavLinkStyled to={'experience'}>
            <ExperienceStyled
              alt="Stairs up"
              title="My work experience"
              className="navIcon"
            />
          </NavLinkStyled>
        </ListItem>
        <ListItem key="Portfolio">
          <NavLinkStyled to={'portfolio'}>
            <PortfolioStyled
              alt="Buisiness bag"
              title="My portfolio"
              className="navIcon"
            />
          </NavLinkStyled>
        </ListItem>
        <ListItem key="Skills">
          <NavLinkStyled to={'skills'}>
            <SkillsStyled
              alt="Man's outline with stars"
              title="My skills"
              className="navIcon"
            />
          </NavLinkStyled>
<Language />
        </ListItem>
      </ListStyled>
    </Wrap>
  );
};
