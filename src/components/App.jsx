import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Context } from './Context/Context';
import ReactGA from 'react-ga';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const About = lazy(() => import('../pages/About/About'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio'));
const Education = lazy(() => import('../pages/Education/Education'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const Skill = lazy(() => import('../pages/Skills/Skill'));
const Experience = lazy(() => import('../pages/Experience/Experience'));
const ExperienceItem = lazy(() =>
  import('../components/ExperienceItem/ExperienceItem')
);

const TRACKING_ID = 'G-GVS6E671K3';

export const App = () => {
  ReactGA.initialize(TRACKING_ID);

  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />}>
            <Route path=":company" element={<ExperienceItem />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />}>
            <Route path=":skill" element={<Skill />} />
          </Route>
        </Route>
      </Routes>
    </Context>
  );
};
