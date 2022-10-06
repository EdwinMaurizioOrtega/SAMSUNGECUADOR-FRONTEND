import React, {useState} from 'react';
import {Helmet} from 'react-helmet';

import {useLazyQuery} from "@apollo/react-hooks";

import {GET_GARANTIA_IMEI_DATA} from "/server/queries";
import withApollo from "server/apollo";
import ALink from "~/components/features/custom-link";

function SearchIMEI() {

    const [enteredName, setEnteredName] = useState(''); //INIT TO EMPTY

    const [getPosts, {data, loading, error}] = useLazyQuery(GET_GARANTIA_IMEI_DATA);
    console.log(data && data.garantiaLidenar.garantia);

    const showImei = enteredName => {
        getPosts({variables: {imei: enteredName}})
    }

    //console.log(GET_GARANTIA_IMEI_DATA)

    return (
        <main className="main">
            <Helmet>
                <title>Search IMEI | PAC | SAP</title>
            </Helmet>

            <h1 className="d-none">Search IMEI | PAC | SAP</h1>

            <div className="page-content">
                <section
                    className="error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3">
                    <h1 className="mb-2 ls-m">Validar Garantía Lidenar - Hipertronics</h1>
                    <div className="App" style={{display: "contents"}}>

                        <div className="input-wrapper input-wrapper-inline input-wrapper-round">
                            <input type="text" className="form-control email" name="email" id="email2" placeholder="IMEI here..." required
                                   value={enteredName}
                                   onChange={e => { setEnteredName(e.currentTarget.value); }}
                            />
                            <button className="btn btn-dark"

                                    onClick={() => {
                                        showImei(enteredName)
                                    }}
                            >BUSCAR</button>
                        </div>
                        <h1>{data && data.garantiaLidenar.garantia}</h1>

                    </div>


                </section>
                <div className="container mt-12">
                <form action="#" className="form">
                    <div className="row">
                        <div className="col-lg-12 mb-6 mb-lg-0 pr-lg-4">
                            <h3 className="title title-simple text-left text-uppercase">CREAR ORDEN - EQUIPO FUERA DE GARANTÍA</h3>
                            <div className="row">
                                <div className="col-xs-6">
                                    <label>IMEI *</label>
                                    <input type="text" className="form-control" name="first-name" required />
                                </div>
                                <div className="col-xs-6">
                                    <label>FECHA FIN GARANTÍA *</label>
                                    <input type="text" className="form-control" name="first-name" required />
                                </div>
                                <div className="col-xs-6">
                                    <label>NÚMERO DE CONTACTO *</label>
                                    <input type="text" className="form-control" name="last-name" required />
                                </div>
                            </div>
                            <label>FALLAS DEL EQUIIPO *</label>
                            <textarea className="form-control pb-2 pt-2 mb-0" cols="30" rows="5"
                                      placeholder="Diagnóstico de equipo celular." required></textarea>

                            <div className="form-checkbox mt-4 mb-5">
                                <button type="submit" className="btn btn-dark btn-rounded btn-order">CREAR - IMPRIMIR</button>
                            </div>

                        </div>

                    </div>
                </form>
                </div>
            </div>
        </main>
    )
}

export default withApollo({ssr: typeof window === 'undefined'})(SearchIMEI);