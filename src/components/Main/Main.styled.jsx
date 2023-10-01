import styled from 'styled-components';
import flag from '../../img/about/flag.png'

export const SectionStyled = styled.section`
background-image: url(${flag});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;


position: relative;

  max-width: 800px;
height: 100%;
  padding: ${p => p.theme.space[6]}px;
  padding-bottom: 0;
`;

export const MainStyled = styled.main`
  width: 100%;
`;
