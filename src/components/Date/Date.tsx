import { FC } from 'react';
import { StyledLabel } from '../../commonStyles/StyledLabel';
import Button from '../Button/Button';
import { StyledDateWrapper } from './StyledDate';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { StyledField } from '../../commonStyles/StyledField';
import MaskedInput from 'react-text-mask';
import { StyledErrorMessage } from '../../commonStyles/StyledErrorMessage';
import { fetchCash } from '../../api/api';
import moment from 'moment';

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
          values: { date: any },
          { setSubmitting }: FormikHelpers<{ date: any }>,
        ): Promise<any> => {
          const date: any = moment(values.date, 'DD.MM.YYYY').toDate();

          if (moment().diff(date, 'months') < 2) {
            fetchCash(moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD'), 'W-MON');
          }

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
              placeholder={new Date()
                .toISOString()
                .split('T')[0]
                .split('-')
                .reverse()
                .join('.')}
              as={MaskedInput}
              mask={mask}
              guide={false}
              onChange={handleChange}
            />
            <Button type="submit" text="Отправить" />
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
