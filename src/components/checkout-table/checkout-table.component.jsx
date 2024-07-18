import './checkout-table.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutTableRow from '../checkout-table-row/checkout-table-row.component';

const CheckoutTable = () => {
    const { cartItems } = useContext(CartContext);

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
                    {cartItems.map((item) => (
                        <CheckoutTableRow
                            key={cartItems.indexOf(item)}
                            item={item}
                            rowValue={cartItems.indexOf(item)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckoutTable;