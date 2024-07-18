import './checkout-table.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import QuantityIncrement from '../quantity-increment/quantity-increment.component';

const CheckoutTable = () => {
    const { cartItems, removeItemFromCart } = useContext(CartContext);

    const handleRemoveItem = (item) => () => {
        removeItemFromCart(item);
    };

    return (
        <div className='checkout-table-container'>
            <div className='checkout-table-header'>
                <span className='col-1'>Product</span>
                <span className='col-2'>Description</span>
                <span className='col-3'>Quantity</span>
                <span className='col-4'>Price</span>
                <span className='col-5'>Remove</span>
            </div>
            <div className='checkout-table-body'>
                <div className='cart-items'>
                    {cartItems.map((item) => {
                        return (
                            <div className={`checkout-table-row row-${cartItems.indexOf(item)}`} key={cartItems.indexOf(item)}>
                                <img className='col-1' src={item.imageUrl} alt={`${item.name}`} />
                                <span className='col-2'>{item.name}</span>
                                <span className='col-3'>{item.quantity}</span>
                                <span className='col-3'>
                                    <QuantityIncrement item={item} />
                                </span>
                                <span className='col-4'>{item.price}</span>
                                <span className='col-5'>
                                    <button className='remove-button' onClick={handleRemoveItem(item)}>Remove</button>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CheckoutTable;