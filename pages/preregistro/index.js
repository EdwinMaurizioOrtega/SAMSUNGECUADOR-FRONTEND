import Helmet from "react-helmet";
import ALink from "~/components/features/custom-link";
import {useForm, Controller, useFieldArray} from 'react-hook-form';

function PreRegistro() {

    const {control, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                checkboxOptions: Array(11).fill({selected: false}), // Initialize the checkboxOptions array with 7 elements, all set to false.
            },
        }
    );

    const onSubmit = (data) => {
        console.log('Form data V1:', data);

        data.checkboxOptions.forEach((option, index) => {
            data[`option${index}`] = option.selected;
        });

        delete data.checkboxOptions;

        console.log(JSON.stringify(data, null, 2));



        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "firstname": data["first-name"],
            "lastname": data["last-name"],
            "birthdate":  data["fecha-nacimiento"],
            "email": data["email-a"],
            "confirmemail": data["email-b"],
            "phone": data["tlf"],

            "currentdevice": data["actual_dispositivo"],
            "checkboxOptions0": data.option0,
            "checkboxOptions1": data.option1,
            "checkboxOptions2": data.option2,
            "checkboxOptions3": data.option3,
            "checkboxOptions4": data.option4,
            "checkboxOptions5": data.option5,
            "checkboxOptions6": data.option6,
            "enjoydevice": data["disfrutas_dispositivo"],
            "checkboxOptions7": data.option7,
            "checkboxOptions8": data.option8,
            "checkboxOptions9": data.option9,
            "checkboxOptions10": data.option10,
            "checkboxOptions11": data.option11,
            "checkboxOptions12": true,
            "checkboxOptions13": true,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        //fetch("http://localhost/preregistro", requestOptions)
        fetch("https://api.samsungecuador.com/preregistro", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert('¡Formulario enviado con éxito!');

        // Reload the page after 2 seconds
        setTimeout(() => {
            window.location.reload();
        }, 2000);

    };

    return (
        <main className="main checkout">
            <Helmet>
                <title>Samsung Ecuador | Checkout</title>
            </Helmet>

            <h1 className="d-none">Samsung Ecuador - Checkout</h1>

            <div className={`page-content pt-7 pb-10 mb-10}`}>

                <figure className="post-media">
                    <video width="100%" controls autoPlay={true} loop={true}>
                        <source src="/images/video_2.mp4" type="video/mp4"/>
                    </video>
                </figure>

                <div className="step-by pr-4 pl-4">
                    <h1>Únete al lado Flip</h1>
                </div>

                <div className="step-by pr-4 pl-4">
                    <h3 className="title title-simple active">Pre-regístrate y recibe un
                        e-voucher de $50* para la pre-compra de los nuevos Galaxy.
                    </h3>
                </div>
                <div className="container mt-7">

                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="row">
                            <div className="col-lg-12 mb-6 mb-lg-0 pr-lg-4">
                                <h3 className="title title-simple text-left text-uppercase">DETALLES</h3>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <label>Nombre *</label>
                                        <Controller
                                            name="first-name"
                                            control={control}
                                            defaultValue=""
                                            render={({field}) => <input required type="text"
                                                                        className="form-control" {...field} />}
                                        />
                                    </div>
                                    <div className="col-xs-6">
                                        <label>Apellido *</label>
                                        <Controller
                                            name="last-name"
                                            control={control}
                                            defaultValue=""
                                            render={({field}) => <input required type="text"
                                                                        className="form-control" {...field} />}
                                        />
                                    </div>
                                </div>
                                <label>Fecha de Nacimiento (dd/MM/yyyy) *</label>
                                <Controller
                                    name="fecha-nacimiento"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <input required type="text"
                                                                className="form-control" {...field} />}
                                />

                                <label>Correo Electrónico *</label>

                                <Controller
                                    name="email-a"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <input required type="email"
                                                                className="form-control" {...field} />}
                                />


                                <label>Confirmar Correo Electrónico *</label>
                                <Controller
                                    name="email-b"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <input required type="email"
                                                                className="form-control" {...field} />}
                                />
                                <label>Teléfono Móvil de Contacto *</label>
                                <Controller
                                    name="tlf"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <input required type="number"
                                                                className="form-control" {...field} />}
                                />


                                <tr className="sumnary-shipping shipping-row-last">
                                    <td colSpan="2">
                                        <h4 className="summary-subtitle">¿Cuál es su dispositivo actual?</h4>
                                        <Controller
                                            name="actual_dispositivo"
                                            control={control}
                                            rules={{required: 'Value is required.'}}
                                            render={({field}) => (
                                                <>
                                                    <div className="flex justify-content-center">
                                                        <ul>
                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="galaxy_fold"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Galaxy Fold"
                                                                        checked={field.value === 'Galaxy Fold'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="galaxy_fold">
                                                                        Galaxy Fold
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="galaxy_flip"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Galaxy Flip"
                                                                        checked={field.value === 'Galaxy Flip'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="galaxy_flip">
                                                                        Galaxy Flip
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="galaxy_s23"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Galaxy Serie S23"
                                                                        checked={field.value === 'Galaxy Serie S23'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="galaxy_s23">
                                                                        Galaxy Serie S23
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="galaxy_note"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Galaxy Serie Note"
                                                                        checked={field.value === 'Galaxy Serie Note'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="galaxy_note">
                                                                        Galaxy Serie Note
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="galaxy_a"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Galaxy Serie A"
                                                                        checked={field.value === 'Galaxy Serie A'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="galaxy_a">
                                                                        Galaxy Serie A
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="iphone"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="iPhone"
                                                                        checked={field.value === 'iPhone'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="iphone">
                                                                        iPhone
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="otro"
                                                                        name="shipping_ac"
                                                                        className="custom-control-input"
                                                                        value="Otro"
                                                                        checked={field.value === 'Otro'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="otro">
                                                                        Otro
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </>
                                            )}
                                        />

                                    </td>
                                </tr>

                                <tr className="sumnary-shipping shipping-row-last">
                                    <td colSpan="2">
                                        <h4 className="summary-subtitle">¿Qué tipo de producto te interesa?</h4>

                                    </td>
                                </tr>

                                {/* Galaxy Fold Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[0].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-0`}
                                                    name={`create-account-0`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-0`}
                                                >
                                                    Galaxy Fold
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* Galaxy Flip Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[1].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-1`}
                                                    name={`create-account-1`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-1`}
                                                >
                                                    Galaxy Flip
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* Galaxy Smartphone (Otros modelos) Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[2].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-2`}
                                                    name={`create-account-2`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-2`}
                                                >
                                                    Galaxy Smartphone (Otros modelos)
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* Galaxy Tab Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[3].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-3`}
                                                    name={`create-account-3`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-3`}
                                                >
                                                    Galaxy Tab
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* Galaxy Watch Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[4].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-4`}
                                                    name={`create-account-4`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-4`}
                                                >
                                                    Galaxy Watch
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                <tr className="sumnary-shipping shipping-row-last">
                                    <td colSpan="2">
                                        <h4 className="summary-subtitle">¿Qué tipo de oferta le interesa?</h4>

                                    </td>
                                </tr>

                                {/* Doble Almacenamiento Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[5].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-5`}
                                                    name={`create-account-5`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-5`}
                                                >
                                                    Doble Almacenamiento
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* e-voucher Checkbox */}
                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[6].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-6`}
                                                    name={`create-account-6`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-6`}
                                                >
                                                    e-voucher
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                <tr className="sumnary-shipping shipping-row-last">
                                    <td colSpan="2">
                                        <h4 className="summary-subtitle">¿Qué es lo que más disfrutas en tu dispositivo
                                            móvil?</h4>


                                        <Controller
                                            name="disfrutas_dispositivo"
                                            control={control}
                                            rules={{required: 'Value is required.'}}
                                            render={({field}) => (
                                                <>
                                                    <div className="flex justify-content-center">
                                                        <ul>
                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="juegos"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Juegos"
                                                                        checked={field.value === 'Juegos'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="juegos">
                                                                        Juegos
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="streaming"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Streaming"
                                                                        checked={field.value === 'Streaming'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="streaming">
                                                                        Streaming
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="musica"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Música"
                                                                        checked={field.value === 'Música'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="musica">
                                                                        Música
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="camara"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Cámara"
                                                                        checked={field.value === 'Cámara'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="camara">
                                                                        Cámara
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="salud-bienestrar"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Salud y Bienestar"
                                                                        checked={field.value === 'Salud y Bienestar'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="salud-bienestrar">
                                                                        Salud y Bienestar
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="iphone_v2"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="iPhone"
                                                                        checked={field.value === 'iPhone'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="iphone_v2">
                                                                        iPhone
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="custom-radio">
                                                                    <input
                                                                        type="radio"
                                                                        id="productividad"
                                                                        name="shipping_ac_v2"
                                                                        className="custom-control-input"
                                                                        value="Productividad"
                                                                        checked={field.value === 'Productividad'}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                    />
                                                                    <label className="custom-control-label"
                                                                           htmlFor="productividad">
                                                                        Productividad
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </>
                                            )}
                                        />

                                    </td>
                                </tr>

                                <tr className="sumnary-shipping shipping-row-last">
                                    <td colSpan="2">
                                        <h4 className="summary-subtitle">¿Dónde buscas generalmente noticias de
                                            tecnología?</h4>

                                    </td>
                                </tr>


                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[7].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-7`}
                                                    name={`create-account-7`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-7`}
                                                >
                                                    Influenciadores
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[8].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-8`}
                                                    name={`create-account-8`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-8`}
                                                >
                                                    Reseñas de tecnología (YouTube/Redes sociales)
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>


                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[9].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-9`}
                                                    name={`create-account-9`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-9`}
                                                >
                                                    Medios de comunicación
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>


                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[10].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-10`}
                                                    name={`create-account-10`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-10`}
                                                >
                                                    Familia y amigos
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>


                                <div className="form-checkbox mb-0 pt-0">
                                    <Controller
                                        name={`checkboxOptions[11].selected`}
                                        control={control}
                                        defaultValue={false}
                                        render={({field}) => (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    className="custom-checkbox"
                                                    id={`create-account-11`}
                                                    name={`create-account-11`}
                                                    {...field}
                                                />
                                                <label
                                                    className="form-control-label ls-s"
                                                    htmlFor={`create-account-11`}
                                                >
                                                    Otros
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>


                                <div className="form-checkbox mt-4 mb-5">
                                    <input type="checkbox" className="custom-checkbox" id="terms-condition"
                                           name="terms-condition" />
                                    <label className="form-control-label" htmlFor="terms-condition">
                                        Acepto la <ALink href="#">* Política de Privacidad de Samsung *</ALink>
                                    </label>

                                    <input type="checkbox" className="custom-checkbox" id="terms-condition-v2"
                                           name="terms-condition" />
                                    <label className="form-control-label" htmlFor="terms-condition-v2">
                                        Deseo recibir comunicaciones de Samsung
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-dark btn-rounded btn-order">registrarse
                                </button>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    )

}

export default (PreRegistro);