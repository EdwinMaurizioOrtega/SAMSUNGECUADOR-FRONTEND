import React from 'react';

import ALink from '~/components/features/custom-link';

function BannerOneSection () {
    return (
        <section className="newsletter-section mb-10 pb-7">
            <div className="container">
                <div className="banner banner-radius" style={ { backgroundImage: "url(images/home/banner/7.jpg)", backgroundColor: "#1c2225" } }>
                    <div className="banner-content">
                        <h4 className="banner-title text-white mt-0 mt-md-3 ls-m">¡Descarga la aplicación HT PREMIUM!</h4>
                        <p className="text-white">Compra rápido y fácil más con nuestra aplicación. Obtenga un enlace para descargar la aplicación en su teléfono.</p>
                        {/*<form action="#" method="get" className="input-wrapper input-wrapper-inline">*/}
                        {/*    <input type="email" className="form-control" name="email" id="email2" placeholder="Enter Your Email..." required />*/}
                        {/*    <button className="btn btn-primary" type="submit">Send</button>*/}
                        {/*</form>*/}
                        <ALink target="_blank" className="btn btn-white btn-link btn-underline ls-m" href="https://play.google.com/store/apps/details?id=apps.galoguartatanga.com.mobilecuador&hl=es_EC&gl=US">
                            Descargar<i className="d-icon-arrow-right"></i>
                        </ALink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BannerOneSection );