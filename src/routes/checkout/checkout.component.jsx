import './checkout.styles.scss';

import CheckoutTable from '../../components/checkout-table/checkout-table.component.jsx';

const Checkout = () => {
    return (
        <div className='checkout-container main-content'>
            <h2>Checkout</h2>
            <CheckoutTable />
        </div>
    );
};

export default Checkout;