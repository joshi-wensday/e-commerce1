import './shop.styles.scss';

import { ProductsContext } from '../../contexts/products.context.jsx';
import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component.jsx';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container main-content'>
            {products.map((product)=> {
                return <ProductCard key={product.id} product={product} />
            })};
        </div>
    )
}

export default Shop;