import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function MainMenu() {
    const router = useRouter();
    const pathname = router.pathname;
    const query = router.query;

    return (
        <div className="row align-items-center gutter-no scrollable">
            <ALink href={{ pathname: "/shop", query: { category: "celulares" } }} className={`${query.category === 'celulares' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media" style={{ fontSize: '3.8rem' }}>
                    <i className="d-icon-mobile"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Celulares<br />&amp; Tablets</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "tv" } }} className={`${query.category === 'tv' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-table-tv"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Televisores</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "watchs" } }} className={`${query.category === 'watchs' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-watch"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Watch</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "buds" } }} className={`${query.category === 'buds' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-headphone"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Buds</h4>
                </div>
            </ALink>
            <ALink href={{ pathname: "/shop", query: { category: "accesorios" } }} className={`${query.category === 'accesorios' ? 'active' : ''} category category-icon-inline`} scroll={false}>
                <div className="category-media">
                    <i className="d-icon-battery"></i>
                </div>
                <div className="category-content">
                    <h4 className="category-name">Accesorios</h4>
                </div>
            </ALink>
            {/*<ALink href={{ pathname: "/shop", query: { category: "kitchen" } }} className={`${query.category === 'kitchen' ? 'active' : ''} category category-icon-inline`} scroll={false}>*/}
            {/*    <div className="category-media">*/}
            {/*        <i className="d-icon-cook"></i>*/}
            {/*    </div>*/}
            {/*    <div className="category-content">*/}
            {/*        <h4 className="category-name">Home, Kitchen <br />Electronics</h4>*/}
            {/*    </div>*/}
            {/*</ALink>*/}
            {/*<ALink href={{ pathname: "/shop", query: { category: "gaming" } }} className={`${query.category === 'gaming' ? 'active' : ''} category category-icon-inline`} scroll={false}>*/}
            {/*    <div className="category-media">*/}
            {/*        <i className="d-icon-table-tv"></i>*/}
            {/*    </div>*/}
            {/*    <div className="category-content">*/}
            {/*        <h4 className="category-name">Home Video <br />&amp; Theater</h4>*/}
            {/*    </div>*/}
            {/*</ALink>*/}
            {/*<ALink href={{ pathname: "/shop", query: { category: "accessories" } }} className={`${query.category === 'accessories' ? 'active' : ''} category category-icon-inline`} scroll={false}>*/}
            {/*    <div className="category-media" style={{ fontSize: '3.3rem' }}>*/}
            {/*        <i className="d-icon-gamepad2"></i>*/}
            {/*    </div>*/}
            {/*    <div className="category-content">*/}
            {/*        <h4 className="category-name">Gaming &amp; <br />Accessories</h4>*/}
            {/*    </div>*/}
            {/*</ALink>*/}
            {/*<ALink href={{ pathname: "/shop", query: { category: "mobile" } }} className={`${query.category === 'mobile' ? 'active' : ''} category category-icon-inline`} scroll={false}>*/}
            {/*    <div className="category-media">*/}
            {/*        <i className="d-icon-category"></i>*/}
            {/*    </div>*/}
            {/*    <div className="category-content">*/}
            {/*        <h4 className="category-name">Browse <br />More</h4>*/}
            {/*    </div>*/}
            {/*</ALink>*/}
        </div>
    )
}

export default MainMenu;