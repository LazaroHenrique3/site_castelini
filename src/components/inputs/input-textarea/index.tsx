interface InputTextareaProps {
    name: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    rows?: number;
    cols?: number;
}

export const InputTextarea: React.FC<InputTextareaProps> = ({
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder = '',
    disabled = false,
    className = '',
    rows = 4,
    cols,
}) => {
    return (
        <textarea
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`outline-none p-3 bg-slate-100 rounded-lg border border-secondary-gray ${className}`}
            rows={rows}
            cols={cols}
        />
    );
};