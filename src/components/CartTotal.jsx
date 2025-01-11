import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-end">
      <div className="p-6 w-full max-w-[800px] border border-gray-300 rounded-md">
        <div className="mb-6">
          <p className="text-2xl">
            <Title text1="CART" text2="TOTALS" />
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-lg font-medium">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmount()}.00
            </p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-lg font-medium">
            <p>Shipping</p>
            <p>
              {currency}
              {delivery_fee}.00
            </p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-lg font-semibold">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
