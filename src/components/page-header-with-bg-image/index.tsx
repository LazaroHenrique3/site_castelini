import Image, { StaticImageData } from "next/image";

interface IPageHeaderWithBgImage {
    bgImage: StaticImageData,
    pageTitle: string,
    pageDescription: string
};

export const PageHeaderWithBgImage: React.FC<IPageHeaderWithBgImage> = ({ bgImage, pageTitle, pageDescription }) => {
    return (
        <section className="relative w-full h-[250px]">
            <Image
                src={bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />

            <div className="absolute inset-0 bg-primary-red opacity-75 z-10"></div>

            <div className="relative flex-col flex items-center justify-center mx-auto h-full px-4 text-center mb-10 z-20">
                <div className="inline-block my-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-white uppercase">{pageTitle}</h2>
                    <div className="h-[3px] w-6 bg-white"></div>
                </div>

                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                    { pageDescription }
                </p>
            </div>
        </section>
    )
}

