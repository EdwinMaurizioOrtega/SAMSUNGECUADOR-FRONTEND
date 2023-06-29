import {Helmet} from 'react-helmet';
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BestCollection from '~/components/partials/home/best-collection';
import BannerGroup from '~/components/partials/home/banner-group';
import BannerSection from '~/components/partials/home/banner-section';
import ProductCollection from '~/components/partials/home/product-collection';
import LatestCollection from '~/components/partials/home/latest-collection';
import ServiceBox from "~/components/partials/home/service-section";
import productos from '../pages/api/productos.json'; // Ruta correcta hacia el archivo JSON


function HomePage() {
    const bestSelling = productos.bestSelling;
    const productCollection = productos.productCollection;
    const featured = productos.featured;
    const latest = productos.latest;

    return (
        <div className="main home mt-lg-0 mt-4">
            <Helmet>
                <title>Samsung Ecuador - Home</title>
            </Helmet>


            <h1 className="d-none">Samsung Ecuador - Home</h1>

            <div className="page-content">

                <IntroSection/>

                <BestCollection products={bestSelling} loading={false} deal={true}/>

                <BannerGroup/>

                <ProductCollection products={productCollection} loading={false}/>

                <BestCollection products={featured} loading={false}/>

                <BannerSection/>

                <LatestCollection products={latest} loading={false}/>

                <ServiceBox/>

            </div>

            <NewsletterModal/>
        </div>
    )
}

export default (HomePage);