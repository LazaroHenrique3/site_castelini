import { ProductsSlider } from "@/components/home/products-slider";
import { PrimaryLinkButton } from "@/components/primary-link-button";

export function FeaturedProductsSection() {
    return (
        <section className="w-full pb-16">
            <div className="w-full">
                <div className="w-[80%] m-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 uppercase">
                            PRODUTOS EM DESTAQUE
                        </h2>
                        <div className="h-[3px] w-6 bg-primary-red"></div>
                    </div>

                    <ProductsSlider />
                    <div className="w-full flex justify-center mt-5">
                        <PrimaryLinkButton linkText="Ver catálogo online" linkRef="/catalog" />
                    </div>
                </div>
            </div>
        </section>
    );
}