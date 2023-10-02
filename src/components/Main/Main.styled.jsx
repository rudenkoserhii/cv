import styled from 'styled-components';
import flag from '../../img/about/flag.png'

export const SectionStyled = styled.section`



position: relative;

  max-width: 800px;
height: 100%;
  padding: ${p => p.theme.space[6]}px;
  padding-bottom: 0;

&.flag {
background-image: url(${flag});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  transition: all 200ms ease;

}
`;

export const MainStyled = styled.main`

  width: 100%;
`;
