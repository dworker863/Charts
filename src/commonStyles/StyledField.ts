import { styled } from 'styled-components';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  width: 200px;
  height: 30px;
  padding: 0 10px;
  margin-right: 20px;
  margin-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;
