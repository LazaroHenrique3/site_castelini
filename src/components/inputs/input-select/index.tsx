export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    name: string;
    id: string;
    options: SelectOption[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const InputSelect: React.FC<SelectProps> = ({
    name,
    id,
    options,
    value,
    onChange,
    onBlur,
    placeholder = 'Selecione uma opção',
    disabled = false,
    className = '',
}) => {
    return (
        <select
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={`outline-none p-3 bg-slate-100 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white border border-secondary-gray ${className}`}
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
