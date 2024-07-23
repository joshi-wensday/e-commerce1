import './categories-preview.styles.scss';

import { CategoriesContext } from '../../contexts/categories.context.jsx';
import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='categories-container'>
            <div className='main-content'>
                {
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CategoriesPreview;