import React from "react";
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';
import {LazyLoadImage} from "react-lazy-load-image-component";

function MainMenu () {
    const pathname = useRouter().pathname;

    return (
        <nav className="menu category-menu">
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "office-computers" } } }>
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

                        <ALink href="#" >
                        <h4 className="category-name">Celulares</h4>
                        </ALink>
                        <h4 className="category-name">Accesorios</h4>
                        <h4 className="category-name">TVs</h4>
                    </div>

            </div>
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "women-s-bag" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/2.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Celulares</h4>
                        <h4 className="category-name">Accesorios</h4>
                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "office-solution" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/6.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Celulares</h4>
                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "men-s-clothings" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/3.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Celulares</h4>
                        <h4 className="category-name">Accesorios</h4>
                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "electronics" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/4.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Celulares</h4>
                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href={ { pathname: "/shop", query: { category: "game-consoles" } } }>
                    <figure className="categroy-media">
                        <LazyLoadImage
                            src="images/home/category/5.png"
                            alt="Category"
                            width="100"
                            height="100"
                        />
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Celulares</h4>

                    </div>
                </ALink>
            </div>
            <div className="category category-icon">
                <ALink href="/shop">
                    <figure className="categroy-media">
                        <i className="d-icon-category"></i>
                    </figure>
                    <div className="category-content">
                        <h4 className="category-name">Categorias</h4>
                    </div>
                </ALink>
            </div>
        </nav>
    )
}

export default MainMenu;