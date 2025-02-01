import { BannerCarrousel } from "@/components/home/banner-carrousel";

import { bannerHomeImages } from "@/data/HomeBannerImagesData";

export const BannerSection = () => (
    <section>
        <div className="w-full h-auto mb-3">
            <BannerCarrousel bannerImages={bannerHomeImages} />
        </div>
    </section>
);