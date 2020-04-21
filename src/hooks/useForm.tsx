import {FormEvent, SyntheticEvent, useCallback, useState} from 'react';

export type OnSubmit = (values: {[prop: string]: string}) => void

export interface Values {
  [prop: string]: string
}

export const useForm = (onSubmit: OnSubmit, initialValues: Values = {}) => {

  const [values, setValues] = useState(initialValues);
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>): void => {
    if (event) {
      event.preventDefault();
    }
    if (onSubmit) {
      onSubmit(values);
    }
  }, [values, onSubmit]);

  const handleChange = useCallback((event: SyntheticEvent) => {
    event.persist();
    const target = event.target as HTMLInputElement
    const {name, value} = target;
    setValues(values => ({ ...values, [name]: value }));
  }, []);

  return {
    values,
    handleChange,
    handleSubmit,
  };
};