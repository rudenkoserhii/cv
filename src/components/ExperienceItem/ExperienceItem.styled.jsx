import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;
  border-bottom: ${p => p.theme.borders.deepsea};

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  pointer-events: auto;

  cursor: default;

  display: inline-block;
& span {
    font-size: ${p => p.theme.fontSizes.m};
line-height: 1;
}
`;

export const Arrow = styled.img`
position: absolute;
  top: 250px;
left: 50%;
transform: translateX(-50%);
width: 40px;
height: 40px;


`;


export const Div = styled.div`
  pointer-events: auto;
overflow-y: scroll;

height: calc(550px - 48px - 156px - 36px);

&::-webkit-scrollbar {
    display: none;
}

`;

export const Span = styled.span`
pointer-events: none;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
pointer-events: none;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const List = styled.ul`
pointer-events: none;
  padding: ${p => p.theme.space[3]}px;
  list-style-position: outside;
  list-style: square;


`;


export const Item = styled.li`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;
`;
