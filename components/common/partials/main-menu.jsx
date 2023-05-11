import React from "react";
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';
import {LazyLoadImage} from "react-lazy-load-image-component";

function MainMenu () {
    const pathname = useRouter().pathname;

    return (
        <nav className="menu category-menu">
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { brands: "samsung" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/1.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                </ALink>
                    <div className="category-content">

                        <ALink href={ { pathname: "/shop", query: { tag: "celulares-samsung" } } } >
                        <h4 className="category-name">Celulares</h4>
                        </ALink>
                        <ALink href={ { pathname: "/shop", query: { tag: "accesorios-samsung" } } } >
                        <h4 className="category-name">Accesorios</h4>
                        </ALink>
                        <ALink href={ { pathname: "/shop", query: { tag: "tvs-samsung" } } } >
                        <h4 className="category-name">TVs</h4>
                        </ALink>
                    </div>

            </div>
            {/*<div className="category category-icon">*/}
            {/*    <ALink href={ { pathname: "/shop", query: { brands: "blu" } } }>*/}
            {/*        <figure className="categroy-media">*/}
            {/*            <LazyLoadImage*/}
            {/*                src="images/home/category/2.png"*/}
            {/*                alt="Category"*/}
            {/*                width="100"*/}
            {/*                height="100"*/}
            {/*            />*/}
            {/*        </figure>*/}
            {/*        <div className="category-content">*/}
            {/*            <ALink href={ { pathname: "/shop", query: { tag: "celulares-blu" } } } >*/}
            {/*            <h4 className="category-name">Celulares</h4>*/}
            {/*            </ALink>*/}
            {/*                <ALink href={ { pathname: "/shop", query: { tag: "accesorios-blu" } } } >*/}
            {/*            <h4 className="category-name">Accesorios</h4>*/}
            {/*                </ALink>*/}
            {/*        </div>*/}
            {/*    </ALink>*/}
            {/*</div>*/}
            {/*<div className="category category-icon">*/}
            {/*    <ALink href={ { pathname: "/shop", query: { brands: "doogee" } } }>*/}
            {/*        <figure className="categroy-media">*/}
            {/*            <LazyLoadImage*/}
            {/*                src="images/home/category/6.png"*/}
            {/*                alt="Category"*/}
            {/*                width="100"*/}
            {/*                height="100"*/}
            {/*            />*/}
            {/*        </figure>*/}
            {/*        <div className="category-content">*/}
            {/*            <ALink href={ { pathname: "/shop", query: { tag: "celulares-doogee" } } } >*/}
            {/*            <h4 className="category-name">Celulares</h4>*/}
            {/*        </ALink>*/}
            {/*        </div>*/}
            {/*    </ALink>*/}
            {/*</div>*/}
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { brands: "xiaomi" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/3.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <ALink href={ { pathname: "/shop", query: { tag: "celulares-xiaomi" } } } >
                        <h4 className="category-name">Celulares</h4>
                        </ALink>
                            <ALink href={ { pathname: "/shop", query: { tag: "accesorios-xiaomi" } } } >
                        <h4 className="category-name">Accesorios</h4>
                            </ALink>
                    </div>
                </ALink>
            </div>
            {/*<div className="category category-icon">*/}
            {/*    <ALink href={ { pathname: "/shop", query: { brands: "tecno" } } }>*/}
            {/*        <figure className="categroy-media">*/}
            {/*            <LazyLoadImage*/}
            {/*                src="images/home/category/4.png"*/}
            {/*                alt="Category"*/}
            {/*                width="100"*/}
            {/*                height="100"*/}
            {/*            />*/}
            {/*        </figure>*/}
            {/*        <div className="category-content">*/}
            {/*            <ALink href={ { pathname: "/shop", query: { tag: "celulares-tecno" } } } >*/}
            {/*            <h4 className="category-name">Celulares</h4>*/}
            {/*    </ALink>*/}
            {/*        </div>*/}
            {/*    </ALink>*/}
            {/*</div>*/}
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { brands: "infinix" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/5.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <ALink href={ { pathname: "/shop", query: { tag: "celulares-infinix" } } } >
                        <h4 className="category-name">Celulares</h4>
                        </ALink>
                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href="/shop">
                    <figure className="categroy-media">
                        <i className="d-icon-category"></i>
                    </figure>
                    <div className="category-content">
                        <ALink href={ { pathname: "/shop"}} >
                        <h4 className="category-name">Categorias</h4>
                        </ALink>
                    </div>
                </ALink>
            </div>
        </nav>
    )
}

export default MainMenu;