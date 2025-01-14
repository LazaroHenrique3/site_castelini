import { AboutSection } from "./sections/about-section";
import { BannerSection } from "./sections/banner-section";
import { BrandsSection } from "./sections/brands-section";
import { FeaturedProductsSection } from "./sections/featured-products-section";
import { HighlightsSection } from "./sections/highlights-section";
import { StoresSection } from "./sections/stores-section";
import { TestimonialsSection } from "./sections/testimonials-section";

export default function Home() {
    return (
        <>
            <BannerSection/>
            <HighlightsSection/>
            <AboutSection/>
            <StoresSection />
            <BrandsSection />
            <FeaturedProductsSection />
            <TestimonialsSection />
        </>
    );
}