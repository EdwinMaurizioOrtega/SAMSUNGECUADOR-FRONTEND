import React, {useState} from 'react';
import {Helmet} from 'react-helmet';

import {useLazyQuery} from "@apollo/react-hooks";

import {GET_GARANTIA_IMEI_DATA} from "/server/queries";
import withApollo from "server/apollo";

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
                    <h1 className="mb-2 ls-m">Validar Garantia Lidenar - Hipertronics</h1>
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
            </div>
        </main>
    )
}

export default withApollo({ssr: typeof window === 'undefined'})(SearchIMEI);