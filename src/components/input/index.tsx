interface InputProps {
    type: string; 
    name: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
  }
  
  export const Input: React.FC<InputProps> = ({
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder = '',
    disabled = false,
    className = '',
  }) => {
    return (
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`outline-none p-3 bg-slate-100 rounded-lg border border-secondary-gray ${className}`}
      />
    );
  };