interface ITextBlockSecondary {
    text: string,
}

export const TextBlockSecondary: React.FC<ITextBlockSecondary> = ({ text }) => {
    return (
        <div className="mt-4 max-w-2xl xl:max-w-full">
            <p className="text-lg text-primary-gray font-normal leading-relaxed text-justify">
               { text }
            </p>
        </div>
    )
}