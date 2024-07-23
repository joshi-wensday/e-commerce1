import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className='main-content'>
            <div className='category-container'>
                <h2 className='category-title'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <div className='products-container'>
                    {products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;