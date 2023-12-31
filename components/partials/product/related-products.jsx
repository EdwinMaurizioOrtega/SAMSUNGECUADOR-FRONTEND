import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { mainSlider17 } from '~/utils/data/carousel';

export default function RelatedProducts(props) {
    const { products, adClass = "pt-3 mt-10" } = props;

    console.log("products: "+products)

    return (
        products.length > 0 ?
            <section className={`${adClass}`}>
                <h2 className="title justify-content-center">Productos relacionados</h2>

                <OwlCarousel adClass="owl-theme owl-nav-full" options={mainSlider17}>
                    {
                        products && products.slice(0, 5).map((item, index) =>
                            <ProductTwo product={item} key={'product-two-' + index} adClass='text-center' />
                        )
                    }
                </OwlCarousel>
            </section> : ''
    )
}