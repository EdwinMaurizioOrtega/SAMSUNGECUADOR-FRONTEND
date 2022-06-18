import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { useState } from "react";

import ALink from '~/components/features/custom-link';

import { parallaxHandler } from '~/utils';
import {GET_GARANTIA_IMEI_DATA} from "~/server/queries";
import {useQuery} from "@apollo/react-hooks";



const SearchQuery = gql`
query FindTeam($query: String!) {
  search(query: $query, type: TEAM) {
    name
  }
}
`;

function SearchIMEI () {
    useEffect( () => {
        window.addEventListener( 'scroll', parallaxHandler, true );

        return () => {
            window.removeEventListener( 'scroll', parallaxHandler, true );
        }
    }, [] )

    //const { data, loading, error } = useQuery( GET_GARANTIA_IMEI_DATA, { variables: { imei: 9 } } );



    const { search } = this.state;
    return (
        <main className="main">
            <Helmet>
                <title>Search IMEI | PAC | SAP</title>
            </Helmet>

            <h1 className="d-none">Search IMEI | PAC | SAP</h1>

            <div className="page-content">
                <section
                    className="error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3">
                    <h1 className="mb-2 ls-m">Validar Garantia</h1>
                    <div className="App">

                        <form onSubmit={ this.submitSearch }>
                            <input
                                type='text'
                                onChange={ this.updateSearch }
                                value={ search }
                                placeholder='Search'
                            />
                            <Query query={SearchQuery} skip={!search} variables={{query: search}}>
                                {({loading, error, data}) => {
                                    if (loading) return null;
                                    if (error) throw err;
                                    return <h1>{data.search.namej}</h1>
                                }}
                            </Query>
                        </form>

                    </div>


                </section>
            </div>
        </main >
    )
}

export default React.memo( SearchIMEI );