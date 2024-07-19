import './checkout.styles.scss';

import CheckoutTable from '../../components/checkout-table/checkout-table.component.jsx';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartPriceTotal } = useContext(CartContext);
    return (
        <div className='checkout-container main-content'>
            <h2>Checkout</h2>
            <CheckoutTable />
            <div className='checkout-total'>
                <span>Total: £{cartPriceTotal}</span>
            </div>
        </div>
    );
};

export default Checkout;