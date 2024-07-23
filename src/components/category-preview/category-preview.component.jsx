import './category-preview.styles.scss';

import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 5)
                        .map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                }
            </div>
        </div>
    );
}

export default CategoryPreview;