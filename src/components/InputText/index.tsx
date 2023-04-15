import React, { useState } from 'react';

interface InputTextProps {
  label?: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, placeholder, onChange, value }) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className={`inputTextContainer ${focus || (focus && value) ? 'inputFocus' : ''}`}>
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
          onChange={e => onChange(e.target.value)}
          value={value}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </div>
    </>
  );
};
