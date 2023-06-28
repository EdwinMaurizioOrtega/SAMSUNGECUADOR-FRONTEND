import Reveal from "react-awesome-reveal";

import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function NewsletterBanner() {
    return (
        <section className="banner banner-newsletter bg-primary">
            <div className="container">
                <div className="banner-content row">
                    <div className="col-lg-5 d-flex">
                        <div className="icon-box icon-box-side">
                            <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bold text-white">Obtenga ofertas especiales y ahorros</h4>
                                    <p className="text-white">Obtenga toda la información más reciente sobre eventos, ventas y ofertas.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="col-lg-7 d-lg-block d-flex justify-content-center">
                        <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000} triggerOnce>
                            <form action="#" method="get" className="input-wrapper input-wrapper-inline ml-lg-auto">
                                <input type="email" className="form-control font-primary font-italic form-solid"
                                    placeholder="Dirección de correo electrónico aquí..." required />
                                <button className="btn btn-dark" type="submit">Suscribirme<i
                                    className="d-icon-arrow-right"></i></button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}