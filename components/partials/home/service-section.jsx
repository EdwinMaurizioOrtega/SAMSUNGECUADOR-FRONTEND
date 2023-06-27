import React from 'react';

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';

function ServiceBox ( props ) {
    return (
        <div className="service-wrapper mt-2 mb-10">
            <div className="service-list">
                <OwlCarousel adClass="owl-theme" options={ serviceSlider }>
                    <div className="icon-box icon-box-side icon-box1">
                        <i className="icon-box-icon d-icon-truck"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize lh-1">Envío gratis</h4>
                            <p className="lh-1">Ventas superiores a $1000</p>
                        </div>
                    </div>

                    <div className="icon-box icon-box-side icon-box2">
                        <i className="icon-box-icon d-icon-service"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize lh-1">Atención al cliente 24/7</h4>
                            <p className="lh-1">Acceso instantáneo a un soporte perfecto</p>
                        </div>
                    </div>

                    <div className="icon-box icon-box-side icon-box3">
                        <i className="icon-box-icon d-icon-secure"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize lh-1">Compra 100% segura</h4>
                            <p className="lh-1">Productos 100% originales!</p>
                        </div>
                    </div>

                    <div className="icon-box icon-box-side icon-box4">
                        <i className="icon-box-icon d-icon-money"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize lh-1">Cashback</h4>
                            <p className="lh-1">Te regresamos tu dinero</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default React.memo( ServiceBox );