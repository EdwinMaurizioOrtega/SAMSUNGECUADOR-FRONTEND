import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Helmet from 'react-helmet';
import imagesLoaded from 'imagesloaded';



import OwlCarousel from '~/components/features/owl-carousel';

import DetailThree from '~/components/partials/product/detail/detail-three';
import MediaSix from '~/components/partials/product/media/media-six';
import RelatedProducts from '~/components/partials/product/related-products';

import { mainSlider17 } from '~/utils/data/carousel';

import jsonData from "~/pages/api/productos.json";


function ProductStickyInfo() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) return '';

    console.log("slug: "+ slug);

    const foundInBestSelling = jsonData.bestSelling.find(item => item.slug === slug);
    const foundInFeatured = jsonData.featured.find(item => item.slug === slug);
    const foundInCollection = jsonData.productCollection.find(item => item.slug === slug);
    const foundInLatest = jsonData.latest.find(item => item.slug === slug);

    let product = null;

    if (foundInFeatured) {
        product = foundInFeatured;
        console.log(product);
    } else if (foundInBestSelling) {
        product = foundInBestSelling;
        console.log(product);
    } else if (foundInLatest) {
        product = foundInLatest;
        console.log(product);
    }else if (foundInCollection) {
        product = foundInCollection;
        console.log(product);
    }


    //const { data, loading, error } = useQuery(GET_PRODUCT, { variables: { slug } });
    const [loaded, setLoadingState] = useState(false);
    const [loading, setLoading] = useState(false);
    //const product = data && data.product.data;
    //const related = data && data.product.related;

    useEffect(() => {
        if (!loading && product)
            imagesLoaded('main').on('done', function () {
                setLoadingState(true);
            }).on('progress', function () {
                setLoadingState(false);
            });
        if (loading)
            setLoadingState(false)
    }, [loading, product])

    return (
        <main className="main pt-6 single-product product-sticky-info">
            <Helmet>
                <title>Samsung Ecuador | Product Sticky Info</title>
            </Helmet>

            <h1 className="d-none">Samsung Ecuador - Product Sticky Info</h1>

            {
                product !== undefined ?
                    <div className={`page-content pb-10 ${loaded ? '' : 'd-none'}`}>
                        <div className="container skeleton-body">
                            <div className="product product-single row">
                                <div className="col-md-6">
                                    <MediaSix product={product} />
                                </div>

                                <div className="col-md-6">
                                    <DetailThree data={product} isDesc={true} isGuide={true} isSticky={true} />
                                </div>
                            </div>

                            {/*<RelatedProducts products={related} adClass="pt-3 mt-2" />*/}
                        </div>
                    </div> : ''
            }
            {
                loaded && !loading ? ''
                    : <div className="skeleton-body sticky-info container mb-10">
                        <div className="row">
                            <div className="col-md-6 sticky-sidebar-wrapper">
                                <div className="skel-pro-gallery"></div>
                            </div>

                            <div className="col-md-6">
                                <div className="product-details sticky">
                                    <div className="skel-pro-summary mt-4 mt-md-0"></div>
                                    <div className="skel-pro-tabs"></div>
                                </div>
                            </div>
                        </div>

                        <section className="pt-3 mt-4">
                            <h2 className="title justify-content-center">Related Products</h2>

                            <OwlCarousel adClass="owl-carousel owl-theme owl-nav-full" options={mainSlider17}>
                                {
                                    [1, 2, 3, 4, 5, 6].map((item) =>
                                        <div className="product-loading-overlay" key={'popup-skel-' + item}></div>
                                    )
                                }
                            </OwlCarousel>
                        </section>
                    </div>
            }
        </main>
    )
}

export default (ProductStickyInfo);