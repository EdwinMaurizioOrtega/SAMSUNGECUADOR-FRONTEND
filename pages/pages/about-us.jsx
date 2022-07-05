import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import CountUp from 'react-countup';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';
import { mainSlider16 } from '~/utils/data/carousel';

function AboutUs() {
    useEffect( () => {
        countToHandler();
        window.addEventListener( 'scroll', countToHandler, true );

        return () => {
            window.removeEventListener( 'scroll', countToHandler );
        }
    }, [] )

    function countToHandler() {
        let items = document.querySelectorAll( '.count-to' );

        for ( let i = 0; i < items.length; i++ ) {
            let item = items[ i ];
            if ( item.getBoundingClientRect().top > 0 && window.innerHeight - item.offsetHeight > item.getBoundingClientRect().top && !item.classList.contains( 'finished' ) ) {
                if ( item.querySelector( 'button' ) ) item.querySelector( 'button' ).click();
                item.classList.add( 'finished' );
            }
        }
    }

    return (
        <main className="main about-us">
            <Helmet>
                <title>Riode React eCommerce Template | About Us</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - About Us</h1>

            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Sobre Nosotros</li>
                    </ul>
                </div>
            </nav>
            <div className="page-header pl-4 pr-4"
                style={ { backgroundImage: `url( ./images/page-header/about-us.jpg )`, backgroundColor: "#3C63A4" } }>
                <h3 className="page-subtitle text-black font-weight-bold">¡Bienvenido a Hipertronics!</h3>
                <h1 className="page-title font-weight-bold lh-1 text-black text-capitalize" style={{color: 'coral !important'}}>¿Quiénes somos?</h1>
                <p className="page-desc text-black mb-0">Desde el 2007 trabajando por  liderar el mercado innovador y <br /> tecnológico en el Ecuador.</p>
            </div>

            <div className="page-content mt-10 pt-10">
                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="about-section pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 mb-10 mb-lg-4">
                                    <h5 className="section-subtitle lh-2 ls-md font-weight-normal">01. ¿Qué hacemos?</h5>
                                    <h3 className="section-title lh-1 font-weight-bold" style={{color: 'coral'}}>Distribuidores autorizados
                                    </h3>
                                    <p className="section-desc">Nos dedicamos a la distribución autorizada de celulares y accesorios tecnológicos en Ecuador.</p>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center" style={{color: 'coral'}}>
                                                <CountUp start={ 0 } end={ 15 } duration={ 2 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Años en el mercado</h5>
                                                <p className="text-grey mb-0">Más de 15 años en el <br />mercado ecuatoriano.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center" style={{color: 'coral'}}>
                                                <CountUp start={ 0 } end={ 3 } duration={ 2 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Lugar</h5>
                                                <p className="text-grey mb-0">Top 3 de mejores importadores de <br />equipos celulares del Ecuador.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="counter text-center" style={{color: 'coral'}}>
                                                <CountUp start={ 0 } end={ 56 } duration={ 4 }>
                                                    { ( { countUpRef, start } ) => (
                                                        <div className="count-to">
                                                            <span ref={ countUpRef } />
                                                            <button onClick={ start } className="d-none">Start</button>
                                                        </div>
                                                    ) }
                                                </CountUp>
                                                <h5 className="count-title font-weight-bold text-body ls-md">Miembros</h5>
                                                <p className="text-grey mb-0">Equipo <br /> Laboral.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="customer-section pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-4 text-center">

                                    <h3 className="section-title lh-1 font-weight-bold">Misión</h3>
                                    <p className="section-desc text-grey">
                                        Aportar en la innovación y desarrollo tecnológico, haciendo llegar equipos electrónicos de punta al mercado ecuatoriano.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-4 text-center">

                                    <h3 className="section-title lh-1 font-weight-bold">Visión</h3>
                                    <p className="section-desc text-grey">
                                        Liderar el mercado tecnológico brindando la mejor calidad y experiencia al público, construyendo una marca en donde las personas puedan depositar su confianza.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="brand-section grey-section pt-10 pb-10">
                        <div className="container">

                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center"></h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Nuestros Valores</h3>

                            <div className="row align-items-center">
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a1.jpg" alt="Brand" width="180" height="180" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Cooperación</h3>

                                </div>
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a2.jpg" alt="Brand" width="180" height="100" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Innovación</h3>

                                </div>
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a3.jpg" alt="Brand" width="180" height="100" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Eficiencia</h3>

                                </div>
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a4.jpg" alt="Brand" width="180" height="100" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Excelencia</h3>

                                </div>
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a5.jpg" alt="Brand" width="180" height="100" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Compromiso</h3>

                                </div>
                                <div className="col-md-4 order-md-first mb-4 text-center">
                                    <figure className="brand-wrapper bg-white banner-radius">
                                        <img src="./images/brands/a6.jpg" alt="Brand" width="180" height="100" />
                                    </figure>
                                    <h3 className="section-title lh-1 font-weight-bold">Seguridad</h3>

                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="brand-section grey-section pt-10 pb-10">
                        <div className="container mt-8 mb-10">
                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">02. Nuestros Clientes</h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Empresas Populares</h3>
                            <OwlCarousel adClass="owl-theme" options={ mainSlider16 }>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/1.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/2.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/3.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/4.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/5.png" alt="Brand" width="180" height="100" />
                                </figure>
                                <figure className="brand-wrap bg-white banner-radius">
                                    <img src="./images/brands/6.png" alt="Brand" width="180" height="100" />
                                </figure>
                            </OwlCarousel>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="team-section pt-8 mt-10 pb-10 mb-6">
                        <div className="container">
                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">03. Nuestros Lideres</h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Conoce nuestro equipo.</h3>
                            <div className="row cols-sm-2 cols-md-2">
                                <Reveal keyframes={ fadeInLeftShorter } delay="20" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team1.jpg"
                                                alt="Oteam member"
                                                width={ 150 }
                                                height={ 150 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Henry Aguilar</h4>
                                        <h5 className="member-job">Gerente General</h5>
                                    </div>
                                </Reveal>

                                <Reveal keyframes={ fadeInLeftShorter } delay="30" duration="1000" triggerOnce>
                                    <div className="member">
                                        <figure className="banner-radius">
                                            <LazyLoadImage
                                                src="./images/subpages/team2.jpg"
                                                alt="Oteam member"
                                                width={ 150 }
                                                height={ 150 }
                                                effect="opacity"
                                                style={ { backgroundColor: "#EEE" } }
                                            />

                                            <div className="overlay social-links">
                                                <ALink href="#" className="social-link social-facebook fab fa-facebook-f"></ALink>
                                                <ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>
                                                <ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>
                                            </div>
                                        </figure>

                                        <h4 className="member-name">Andrea Abril</h4>
                                        <h5 className="member-job">Presidente</h5>
                                    </div>
                                </Reveal>

                            </div>
                        </div>
                    </section>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay="50" duration="1000" triggerOnce>
                    <section className="brand-section grey-section pt-10 pb-10">
                        <div className="container mt-8 mb-10">
                            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">04. Organigrama</h5>
                            <h3 className="section-title lh-1 font-weight-bold text-center mb-5" style={{color: 'coral'}}>Empresarial</h3>

                            <div className="page-header pl-4 pr-4"
                                 style={ { backgroundImage: `url( ./images/page-header/organigrama.png )`, backgroundColor: "#FFFFFF" } }>

                            </div>
                        </div>
                    </section>
                </Reveal>

            </div>


        </main>
    )

}

export default React.memo( AboutUs );