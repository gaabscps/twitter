import React, { useEffect, useState } from 'react';

interface InputTextProps {
  label?: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
  error?: string[] | null | undefined;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  error,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);

  const errorValidator = () => {
    if (value && (!error || error?.length === 0)) {
      error = null;
    }
    if (error && (value === '' || null)) {
      error = null;
    } else {
      return error;
    }
  };
  console.log(value === '' ? 'vazio' : 'preenchido');

  return (
    <>
      <div
        className={`inputTextContainer ${focus || (focus && value) ? 'inputFocus' : ''} ${
          errorValidator() ? 'inputErrorContainer' : ''
        }`}
      >
        <label htmlFor="login">{label}</label>
        <span
          className={`placeholderLabel ${focus || value ? 'placeholderFocus' : 'placeholderBlur'} ${
            !focus ? 'inputFocusOut' : ''
          }`}
        >
          {placeholder}
        </span>
        <input
          className="inputText"
          name="login"
          type="text"
          onChange={onChange}
          value={value}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
        {errorValidator() && value && <span className="inputError">{error}</span>}
      </div>
    </>
  );
};
