import styled from 'styled-components';

export const StyledChart = styled.div`
  width: 500px;
  margin-bottom: 40px;
  padding: 20px 40px;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
`;

export const StyledTotalSum = styled.div`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
`;
