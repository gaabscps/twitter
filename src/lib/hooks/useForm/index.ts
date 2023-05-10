import { useCallback, useState } from "react";

export interface FormErrors {
  [key: string]: string[] | null | undefined;
}
export interface FormData {
  [key: string]: FormDataValue;
}

export interface UseFormParameters {
  initialData?: FormData;
  initialErrors?: FormErrors;
}

export interface UseFormReturn {
  onChangeFormInput: OnChangeFormInput;
  resetForm: () => void;
  formData: FormData;
  formErrors: FormErrors;
  setFormErrors: SetFormErrors;
  setFormData: SetFormData;
}

export type FormDataValue = string | number | boolean | null | undefined;
export type OnChangeFormInput = (
  inputName: string
) => (data: FormDataValue) => void;
export type SetFormData = <FormData>(newFormData: FormData) => void;
export type SetFormErrors = (errors: FormErrors) => void;

const useForm = ({
  initialData = {},
  initialErrors = {},
}: UseFormParameters): UseFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrors);

  const updateFormData = useCallback((data: any) => {
    setFormData((oldData) => ({ ...oldData, ...data }));
  }, []);

  const onChangeFormInput: OnChangeFormInput =
    (inputName) =>
    (data: FormDataValue): void => {
      updateFormData({
        [inputName]: data,
      });
      setFormErrors({
        [inputName]: [],
      });
    };

  const resetForm = (): void => {
    setFormData(initialData);
    setFormErrors(initialErrors);
  };

  return {
    formData,
    formErrors,
    onChangeFormInput,
    resetForm,
    setFormData: updateFormData,
    setFormErrors,
  };
};

export default useForm;
