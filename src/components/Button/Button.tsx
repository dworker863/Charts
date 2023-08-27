import { FC } from 'react';
import { StyledButton } from './StyledButton';
import { TButtonProps } from './TButton';

const Button: FC<TButtonProps> = ({ type, clickHandler }) => {
  return (
    <>
      <StyledButton type={type} onClick={clickHandler}>
        Отправить
      </StyledButton>
    </>
  );
};

export default Button;
