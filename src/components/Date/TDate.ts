import { Dispatch, SetStateAction } from 'react';

export type TDateProps = {
  setCash: Dispatch<SetStateAction<any>>;
  setCashFormat: Dispatch<SetStateAction<string>>;
};
