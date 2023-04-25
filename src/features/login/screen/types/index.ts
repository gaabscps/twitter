import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export type HandleFormProps = {
  value: string;
  errors: FieldErrors<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onChange: (value: string) => void;
};
