import { FC } from 'react';
import { StyledLabel } from '../../commonStyles/StyledLabel';
import Button from '../Button/Button';
import { StyledDateWrapper } from './StyledDate';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { StyledField } from '../../commonStyles/StyledField';
import MaskedInput from 'react-text-mask';
import { StyledErrorMessage } from '../../commonStyles/StyledErrorMessage';

const DateComponent: FC = () => {
  const mask = [
    /[0-2]/,
    /[0-9]/,
    '.',
    /[0-1]/,
    /[0-9]/,
    '.',
    /[1-2]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
  ];

  return (
    <StyledDateWrapper>
      <Formik
        initialValues={{
          date: new Date(),
        }}
        validationSchema={Yup.object({
          date: Yup.date()
            .required('Укажите дату')
            .max(new Date(), 'Нельзя указывать будущую дату'),
        })}
        onSubmit={async (
          values: { date: Date },
          { setSubmitting }: FormikHelpers<{ date: Date }>,
        ): Promise<any> => {
          console.log(values);

          setSubmitting(false);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <StyledLabel htmlFor="date">Дата:</StyledLabel>
            <StyledField
              id="date"
              type="text"
              name="date"
              placeholder={new Date()}
              as={MaskedInput}
              mask={mask}
              guide={false}
              onChange={handleChange}
            />
            <Button type="submit" />
            <ErrorMessage name="date">
              {(msg: string) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </Form>
        )}
      </Formik>
    </StyledDateWrapper>
  );
};

export default DateComponent;
