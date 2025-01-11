import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItem,
    removeFromCart,
    clearCart,
    incrementCartItem,
    decrementCartItem,
    navigation,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 10;

  useEffect(() => {
    const tempData = [];
    let tempSubtotal = 0;

    Object.entries(cartItem).forEach(([productId, sizes]) => {
      Object.entries(sizes).forEach(([size, quantity]) => {
        if (quantity > 0) {
          const product = products.find((p) => p._id === productId);
          if (product) {
            const totalPrice = product.price * quantity;

            tempData.push({
              _id: productId,
              size,
              quantity,
              totalPrice,
            });

            tempSubtotal += totalPrice;
          }
        }
      });
    });

    setCartData(tempData);
    setSubtotal(tempSubtotal);
  }, [cartItem, products]);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      <div className="space-y-4">
        {cartData.map((item, index) => {
          const product = products.find((p) => p._id === item._id);
          return (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-16 h-16 rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => decrementCartItem(item._id, item.size)}
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                      onClick={() => incrementCartItem(item._id, item.size)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">
                  {currency}
                  {item.totalPrice.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item._id, item.size)}
                  className="p-2 text-red-600 bg-red-100 rounded-full hover:bg-red-200"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 mt-6 rounded-lg">
        <CartTotal />
        <Link to="/place-order" className="flex justify-end">
  <button
    disabled={cartData.length === 0}
    className={`px-4 py-3 mt-6 font-bold text-white rounded-lg w-[420px] transition-all ${
      cartData.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-black"
    }`}
  >
    Proceed to checkout
  </button>
</Link>

      </div>
    </div>
  );
};

export default Cart;
