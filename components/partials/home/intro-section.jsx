import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection ( props ) {
    return (
        <div className="row">
            <div className="col-lg-9 mb-4">
                <OwlCarousel adClass="owl-theme owl-dot-inner intro-slider animation-slider" options={ introSlider }>
                    <div className="banner banner-fixed content-middle intro-slide intro-slide1 banner-radius" style={ { backgroundColor: "#f8f8f8" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/1.jpg"
                                alt="Banner"
                                width="1030"
                                height="450"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 }>
                                <h5 className="banner-subtitle text-capitalize font-weight-normal">Conoce más sobre la emisión de obligaciones</h5>
                                <h3 className="banner-title text-uppercase font-weight-bold ls-m">Resolución No.</h3>
                                <div className="banner-price-info font-weight-semi-bold text-body text-uppercase ls-m">
                                    SCVS-INMV-DNAR-2022-00003181
                                </div>
                                <ALink target="_blank" href="https://hipertronics.us/media/wysiwyg/smartwave/porto/RESOLUCION_3189_I_EOLP_LIDENAR_S.A..pdf" className="btn btn-dark btn-outline btn-rounded">
                                    Descargar Aquí<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed content-middle intro-slide intro-slide2 banner-radius" style={ { backgroundColor: "#e2e2e3" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/2.jpg"
                                alt="Banner"
                                width="1030"
                                height="450"
                            />
                        </figure>
                        <div className="banner-content text-right">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 }>
                                <h5 className="banner-subtitle text-capitalize font-weight-normal">¡Llévalo donde quieras!</h5>
                                <h3 className="banner-title text-uppercase font-weight-bold ls-m">The Freestyle</h3>
                                <div className="banner-price-info font-weight-semi-bold text-dark text-uppercase ls-m">
                                    Portátil <span className="text-primary">Poderoso</span>
                                </div>
                                <p className="text-dark font-weight-normal">Sorprendentemente simple</p>
                                <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">
                                    Comprar<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed content-middle intro-slide intro-slide3 banner-radius" style={ { backgroundColor: "#d8dee4" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/3.jpg"
                                alt="Banner"
                                width="1030"
                                height="450"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 }>
                                <h5 className="banner-subtitle text-capitalize font-weight-normal mb-1">Tu TV ideal</h5>
                                <h3 className="banner-title text-uppercase font-weight-bold ls-m">Smart TV</h3>
                                <div className="banner-price-info font-weight-semi-bold text-dark text-uppercase ls-m">
                                    Brillante y colorido, <span className="text-primary">QLED 4k</span>
                                </div>
                                <p className="text-dark font-weight-normal">Explora cual de nuestras TVs, se adapta más a ti</p>
                                <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">Comprar<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </OwlCarousel >
            </div>
            <div className="col-lg-3">
                <div className="row cols-lg-1 cols-sm-2 cols-1">
                    <div className="intro-banner mb-4">
                        <div className="banner banner-fixed content-middle banner-radius overlay-zoom" style={ { backgroundColor: "#232323" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banner/1.jpg"
                                    alt="Intro Banner"
                                    width="330"
                                    height="215"
                                />
                            </figure>
                            <div className="banner-content">
                                <h3 className="banner-title font-weight-bold text-white ls-m">Productos</h3>
                                <div className="product-count text-uppercase text-white font-weight-semi-bold">HT</div>
                                <span className="divider bg-white"></span>
                                <ALink href={ { pathname: "/shop", query: { category: "electronics" } } } className="btn btn-white btn-link btn-underline ls-m">
                                    Ver Catálogo<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                    <div className="intro-banner mb-4">
                        <div className="banner banner-fixed content-middle banner-radius overlay-zoom" style={ { backgroundColor: "#eca5a9" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banner/2.jpg"
                                    alt="Intro Banner"
                                    width="330"
                                    height="215"
                                />
                            </figure>
                            <div className="banner-content">
                                <h3 className="banner-title font-weight-bold text-white ls-m">Sistema</h3>
                                <div className="product-count text-uppercase text-white font-weight-semi-bold">Hipertronics</div>
                                <span className="divider bg-white"></span>
                                <ALink href="https://app.hipertronics.us/clientes/" className="btn btn-white btn-link btn-underline ls-m">
                                    Ingresar<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );