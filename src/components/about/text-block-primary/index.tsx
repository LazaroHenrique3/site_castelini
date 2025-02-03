interface ITextBlockPrimary {
    text: string,
    borderLeftOrRight?: 'left' | 'right'
}

export const TextBlockPrimary: React.FC<ITextBlockPrimary> = ({ text, borderLeftOrRight = 'right' }) => {
    return (
        <>
            {borderLeftOrRight === 'right' ? (
                <div className="border-r-4 pr-4 border-primary-red max-w-2xl xl:max-w-full">
                    <p className="text-lg text-primary-gray font-semibold leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ) : (
                <div className="border-l-4 pl-4 border-primary-red max-w-2xl xl:max-w-full">
                    <p className="text-lg text-primary-gray font-semibold leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            )}</>
    )
}

