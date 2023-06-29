import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useLazyQuery} from '@apollo/react-hooks';

import ToolBox from '~/components/partials/shop/toolbox';
import ProductTwo from '~/components/features/product/product-two';
import ProductEight from '~/components/features/product/product-eight';
import Pagination from '~/components/features/pagination';


import jsonData from '../../../../pages/api/productos.json';


function ProductListOne(props) {
    const {itemsPerRow = 3, type = "left", isToolbox = true} = props;
    const router = useRouter();
    const query = router.query;


    const celularesBestSelling = jsonData.bestSelling.filter(item =>
        item.categories.some(category => category.slug === query.category)
    );

    const celularesFeatured = jsonData.featured.filter(item =>
        item.categories.some(category => category.slug === query.category)
    );

    const celularesCollection = jsonData.productCollection.filter(item =>
        item.categories.some(category => category.slug === query.category)
    );

    const celularesLatest = jsonData.latest.filter(item =>
        item.categories.some(category => category.slug === query.category)
    );

    // Unir las secciones en una sola lista
    const celularesList = celularesFeatured.concat(celularesBestSelling, celularesLatest, celularesCollection);


    const products = celularesList;
    const gridClasses = {
        3: "cols-2 cols-sm-3",
        4: "cols-2 cols-sm-3 cols-md-4",
        5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
        6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
        7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
        8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
    }
    const perPage = query.per_page ? parseInt(query.per_page) : 12;
    //const totalPage = data ? parseInt(data.products.total / perPage) + (data.products.total % perPage ? 1 : 0) : 1;
    const page = query.page ? query.page : 1;
    const gridType = query.type ? query.type : 'grid';


    return (
        <>
            {
                isToolbox ? <ToolBox type={type}/> : ''
            }

            {
                gridType === 'grid' ?
                    <div className={`row product-wrapper gutter-no split-line ${gridClasses[itemsPerRow]}`}>
                        {products && products.map(item =>
                            <div className="product-wrap" key={'shop-' + item.slug}>
                                <ProductTwo product={item} adClass="text-center"/>
                            </div>
                        )}
                    </div>
                    :
                    <div className="product-lists product-wrapper">
                        {products && products.map(item =>
                            <ProductEight product={item} key={'shop-list-' + item.slug}/>
                        )}
                    </div>
            }

            {/*{*/}
            {/*    products && products.length === 0 ?*/}
            {/*        <p className="ml-1">No products were found matching your selection.</p> : ''*/}
            {/*}*/}

            {/*{*/}
            {/*    data && data.products.total > 0 ?*/}
            {/*        <div className="toolbox toolbox-pagination">*/}
            {/*            {*/}
            {/*                data && <p className="show-info">Showing <span>{perPage * (page - 1) + 1} - {Math.min(perPage * page, data.products.total)} of {data.products.total}</span>Products</p>*/}
            {/*            }*/}

            {/*            /!*<Pagination totalPage={totalPage} />*!/*/}
            {/*        </div> : ''*/}
            {/*}*/}
        </>
    )
}

export default (ProductListOne);