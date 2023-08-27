import { FC } from 'react';
import Button from '../Button/Button';
import { StyledDateWrapper, StyledDate } from './StyledDate';

const Date: FC = () => {
  const sendDateHandler = () => {};

  return (
    <StyledDateWrapper>
      <StyledDate />
      <Button type="submit" clickHandler={sendDateHandler} />
    </StyledDateWrapper>
  );
};

export default Date;
