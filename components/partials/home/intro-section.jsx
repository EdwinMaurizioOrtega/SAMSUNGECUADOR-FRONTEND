import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeInDownShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section container">
            <div className="row grid">
                <div className="grid-item col-lg-8 col-sm-6 height-x2">
                    <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000} className="h-100">
                        <OwlCarousel adClass="intro-slider animation-slider owl-carousel owl-theme owl-dot-inner row cols-1 gutter-no" options={introSlider}>
                            <div className="intro-slide1 banner banner-fixed" style={{ backgroundColor: '#1f1f1f' }}>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/slides/pag-web-samsung-ec (2).jpg"
                                        alt="Intro Slider"
                                        effect="opacity"
                                        width="100%"   //785
                                        height="auto"   //433
                                    />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle mb-0">Compra ahora</h4>
                                    <h3 className="banner-title text-uppercase">Z FLIP 5 | Z FOLD 5
                                        </h3>
                                    {/*<p className="banner-price text-uppercase mb-5">*/}
                                    {/*        <span><sup>$</sup>939.<sup>00</sup></span> inc. IVA&nbsp;</p>*/}

                                    <ALink href={`https://api.whatsapp.com/send?phone=593939992225&text=Pre-compra: Z FLIP 5 | Z FOLD 5`} className="btn btn-outline btn-white btn-md mb-2 btn-rounded">COMPRAR</ALink>
                                </div>
                            </div>
                            {/*<div className="intro-slide2 banner banner-fixed" style={{ backgroundColor: '#f5f6f8' }}>*/}
                            {/*    <figure>*/}
                            {/*        <LazyLoadImage*/}
                            {/*            src="./images/home/slides/1-1.jpg"*/}
                            {/*            alt="Intro Slider"*/}
                            {/*            effect="opacity"*/}
                            {/*            width="100%"   //785*/}
                            {/*            height="auto"   //433*/}
                            {/*        />*/}
                            {/*    </figure>*/}
                            {/*    <div className="banner-content w-100 x-50 text-center">*/}
                            {/*        <h3 className="banner-title ls-m">iPhone X.</h3>*/}
                            {/*        <h4 className="banner-subtitle mb-5 font-weight-normal text-body">Find the best*/}
                            {/*                super powerful for you!</h4>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </OwlCarousel>
                    </Reveal>
                </div>
                <div className="grid-item col-lg-4 col-sm-6 height-x2">
                    <Reveal keyframes={fadeInDownShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner1 banner banner-fixed" style={{ backgroundColor: '#f1f1f1' }}>
                            <ALink href="https://api.whatsapp.com/send?phone=593939992225&text=Hola.">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/2.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="100%"   //385
                                        height="auto"   //433
                                    />
                                </figure>
                            </ALink>
                            <div className="banner-content w-100 x-50 text-center">
                                <h4 className="banner-subtitle mb-3">Llegó la hora de renovar tu teléfono.</h4>
                                <h3 className="banner-title mb-0 font-weight-bold">TRADE-IN</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner2 banner banner-fixed overlay-light" style={{ backgroundColor: '#fff296' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="100%"   //585
                                    height="auto"   //213
                                />
                            </figure>
                            <div className="banner-content w-100 y-50">
                                <h3 className="banner-title mb-2 ls-m text-uppercase text-white">Samsung<span
                                    className="d-block text-normal">SMART TV'S</span></h3>
                                <h4 className="banner-subtitle font-secondary text-white" ></h4>
                                {/*<div className="banner-price-info ls-m font-weight-semi-bold text-dark"><ins*/}
                                {/*    className="mr-2">$1888.99</ins><del>$2000.60</del></div>*/}
                                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                                    <ALink href="/product/default/tv-65-samsung-led-uhd" className="btn btn-outline btn-white font-weight-bold">Comprar</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                    <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner3 banner banner-fixed overlay-dark" style={{ backgroundColor: '#4b484f' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="100%"   //585
                                    height="auto"   //213
                                />
                            </figure>
                            <div className="banner-content w-100 y-50">
                                <h4 className="banner-subtitle mb-1 text-white">Galaxy</h4>
                                <h3 className="banner-title ls-m text-white">TAB S9 Ultra</h3>
                                <p className="font-weight-semi-bold text-white ls-m">Nueva generación tecnológica</p>
                                {/*<h4 className="banner-desc text-white mb-0"><span className="text-secondary">$1239.00</span></h4>*/}
                                <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200} triggerOnce>
                                    <ALink href="/product/default/samsung-galaxy-tab-s8-plus" className="btn btn-outline btn-white font-weight-bold">Comprar</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo(IntroSection);