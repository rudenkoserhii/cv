import {
  StarStyled,
  StarStyledHorisontal,
  StarStyledVertical,
//   StarStyledDiagonalLeft,
//   StarStyledDiagonalRight,
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
        {/* <StarStyledDiagonalLeft size={size}></StarStyledDiagonalLeft>
        <StarStyledDiagonalRight size={size}></StarStyledDiagonalRight> */}
      </StarStyled>
    </>
  );
};
