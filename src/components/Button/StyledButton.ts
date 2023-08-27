import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
