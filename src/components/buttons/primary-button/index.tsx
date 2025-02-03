interface IPrimaryButtonProps {
    linkText: string,
    type: "submit" | "reset" | "button"
    disabled?: boolean
    onClick?: () => void
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ linkText, type, disabled = false, onClick }) => {
    return (
        <button type={type} disabled={disabled} className="flex items-center justify-center font-semibold border-2 border-primary-red text-primary-red rounded-md px-4 py-2 uppercase hover:bg-primary-red hover:text-white transition-all" onClick={onClick}>
            {linkText}
        </button>
    )
}

