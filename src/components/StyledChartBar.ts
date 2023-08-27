import styled from 'styled-components';

export const StyledChartBar = styled.div`
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
  font-weight: 600;
  font-size: 24px;
`;
