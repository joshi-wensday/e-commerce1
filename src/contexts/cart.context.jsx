import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => null,
    cartOpen: false,
    setCartOpen: () => null,
    cartCount: 0,
    setCartCount: () => null,
    addItemToCart: () => null,
    modifyCartItemQuantity: () => null,
});



export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const toggleCartOpen = () => setCartOpen(!cartOpen);
    const cartCountUpdate = () => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

    const existingCartItem = (itemToAdd) => {
        return cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
    };

    const modifyCartItemQuantity = (itemToAdd, quantityChange) => {
        setCartItems(cartItems.map((cartItem) => 
            cartItem.id === itemToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + quantityChange} 
                : cartItem
        ));
    };

    const addItemToCart = (item) => {
        // if item in cartItems, increment quantity
        // else add item to cartItems
        const isExistingCartItem = existingCartItem(item);
        if (isExistingCartItem) {
            setCartItems(modifyCartItemQuantity( item, 1));
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    };

    useEffect(() => {
        setCartCount(cartCountUpdate);
    }, [cartItems]);

    const value = {
        cartItems,
        addItemToCart,
        cartOpen,
        setCartOpen: toggleCartOpen,
        cartCount,
        setCartCount,
        modifyCartItemQuantity,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// architecture plan:
// stream 1. for clicks on cart-icon-container
// will need to add an onMouseDown change handler to cart-icon.component.jsx
// Create a listener for this stream 1. When click is observed run CB function to change cartOpen state (true becomes false, and false becomes true)
// stream 2. for items being added to the cart. "<Button buttonType='inverted' className='add-to-cart-button'>Add to cart</Button>" -> when this button is clicked.
// add onClick handler -> create a listener for stream 2. When button clicked, add/append item that button corresponds too, to cartItems list.

// This is my architecture plan. This might not be done in the best way, so before we start to build this out, please critique my implementation