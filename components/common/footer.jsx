import ALink from '~/components/features/custom-link';
import NewsletterBanner from '~/components/partials/home/newsletter-banner';

import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Footer() {
    return (
        <>
            <NewsletterBanner />

            <footer className="footer">
                <div className="container">
                    <div className="footer-middle">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget-info">
                                    <h4 className="widget-title">Datos de contacto</h4>
                                    <ul className="widget-body">
                                        <li>
                                            <label>Teléfono: </label>
                                            <ALink href="tel:093 999 2225">093 999 2225</ALink>
                                        </li>
                                        <li>
                                            <label>Correo: </label>
                                            <ALink href="mailto:ventasdigitales@hipertronics.us">ventasdigitales@hipertronics.us</ALink>
                                        </li>
                                        <li>
                                            <label>Dirección: </label>
                                            <ALink href="#">Padre Aguirre 9-68, Cuenca, Ecuador</ALink>
                                        </li>
                                        <li>
                                            <label>DIAS LABORABLES / HORAS: </label>
                                        </li>
                                        <li>
                                            <ALink href="#">Lun - Sab / 9:00 AM - 8:00 PM</ALink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="widget">
                                    <h4 className="widget-title">Mi cuenta</h4>
                                    <ul className="widget-body">
                                        <li>
                                            <ALink href="/pages/about-us">Seguimiento de mi pedido</ALink>
                                        </li>
                                        <li>
                                            <ALink href="/pages/cart">Ver carrito</ALink>
                                        </li>
                                        <li>
                                            <ALink href="/pages/account">Iniciar sesión</ALink>
                                        </li>
                                        <li>
                                            <ALink href="/pages/wishlist">Lista de deseos</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Política de privacidad</ALink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="widget">
                                    <h4 className="widget-title">Nosotros</h4>
                                    <ul className="widget-body">
                                        <li>
                                            <ALink href="/pages/about-us">Sobre nosotros</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Historial de pedidos</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Devoluciones</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Servicio personalizado</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Términos &amp; Condiciones</ALink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    <ul className="widget-body">
                                        <li>
                                            <ALink href="#">Métodos de pago</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">¡Garantía de devolución del dinero!</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Devoluciones de productos</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Centro de Apoyo</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Envío</ALink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget-instagram pl-lg-10 mb-0 mb-md-6">
                                    <h4 className="widget-title">Redes Sociales</h4>
                                    <figure className="widget-body row">
                                        <div className="col-3">
                                            <ALink href="https://es-la.facebook.com/hipertronics/">
                                                <LazyLoadImage
                                                    src="images/instagram/01.jpg"
                                                    alt="instagram 1"
                                                    width="64"
                                                    height="64"
                                                />
                                            </ALink>
                                        </div>
                                        <div className="col-3">
                                            <ALink href="https://www.tiktok.com/tag/hipertronics/">
                                                <LazyLoadImage
                                                    src="images/instagram/02.jpg"
                                                    alt="instagram 2"
                                                    width="64"
                                                    height="64"
                                                />
                                            </ALink>
                                        </div>
                                        <div className="col-3">
                                            <ALink href="https://www.instagram.com/hipertronics/?hl=es">
                                                <LazyLoadImage
                                                    src="images/instagram/03.jpg"
                                                    alt="instagram 3"
                                                    width="64"
                                                    height="64"
                                                />
                                            </ALink>
                                        </div>
                                        <div className="col-3">
                                            <ALink href="https://www.linkedin.com/company/hipertronics/?originalSubdomain=ec">
                                                <LazyLoadImage
                                                    src="images/instagram/04.jpg"
                                                    alt="instagram 4"
                                                    width="64"
                                                    height="64"
                                                />
                                            </ALink>
                                        </div>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-left">
                            <figure className="payment">
                                <img src="images/payment.png" alt="payment" width="159" height="29" />
                            </figure>
                        </div>
                        <div className="footer-center">
                            <p className="copyright">Samsung eCommerce &copy; 2023. Built with love by LIDENAR S.A.</p>
                        </div>
                        <div className="footer-right">
                            <div className="social-links">
                                {/*<ALink target="_blank" href="https://www.facebook.com/hipertronics" className="social-link social-facebook fab fa-facebook-f"></ALink>*/}
                                {/*<ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>*/}
                                {/*<ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}