import styled from 'styled-components';

export const FooterStyled = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;

border-top: 1px ${p => p.theme.colors.deepsea};
`;

export const LinkStyled = styled.a`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    cursor: pointer;

  :hover {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};}
  ;
`;

export const Button = styled.button`
`;

