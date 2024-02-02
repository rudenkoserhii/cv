import {
  StarStyled,
  StarStyledHorisontal,
  StarStyledVertical,
} from './Star.styled';

export const Star = ({ size }) => {
  return (
    <>
      <StarStyled
        left={
          10 + Math.floor(Math.random() * (window.visualViewport.width - 20))
        }
        top={
          10 + Math.floor(Math.random() * (window.visualViewport.height - 20))
        }
        rotate={Math.floor(Math.random() * 360)}
      >
        <StarStyledHorisontal size={size}></StarStyledHorisontal>
        <StarStyledVertical size={size}></StarStyledVertical>
      </StarStyled>
    </>
  );
};
