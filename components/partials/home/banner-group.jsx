import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { blurIn, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerGroup() {
    return (
        <section className="banner-group row gutter-no mt-10 pt-4">
            <div className="col-lg-6">
                <div className="banner1 banner banner-fixed" style={{ backgroundColor: '#1b72d3' }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/banner/5.jpg"
                            alt="banner"
                            effect="opacity"
                            width="100%"   //951
                            height="auto"   //353
                        />
                    </figure>
                    <div className="banner-content y-50">
                        <Reveal keyframes={blurIn} delay={200} duration={1200} triggerOnce>
                            <h3 className="banner-title text-white ls-m">Samsung<br />Galaxy Buds 2</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} triggerOnce>
                            <p>Libertad inalambrica y calidad de sonido excepcional</p>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                            <ALink href="/product/default/buds-2-black" className="btn btn-outline btn-white font-weight-bold">Comprar</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="banner2 banner banner-fixed" style={{ backgroundColor: '#202022' }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/banner/6.jpg"
                            alt="banner"
                            effect="opacity"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content y-50">
                        <Reveal keyframes={blurIn} delay={200} duration={1200} triggerOnce>
                            <h3 className="banner-title text-white ls-m">Watch 6 <span
                                className="text-uppercase text-primary">Classic</span><br/>Watch 6</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} triggerOnce>
                            <p>Tu compañero inteligente para un estilo de vida activo.</p>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                            <ALink href="/product/default/watch-5-pro-black" className="btn btn-primary font-weight-bold">Comprar</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}