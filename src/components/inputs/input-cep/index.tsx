import React, { useEffect, useRef} from 'react';
import IMask from 'imask';

interface InputCepProps {
    name: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const InputCep: React.FC<InputCepProps> = ({
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder = '',
    disabled = false,
    className = '',
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            const mask = IMask(inputRef.current, {
                mask: '00000-000', // Máscara para cep
            });

            return () => mask.destroy(); // Limpar máscara quando o componente for desmontado
        }
    }, []);

    return (
        <input
            ref={inputRef}
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`outline-none p-3 bg-slate-100 rounded-lg border border-secondary-gray ${className}`}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};