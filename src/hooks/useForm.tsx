import {FormEvent, SyntheticEvent, useState} from 'react';

type OnSubmit = (values: {[prop: string]: string}) => void

interface Values {
  [prop: string]: string
}

export const useForm = (onSubmit: OnSubmit, initialValues: Values = {}) => {

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event: FormEvent<HTMLInputElement>): void => {
    if (event) {
      event.preventDefault();
    }
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const handleChange = (event: SyntheticEvent) => {
    event.persist();
    const target = event.target as HTMLInputElement
    const {name, value} = target;
    setValues(values => ({ ...values, [name]: value }));
  };

  return [
    values,
    handleSubmit,
    handleChange,
  ];
};