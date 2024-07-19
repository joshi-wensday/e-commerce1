import './shop.styles.scss';

import { CategoriesContext } from '../../contexts/categories.context.jsx';
import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component.jsx';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            <div className='main-content'>
                {
                    Object.keys(categoriesMap).map((title) => {
                        return (
                        <div key={title} className='category-title-products-container'>
                            <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                            <div className='products-container'>
                                {categoriesMap[title].map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                        );
                    })
                }
            </div>
            <div className='products-container main-content'>
                {/* This is not valid as no longer products and categoriesMap isn't an array (cant .map)
                    {categoriesMap.map((category)=> {
                    return <ProductCard key={category.items.id} product={category.items} />
                })}; */}
            </div>
        </div>
    )
}

export default Shop;