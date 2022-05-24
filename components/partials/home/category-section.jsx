import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

function CategorySection () {
    return (
        <section className="grey-section pt-8 pb-4">
            <div className="container">
                <div className="row cols-xl-5 cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                    <div className="category category-ellipse mb-4">
                        <figure className="category-media mr-2">
                            <ALink href={ { pathname: "/shop", query: { category: "hand-bag-and-backpacks" } } }>
                                <LazyLoadImage
                                    src="images/home/category/31.jpg"
                                    alt="Category"
                                    width="100"
                                    height="100"
                                />
                            </ALink>
                        </figure>
                        <div className="category-content pt-0 text-left">
                            <h4 className="category-name font-weight-normal ls-s">
                                <ALink href={ { pathname: "/shop", query: { category: "hand-bag-and-backpacks" } } }>Estuches</ALink>
                            </h4>
                        </div>
                    </div>
                    <div className="category category-ellipse mb-4">
                        <figure className="category-media mr-2">
                            <ALink href={ { pathname: "/shop", query: { category: "computer-hardware-and-software" } } }>
                                <LazyLoadImage
                                    src="images/home/category/32.jpg"
                                    alt="Category"
                                    width="100"
                                    height="100"
                                />
                            </ALink>
                        </figure>
                        <div className="category-content pt-0 text-left">
                            <h4 className="category-name font-weight-normal ls-s">
                                <ALink href={ { pathname: "/shop", query: { category: "computer-hardware-and-software" } } }>Cargadores</ALink>
                            </h4>
                        </div>
                    </div>
                    <div className="category category-ellipse mb-4">
                        <figure className="category-media mr-2">
                            <ALink href={ { pathname: "/shop", query: { category: "home-audio-and-accessories" } } }>
                                <LazyLoadImage
                                    src="images/home/category/33.jpg"
                                    alt="Category"
                                    width="100"
                                    height="100"
                                />
                            </ALink>
                        </figure>
                        <div className="category-content pt-0 text-left">
                            <h4 className="category-name font-weight-normal ls-s">
                                <ALink href={ { pathname: "/shop", query: { category: "home-audio-and-accessories" } } }>Audífonos</ALink>
                            </h4>
                        </div>
                    </div>
                    <div className="category category-ellipse mb-4">
                        <figure className="category-media mr-2">
                            <ALink href={ { pathname: "/shop", query: { category: "watches-and-accessories" } } }>
                                <LazyLoadImage
                                    src="images/home/category/34.jpg"
                                    alt="Category"
                                    width="100"
                                    height="100"
                                />
                            </ALink>
                        </figure>
                        <div className="category-content pt-0 text-left">
                            <h4 className="category-name font-weight-normal ls-s">
                                <ALink href={ { pathname: "/shop", query: { category: "watches-and-accessories" } } }>SmartWatch</ALink>
                            </h4>
                        </div>
                    </div>
                    <div className="category category-ellipse mb-4">
                        <figure className="category-media mr-2">
                            <ALink href={ { pathname: "/shop", query: { category: "watches-and-accessories" } } }>
                                <LazyLoadImage
                                    src="images/home/category/35.jpg"
                                    alt="Category"
                                    width="100"
                                    height="100"
                                />
                            </ALink>
                        </figure>
                        <div className="category-content pt-0 text-left">
                            <h4 className="category-name font-weight-normal ls-s">
                                <ALink href={ { pathname: "/shop", query: { category: "watches-and-accessories" } } }>Micas</ALink>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CategorySection );