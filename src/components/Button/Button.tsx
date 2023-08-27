import { FC } from 'react';
import { StyledButton } from './StyledButton';
import { TButtonProps } from './TButton';

const Button: FC<TButtonProps> = ({ type, text, clickHandler }) => {
  return (
    <>
      <StyledButton type={type} onClick={clickHandler}>
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
