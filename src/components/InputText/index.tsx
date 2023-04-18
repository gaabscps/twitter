import React, { useEffect, useState } from 'react';

interface InputTextProps {
  label?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  error?: string[] | null | undefined;
  onChange: (e: any) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  required,
  error,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div
        className={`inputTextContainer ${focus || (focus && value) ? 'inputFocus' : ''} ${
          error && error?.length > 0 && 'inputErrorContainer'
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
          required={required && !error}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {error && error.length > 0 && <span className="inputError">{error}</span>}
      </div>
    </>
  );
};
