import './checkout-table-row.styles.scss';

import QuantityIncrement from '../quantity-increment/quantity-increment.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutTableRow = ({ item, rowValue }) => {
    const { id, imageUrl, name, price } = item;
    const { removeItemFromCart } = useContext(CartContext);

    const handleRemoveItem = (item) => () => {
        removeItemFromCart(item);
    };

    return (
        <div className={`checkout-table-row row-${rowValue}`} key={id}>
            <img className='col-1' src={imageUrl} alt={`${name}`} />
            <span className='col-2'>{name}</span>
            <span className='col-3'>
                <QuantityIncrement item={item} />
            </span>
            <span className='col-4'>{price}</span>
            <span className='col-5'>
                <button className='remove-button' onClick={handleRemoveItem(item)}></button>
            </span>
        </div>
    );
};

export default CheckoutTableRow;