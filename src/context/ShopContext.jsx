


import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets"; // Adjust this import if needed
import { useNavigation } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const currency = "$";
    const delivery_fee = 10;
    // const navigation = useNavigation();

    // Add to cart function, correctly updating the cart state
    const addToCart = (itemId, size) => {
        let updatedCart = { ...cartItem }; // Create a shallow clone of cartItem
        if (!updatedCart[itemId]) {
            updatedCart[itemId] = {}; // Initialize item if not already in cart
        }
        if (!updatedCart[itemId][size]) {
            updatedCart[itemId][size] = 0; // Initialize size if not present
        }
        updatedCart[itemId][size] += 1; // Increase quantity for the specific size
        setCartItem(updatedCart); // Update the cart state with the new data
    };

    // Remove from cart function
    const removeFromCart = (itemId, size) => {
        let updatedCart = { ...cartItem };
        if (updatedCart[itemId] && updatedCart[itemId][size]) {
            delete updatedCart[itemId][size];
            if (Object.keys(updatedCart[itemId]).length === 0) {
                delete updatedCart[itemId]; // Remove item entirely if all sizes are removed
            }
        }
        setCartItem(updatedCart); // Update the cart state after removal
    };

    // Calculate total cart item count
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItem) {
            for (const size in cartItem[itemId]) {
                totalCount += cartItem[itemId][size];
            }
        }
        return totalCount;
    };
    const incrementCartItem = (productId, size) => {
        setCartItem((prevCart) => ({
            ...prevCart,
            [productId]: {
                ...prevCart[productId],
                [size]: (prevCart[productId]?.[size] || 0) + 1,
            },
        }));
    };

    const decrementCartItem = (productId, size) => {
        setCartItem((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]?.[size] > 1) {
                updatedCart[productId][size] -= 1;
            } else {
                delete updatedCart[productId][size];
                if (Object.keys(updatedCart[productId]).length === 0) {
                    delete updatedCart[productId];
                }
            }
            return updatedCart;
        });
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart, // Providing removeFromCart
        getCartCount,
        incrementCartItem,
        decrementCartItem,
        getCartAmount,
        navigation,

    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
// 333333333333333333333333333333333333333333   zarl boganda kere boladi bu
// import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const [search, setSearch] = useState("");
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItem, setCartItem] = useState({});
//     const currency = "$";
//     const delivery_fee = 10;

//     const addToCart = async (itemId, size) => {
//         let updatedCart = structuredClone(cartItem); // Create a clone of cartItem
//         if (updatedCart[itemId]) {
//             if (updatedCart[itemId][size]) {
//                 updatedCart[itemId][size] += 1; // Increase quantity if size exists
//             } else {
//                 updatedCart[itemId][size] = 1; // Initialize size quantity if it doesn't exist
//             }
//         } else {
//             updatedCart[itemId] = {};
//             updatedCart[itemId][size] = 1; // Initialize item and size if item doesn't exist
//         }
//         setCartItem(updatedCart); // Update the state with the new cart
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItem) {
//             for (const item in cartItem[items]) {
//                 try {
//                     if (cartItem[items][item]) {
//                         totalCount += cartItem[items][item];
//                     }
//                 }
//                 catch (error) {
//                     console.log(error);
//                 }
//             }
//             return totalCount;
//         }
//     }

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItem, // Provide cartItem directly
//         setCartItem,
//         addToCart, // Provide addToCart function
//         getCartCount,
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;