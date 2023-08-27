import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  margin-right: 10px;
  padding: 7px 20px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
