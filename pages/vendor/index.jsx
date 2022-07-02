import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Collapse from 'react-bootstrap/Collapse';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

function VendorList () {
    const [ search, toggleSearch ] = useState( false );

    return (
        <main className="main store-listing">
            <Helmet>
                <title>Riode React eCommerce Template | Vendor Grid </title>
            </Helmet>

            <div className="page-content mb-10 pb-10">
                <div className="container">
                    <nav className="breadcrumb-nav">
                        <ul className="breadcrumb">
                            <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                            <li>Store List</li>
                        </ul>
                    </nav>
                    <div className="toolbox">
                        <div className="toolbox-left mb-4 mb-md-0">
                            <ALink href="#" className="toolbox-item btn btn-outline btn-dark btn-rounded btn-icon-left form-toggle-btn" onClick={ () => toggleSearch( !search ) }>
                                <i className="d-icon-filter-2"></i>Filter
                            </ALink>
                            <p className="store-count">Total store showing: 6</p>
                        </div>
                        <div className="toolbox-right">
                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                <label className="d-block">Sort By:</label>
                                <select name="orderby" className="form-control">
                                    <option value="default">Most Recent</option>
                                    <option value="popularity">Most Popular</option>
                                </select>
                            </div>
                            <div className="toolbox-item toolbox-layout">
                                <ALink href="/vendor" className="d-icon-mode-grid btn-layout active"></ALink>
                                <ALink href="/vendor/list" className="d-icon-mode-list btn-layout"></ALink>
                            </div>
                        </div>
                    </div>
                    <Collapse in={ search }>
                        <div className="card-wrapper">
                            <div className="form-wrapper mt-4">
                                <form action="#" className="input-wrapper-inline">
                                    <input type="email" className="form-control" name="vendor" id="vendor" placeholder="Search Vendors" required />
                                    <button className="btn btn-dark btn-rounded" type="submit">Apply</button>
                                </form>
                            </div>
                        </div>
                    </Collapse>
                    <div className="row cols-lg-3 cols-sm-2 cols-1 mt-4">
                        <div className="store-wrapper">
                            <div className="store">
                                <div className="store-header" style={ { backgroundColor: "#8d9eaa" } }>
                                    <figure className="store-banner">
                                        <LazyLoadImage
                                            src="images/home/vendor/store/1.jpg"
                                            alt="Vendor"
                                            width="447"
                                            height="291"
                                            effect="opacity"
                                        />
                                    </figure>
                                </div>
                                <div className="store-content">
                                    <h2 className="store-title">
                                        <ALink href="/vendor/single">Oficina</ALink>
                                        <span className="featured-label">Matriz</span>
                                    </h2>
                                    <div className="ratings-container">
                                        <span className="ratings-full" title="Rated 4.65 out of 5">
                                            <span className="ratings" style={ { width: "87%" } }>4.65</span>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="street">Padre Aguirre 9-68 y Gran comobia,</span><br />
                                        <span className="city">Cuenca,</span><br />
                                        <span className="state">Azuay,</span>
                                        <span className="Country">Ecuador</span>
                                    </p>
                                    <div className="store-phone">
                                        <i className="fa fa-phone"></i>0980151017
                                    </div>
                                </div>
                                <div className="store-footer">
                                    <figure className="seller-avatar">
                                        <LazyLoadImage
                                            src="images/home/vendor/avatar/1.jpg"
                                            alt="Vendor avatar"
                                            width="64"
                                            height="64"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <ALink href="https://goo.gl/maps/bfpJEdy8FPnu6n9k8" className=
                                        "btn btn-dark btn-link btn-underline">Encuentranos en:<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                        <div className="store-wrapper">
                            <div className="store">
                                <div className="store-header">
                                    <figure className="store-banner" style={ { backgroundColor: "#c2c3c3" } }>
                                        <LazyLoadImage
                                            src="images/home/vendor/store/2.jpg"
                                            alt="Vendor"
                                            width="447"
                                            height="291"
                                        />
                                    </figure>
                                </div>
                                <div className="store-content">
                                    <h2 className="store-title">
                                        <ALink href="/vendor/single">Oficina Quito</ALink>
                                    </h2>
                                    <div className="ratings-container">
                                        <span className="ratings-full" title="Rated 4.65 out of 5">
                                            <span className="ratings" style={ { width: "87%" } }>4.65</span>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="street">Av. Naciones Unidas y Nuñez de Vela. Edificio Metropolitan. Oficina 609,</span><br />
                                        <span className="city">Quito,</span><br />
                                        <span className="state">Pichincha,</span>
                                        <span className="Country">Ecuador</span>
                                    </p>
                                    <div className="store-phone">
                                        <i className="fa fa-phone"></i>123456789
                                    </div>
                                </div>
                                <div className="store-footer">
                                    <figure className="seller-avatar">
                                        <LazyLoadImage
                                            src="images/home/vendor/avatar/2.jpg"
                                            alt="Vendor avatar"
                                            width="64"
                                            height="64"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <ALink href="https://goo.gl/maps/86e7RVJBEC5HyrcT8" className="btn btn-dark btn-link btn-underline">Encuentranos en:<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                        <div className="store-wrapper">
                            <div className="store">
                                <div className="store-header" style={ { backgroundColor: "#868d8d" } }>
                                    <figure className="store-banner">
                                        <LazyLoadImage
                                            src="images/home/vendor/store/3.jpg"
                                            alt="Vendor"
                                            width="447"
                                            height="291"
                                        />
                                    </figure>
                                </div>
                                <div className="store-content">
                                    <h2 className="store-title">
                                        <ALink href="/vendor/single">Oficina Guayaquil</ALink>
                                    </h2>
                                    <div className="ratings-container">
                                        <span className="ratings-full" title="Rated 4.65 out of 5">
                                            <span className="ratings" style={ { width: "87%" } }>4.65</span>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="street">Av. Villamil y Alberto Reyna. Edificio "El Dorado". Antes de subir al banco Pichincha,</span><br />
                                        <span className="city">Guayas,</span><br />
                                        <span className="state">guayaquil,</span>
                                        <span className="Country">Ecuador</span>
                                    </p>
                                    <div className="store-phone">
                                        <i className="fa fa-phone"></i>123456789
                                    </div>
                                </div>
                                <div className="store-footer">
                                    <figure className="seller-avatar">
                                        <LazyLoadImage
                                            src="images/home/vendor/avatar/3.jpg"
                                            alt="Vendor avatar"
                                            width="64"
                                            height="64"
                                            effect="opacity"
                                        />
                                    </figure>
                                    <ALink href="https://goo.gl/maps/fiZQo4ZtfCbiTzsk6" className="btn btn-dark btn-link btn-underline">Encuentranos en:<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                        {/*<div className="store-wrapper">*/}
                        {/*    <div className="store">*/}
                        {/*        <div className="store-header" style={ { backgroundColor: "#dac6ad" } }>*/}
                        {/*            <figure className="store-banner">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/store/4.jpg"*/}
                        {/*                    alt="Vendor"*/}
                        {/*                    width="447"*/}
                        {/*                    height="291"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-content">*/}
                        {/*            <h2 className="store-title">*/}
                        {/*                <ALink href="/vendor/single">Vendor4</ALink>*/}
                        {/*            </h2>*/}
                        {/*            <div className="ratings-container">*/}
                        {/*                <span className="ratings-full" title="Rated 4.65 out of 5">*/}
                        {/*                    <span className="ratings" style={ { width: "87%" } }>4.65</span>*/}
                        {/*                </span>*/}
                        {/*            </div>*/}
                        {/*            <p>*/}
                        {/*                <span className="state">Ontario,</span>*/}
                        {/*                <span className="Country">Canada</span>*/}
                        {/*            </p>*/}
                        {/*            <div className="store-phone">*/}
                        {/*                <i className="fa fa-phone"></i>123456789*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-footer">*/}
                        {/*            <figure className="seller-avatar">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/avatar/4.jpg"*/}
                        {/*                    alt="Vendor avatar"*/}
                        {/*                    width="64"*/}
                        {/*                    height="64"*/}
                        {/*                    effect="opacity"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*            <ALink href="/vendor/single" className="btn btn-dark btn-link btn-underline">Visit Store<i className="d-icon-arrow-right"></i></ALink>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="store-wrapper">*/}
                        {/*    <div className="store">*/}
                        {/*        <div className="store-header" style={ { backgroundColor: "#4c3f3d" } }>*/}
                        {/*            <figure className="store-banner">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/store/5.jpg"*/}
                        {/*                    alt="Vendor"*/}
                        {/*                    width="447"*/}
                        {/*                    height="291"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-content">*/}
                        {/*            <h2 className="store-title">*/}
                        {/*                <ALink href="/vendor/single">Vendor5</ALink>*/}
                        {/*            </h2>*/}
                        {/*            <div className="ratings-container">*/}
                        {/*                <span className="ratings-full" title="Rated 4.65 out of 5">*/}
                        {/*                    <span className="ratings" style={ { width: "87%" } }>4.65</span>*/}
                        {/*                </span>*/}
                        {/*            </div>*/}
                        {/*            <p>*/}
                        {/*                <span className="state">Canberra,</span>*/}
                        {/*                <span className="Country">Australia</span>*/}
                        {/*            </p>*/}
                        {/*            <div className="store-phone">*/}
                        {/*                <i className="fa fa-phone"></i>123456789*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-footer">*/}
                        {/*            <figure className="seller-avatar">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/avatar/5.jpg"*/}
                        {/*                    alt="Vendor avatar"*/}
                        {/*                    width="64"*/}
                        {/*                    height="64"*/}
                        {/*                    effect="opacity"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*            <ALink href="/vendor/single" className="btn btn-dark btn-link btn-underline">Visit Store<i className="d-icon-arrow-right"></i></ALink>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="store-wrapper">*/}
                        {/*    <div className="store">*/}
                        {/*        <div className="store-header" style={ { backgroundColor: "#2d3c3b" } }>*/}
                        {/*            <figure className="store-banner">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/store/6.jpg"*/}
                        {/*                    alt="Vendor"*/}
                        {/*                    width="447"*/}
                        {/*                    height="291"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-content">*/}
                        {/*            <h2 className="store-title">*/}
                        {/*                <ALink href="/vendor/single">Vendor6</ALink>*/}
                        {/*            </h2>*/}
                        {/*            <div className="ratings-container">*/}
                        {/*                <span className="ratings-full" title="Rated 4.65 out of 5">*/}
                        {/*                    <span className="ratings" style={ { width: "87%" } }>4.65</span>*/}
                        {/*                </span>*/}
                        {/*            </div>*/}
                        {/*            <p>*/}
                        {/*                <span className="state">Berlin,</span>*/}
                        {/*                <span className="Country">Germany</span>*/}
                        {/*            </p>*/}
                        {/*            <div className="store-phone">*/}
                        {/*                <i className="fa fa-phone"></i>123456789*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="store-footer">*/}
                        {/*            <figure className="seller-avatar">*/}
                        {/*                <LazyLoadImage*/}
                        {/*                    src="images/home/vendor/avatar/6.jpg"*/}
                        {/*                    alt="Vendor avatar"*/}
                        {/*                    width="64"*/}
                        {/*                    height="64"*/}
                        {/*                    effect="opacity"*/}
                        {/*                />*/}
                        {/*            </figure>*/}
                        {/*            <ALink href="/vendor/single" className="btn btn-dark btn-link btn-underline">Visit Store<i className="d-icon-arrow-right"></i></ALink>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default React.memo( VendorList );