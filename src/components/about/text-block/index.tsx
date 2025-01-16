interface ITextBlockProps {
    text: string,
    hasBorder: boolean
}

export const TextBlock: React.FC<ITextBlockProps> = ({ text, hasBorder }) => {
    return (
        <div className={`${hasBorder ? 'border-l-4 pl-4 border-primary-red' : ''} max-w-2xl`}>
            <p className="text-lg text-primary-gray font-semibold leading-relaxed text-justify">{text}</p>
        </div>
    )
}

