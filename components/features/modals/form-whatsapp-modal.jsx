import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: "flex"
    }
};

let index = 0;

Modal.setAppElement( "#__next" );

function FormWhatsAppModal ({product}) {
    const [ open, setOpen ] = useState( false );

    function closeModal () {
        document.querySelector( ".ReactModal__Overlay" ).classList.add( 'removed' );
        document.querySelector( ".login-popup.ReactModal__Content" ).classList.remove( "ReactModal__Content--after-open" );
        document.querySelector( ".login-popup-overlay.ReactModal__Overlay" ).classList.remove( "ReactModal__Overlay--after-open" );
        setTimeout( () => {
            setOpen( false );
        }, 330 );
    }

    function openModal ( e, loginIndex = 0 ) {
        e.preventDefault();
        index = loginIndex;
        setOpen( true );
    }


    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento de envío por defecto del formulario

        console.log(product.data.name);

        // Obtiene los valores de los campos
        const nombre = event.target.nombre.value;
        const cedula = event.target.cedula.value;
        const email = event.target.email.value;
        const telefono = event.target.telefono.value;
        const direccion = event.target.direccion.value;
        const ciudad = event.target.ciudad.value;

        // Imprime los valores en la consola
        console.log('Nombre/Apellido:', nombre);
        console.log('Cédula:', cedula);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);
        console.log('Dirección:', direccion);
        console.log('Ciudad:', ciudad);


        // Construye la URL de WhatsApp con los valores del formulario
        const whatsappUrl = `https://web.whatsapp.com/send?phone=593939991111&text=Producto: *${product.data.name}*%0ANombre: ${nombre}%0ACédula: ${cedula}%0AEmail: ${email}%0ATeléfono: ${telefono}%0ADirección: ${direccion}%0ACiudad: ${ciudad}`;

        // Redirecciona a la URL de WhatsApp
        //window.location.href = whatsappUrl;

        // Abre la URL de WhatsApp en una nueva pestaña del navegador
        window.open(whatsappUrl, '_blank');
    };





    const handleSubmitAux = (event) => {
        event.preventDefault(); // Evita el comportamiento de envío por defecto del formulario

        const whatsappUrl = `https://web.whatsapp.com/send?phone=593939991111&text=Hola, estoy interesado/a en este producto: ${product.data.name}, Precio promocional: $${product.data.price[0]}, Precio PVP: $${product.data.price[1]}`;
        window.open(whatsappUrl, '_blank');

    }



    return (
        <>
            <button onClick={handleSubmitAux} className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold `}><i
                className='fab fa-whatsapp'></i>Comprar
            </button>

            {
                open ?
                    <Modal
                        isOpen={ open }
                        onRequestClose={ closeModal }
                        style={ customStyles }
                        contentLabel="Login Modal"
                        className="login-popup"
                        overlayClassName="login-popup-overlay"
                        shouldReturnFocusAfterClose={ false }
                        id="login-modal"
                    >
                        <div className="form-box">
                            <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active" defaultIndex={ index }>
                                    <TabList className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5">
                                        <Tab className="nav-item">
                                            <span className="nav-link border-no lh-1 ls-normal">Whatsapp</span>
                                        </Tab>
                                        {/*<li className="delimiter">o</li>*/}
                                        {/*<Tab className="nav-item">*/}
                                        {/*    <span className="nav-link border-no lh-1 ls-normal">Facebook</span>*/}
                                        {/*</Tab>*/}
                                    </TabList>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane">
                                            <form action="#" onSubmit={handleSubmit}>
                                                <div className="form-group mb-3">
                                                    <input type="text" className="form-control" id="nombre" name="singin-email" placeholder="Nombre/Apellido" required />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="text" className="form-control" id="cedula" name="singin-email" placeholder="Cédula" required />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="text" className="form-control" id="email" name="singin-email" placeholder="Email" required />
                                                </div>
                                                {/*<div className="form-group mb-3">*/}
                                                {/*    <input type="text" className="form-control" id="telefono" name="singin-email" placeholder="Teléfono" required />*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group mb-3">*/}
                                                {/*    <input type="text" className="form-control" id="direccion" name="singin-email" placeholder="Dirección" required />*/}
                                                {/*</div>*/}
                                                {/*<div className="form-group mb-3">*/}
                                                {/*    <input type="text" className="form-control" id="ciudad" name="singin-email" placeholder="Ciudad" required />*/}
                                                {/*</div>*/}

                                                <button className="btn btn-dark btn-block btn-rounded" type="submit">Enviar</button>
                                            </form>
                                            {/*<div className="form-choice text-center">*/}
                                            {/*    <label className="ls-m">or Login With</label>*/}
                                            {/*    <div className="social-links">*/}
                                            {/*        <ALink href="#" className="social-link social-google fab fa-google border-no"></ALink>*/}
                                            {/*        <ALink href="#" className="social-link social-facebook fab fa-facebook-f border-no"></ALink>*/}
                                            {/*        <ALink href="#" className="social-link social-twitter fab fa-twitter border-no"></ALink>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </TabPanel>

                                        {/*<TabPanel className="tab-pane">*/}
                                        {/*    <form action="#">*/}
                                        {/*        <div className="form-group">*/}
                                        {/*            <label htmlFor="singin-email">Your email address:</label>*/}
                                        {/*            <input type="email" className="form-control" id="register-email" name="register-email" placeholder="Your Email address *" required />*/}
                                        {/*        </div>*/}
                                        {/*        <div className="form-group">*/}
                                        {/*            <label htmlFor="singin-password">Password:</label>*/}
                                        {/*            <input type="password" className="form-control" id="register-password" name="register-password" placeholder="Password *" required />*/}
                                        {/*        </div>*/}
                                        {/*        <div className="form-footer">*/}
                                        {/*            <div className="form-checkbox">*/}
                                        {/*                <input type="checkbox" className="custom-checkbox" id="register-agree" name="register-agree"*/}
                                        {/*                    required />*/}
                                        {/*                <label className="form-control-label" htmlFor="register-agree">I agree to the privacy policy</label>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <button className="btn btn-dark btn-block btn-rounded" type="submit">Register</button>*/}
                                        {/*    </form>*/}
                                        {/*    <div className="form-choice text-center">*/}
                                        {/*        <label className="ls-m">or Register With</label>*/}
                                        {/*        <div className="social-links">*/}
                                        {/*            <ALink href="#" className="social-link social-google fab fa-google border-no"></ALink>*/}
                                        {/*            <ALink href="#" className="social-link social-facebook fab fa-facebook-f border-no"></ALink>*/}
                                        {/*            <ALink href="#" className="social-link social-twitter fab fa-twitter border-no"></ALink>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</TabPanel>*/}
                                    </div>
                                </Tabs>
                            </div>
                        </div>

                        <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal }><span>×</span></button>
                    </Modal> : ''
            }
        </>
    )
}

export default ( FormWhatsAppModal );