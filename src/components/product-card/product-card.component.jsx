import './product-card.styles.scss';

import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {id, name, imageUrl, price} = product;
    const { cartItems, setCartItems } = useContext(CartContext);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item])
    };

    return (
        <div className="product-card-container" key={id}>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' className='add-to-cart-button' onClick={() => addItemToCart({id})}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;