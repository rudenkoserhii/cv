import {
  StarStyled,
  StarStyledHorisontal,
  StarStyledVertical,
} from './Star.styled';

export const Star = ({ size }) => {
  return (
    <>
      <StarStyled
        left={Math.floor(Math.random() * window.visualViewport.width)}
        top={Math.floor(Math.random() * window.visualViewport.height)}
        rotate={Math.floor(Math.random() * 360)}
      >
        <StarStyledHorisontal size={size}></StarStyledHorisontal>
        <StarStyledVertical size={size}></StarStyledVertical>
      </StarStyled>
    </>
  );
};
