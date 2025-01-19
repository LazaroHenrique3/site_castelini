import React from "react";

interface InputFileProps {
    typesAccept: string;
    name: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
  }
  
  // Usando React.forwardRef para suportar a referência
  export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
    (
      {
        typesAccept,
        name,
        id,
        onChange,
        onBlur,
        placeholder = "",
        disabled = false,
        className = "",
      },
      ref // A referência é recebida como segundo argumento
    ) => {
      return (
        <input
          ref={ref} // A referência é passada para o input
          type="file"
          accept={typesAccept}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`outline-none p-3 bg-slate-100 rounded-lg border border-secondary-gray ${className}`}
        />
      );
    }
  );
  
  // Nome do componente para facilitar depuração
  InputFile.displayName = "InputFile";