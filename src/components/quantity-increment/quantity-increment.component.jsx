import './quantity-increment.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const QuantityIncrement = ({ item }) => {
    const { quantity } = item;
    const { modifyCartItemQuantity } = useContext(CartContext);

    const CartIncrement = () => {
        modifyCartItemQuantity( item, 1);
    };

    const CartDecrement = () => {
        modifyCartItemQuantity( item, -1);
    };

    return (
        <div className='quantity-increment'>
            <button className='decrement' onClick={CartDecrement}></button>
            <span className='quantity'>{quantity}</span>
            <button className='increment' onClick={CartIncrement}></button>
        </div>
    );
};

export default QuantityIncrement;