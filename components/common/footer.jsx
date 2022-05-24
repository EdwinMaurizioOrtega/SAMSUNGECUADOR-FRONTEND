import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <ALink href="market1.html" className="logo-footer">
                                <img src="images/home/footer-logo.png" alt="logo-footer" width="153"
                                    height="44" />
                            </ALink>

                        </div>
                        <div className="col-lg-4 widget-newsletter mb-4 mb-lg-0">
                            <h4 className="widget-title ls-m">Obtenga ofertas especiales y ahorros</h4>
                            <p>Obtenga toda la información más reciente sobre eventos, ventas y ofertas.</p>
                        </div>
                        <div className="col-lg-5 widget-newsletter">
                            <form action="#" className="input-wrapper-inline mx-auto mx-lg-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="dirección de correo electrónico aquí..." required />
                                <button className="btn btn-primary btn-rounded ml-2" type="submit">suscribirme<i className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info">
                                <h4 className="widget-title">Datos de contacto</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Teléfono: </label>
                                        <ALink href="tel:093 999 1111">093 999 1111</ALink>
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
                                <h4 className="widget-title">Instagram</h4>
                                <figure className="widget-body row">
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/01.jpg"
                                            alt="instagram 1"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/02.jpg"
                                            alt="instagram 2"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/03.jpg"
                                            alt="instagram 3"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/04.jpg"
                                            alt="instagram 4"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/05.jpg"
                                            alt="instagram 5"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/06.jpg"
                                            alt="instagram 6"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/07.jpg"
                                            alt="instagram 7"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <LazyLoadImage
                                            src="images/instagram/08.jpg"
                                            alt="instagram 8"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>

                {/*<div className="footer-main">*/}
                {/*    <div className="widget widget-category">*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Clothing & Apparel:</h6>*/}

                {/*            <ALink href="#">Boots</ALink>*/}
                {/*            <ALink href="#">Dresses</ALink>*/}
                {/*            <ALink href="#">Jeans</ALink>*/}
                {/*            <ALink href="#">Leather Backpack</ALink>*/}
                {/*            <ALink href="#">Men's Sneaker</ALink>*/}
                {/*            <ALink href="#">Men's T-shirt</ALink>*/}
                {/*            <ALink href="#">Peter England Shirts</ALink>*/}
                {/*            <ALink href="#">Rayban</ALink>*/}
                {/*            <ALink href="#">Sunglasses</ALink>*/}

                {/*        </div>*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Computer & Technologies:</h6>*/}

                {/*            <ALink href="#">Apple</ALink>*/}
                {/*            <ALink href="#">Drone</ALink>*/}
                {/*            <ALink href="#">Game Controller</ALink>*/}
                {/*            <ALink href="#">iMac</ALink>*/}
                {/*            <ALink href="#">Laptop</ALink>*/}
                {/*            <ALink href="#">Smartphone</ALink>*/}
                {/*            <ALink href="#">Tablet</ALink>*/}
                {/*            <ALink href="#">Wireless Speaker</ALink>*/}

                {/*        </div>*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Consumer Electric:</h6>*/}
                {/*            <ALink href="#">Air Condition</ALink>*/}
                {/*            <ALink href="#">Audio Speaker</ALink>*/}
                {/*            <ALink href="#">Refrigerator</ALink>*/}
                {/*            <ALink href="#">Security Camera</ALink>*/}
                {/*            <ALink href="#">TV Television</ALink>*/}
                {/*            <ALink href="#">Washing Machine</ALink>*/}
                {/*        </div>*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Jewellery & Watches:</h6>*/}
                {/*            <ALink href="#">Ammolite</ALink>*/}
                {/*            <ALink href="#">Australian Opal</ALink>*/}
                {/*            <ALink href="#">Diamond Ring</ALink>*/}
                {/*            <ALink href="#">Faceted Carnelian</ALink>*/}
                {/*            <ALink href="#">Gucci</ALink>*/}
                {/*            <ALink href="#">Leather Watcher</ALink>*/}
                {/*            <ALink href="#">Necklace</ALink>*/}
                {/*            <ALink href="#">Pendant</ALink>*/}
                {/*            <ALink href="#">Rolex</ALink>*/}
                {/*            <ALink href="#">Silver Earing</ALink>*/}
                {/*            <ALink href="#">Sun Pyrite</ALink>*/}
                {/*            <ALink href="#">Watches</ALink>*/}
                {/*        </div>*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Healthy & Beauty:</h6>*/}
                {/*            <ALink href="#">Body Shower</ALink>*/}
                {/*            <ALink href="#">Hair Care</ALink>*/}
                {/*            <ALink href="#">LipStick</ALink>*/}
                {/*            <ALink href="#">Makeup</ALink>*/}
                {/*            <ALink href="#">Perfume</ALink>*/}
                {/*            <ALink href="#">Skin Care</ALink>*/}
                {/*        </div>*/}
                {/*        <div className="category-box">*/}
                {/*            <h6 className="category-name">Home, Garden & Kitchen:</h6>*/}
                {/*            <ALink href="#">Bed Room</ALink>*/}
                {/*            <ALink href="#">Blender</ALink>*/}
                {/*            <ALink href="#">Chair</ALink>*/}
                {/*            <ALink href="#">Cookware</ALink>*/}
                {/*            <ALink href="#">Decor</ALink>*/}
                {/*            <ALink href="#">Garden Equipments</ALink>*/}
                {/*            <ALink href="#">Library</ALink>*/}
                {/*            <ALink href="#">Living Room</ALink>*/}
                {/*            <ALink href="#">Shield-Oval</ALink>*/}
                {/*            <ALink href="#">Sofa</ALink>*/}
                {/*            <ALink href="#">Utensil</ALink>*/}
                {/*            <ALink href="#">Wayfarer</ALink>*/}
                {/*        </div>*/}



                {/*    </div>*/}
                {/*</div>*/}
                <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <img src="images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright">Lidenar S.A eCommerce &copy; 2022. Built with love by LIDENAR S.A.</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <ALink target="_blank" href="https://www.facebook.com/hipertronics" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            {/*<ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>*/}
                            {/*<ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>*/}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}