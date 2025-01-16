interface IResponsiveVideoProps {
  src: string
}

export const ResponsiveVideo: React.FC<IResponsiveVideoProps> = ({ src }) => {
  return (
    <div className="w-full max-w-xl">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

