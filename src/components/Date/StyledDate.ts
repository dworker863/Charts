import styled from 'styled-components';

export const StyledDateWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const StyledDate = styled.div`
  width: 200px;
  height: 30px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
`;
