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
    removeItemFromCart: () => null,
    cartPriceTotal: 0,
    setCartPriceTotal: () => null,
});



export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartPriceTotal, setCartPriceTotal] = useState(0);

    const toggleCartOpen = () => setCartOpen(!cartOpen);

    const existingCartItem = (itemToAdd) => {
        return cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems((prevCartItems) => 
            prevCartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
        );
    };

    const modifyCartItemQuantity = (itemToModify, quantityChange) => {
        setCartItems((prevCartItems) => 
            prevCartItems.map((cartItem) => {
                if (cartItem.id === itemToModify.id) {
                    const newQuantity = cartItem.quantity + quantityChange;
                    if (newQuantity <= 0) {
                        removeItemFromCart(itemToModify);
                        return null; // This will be filtered out
                    }
                    return {...cartItem, quantity: newQuantity};
                }
                return cartItem;
            }).filter(Boolean) // Remove null values
        );
    };

    const addItemToCart = (item) => {
        const isExistingCartItem = existingCartItem(item);
        if (isExistingCartItem) {
            modifyCartItemQuantity(item, 1);
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, {...item, quantity: 1}]);
        }
    };

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        setCartPriceTotal(newCartCount);
    }, [cartItems]);    

    const value = {
        cartItems,
        addItemToCart,
        cartOpen,
        setCartOpen: toggleCartOpen,
        cartCount,
        setCartCount,
        modifyCartItemQuantity,
        removeItemFromCart,
        cartPriceTotal
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