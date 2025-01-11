import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validatsiya
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.street ||
      !form.city ||
      !form.state ||
      !form.zipCode ||
      !form.country ||
      !form.phone
    ) {
      setError("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    setError("");
    console.log("Order ma’lumotlari:", form, "To‘lov usuli:", method);
    alert("Buyurtma muvaffaqiyatli qabul qilindi!");
  };

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-1 min-h-[80vh] border-t">
      {/* Left side: Delivery Information */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl font-bold sm:text-2xl">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            required
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            required
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          required
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            required
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            required
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            required
            type="text"
            name="zipCode"
            value={form.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            required
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <input
          required
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Right side: Payment Method & Cart Total */}
      <div className="w-full mt-14 sm:w-auto">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-start">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-2 p-2 px-3 border cursor-pointer ${method === "stripe" ? "border-green-400" : ""
                }`}
            >
              <p
                className={`rounded-full border border-gray-400 min-w-[20px] min-h-[20px] ${method === "stripe" ? "bg-green-400" : ""
                  }`}
              ></p>
              <img src={assets.stripe_logo} alt="Stripe" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-2 p-2 px-3 border cursor-pointer ${method === "razorpay" ? "border-green-400" : ""
                }`}
            >
              <p
                className={`rounded-full border border-gray-400 min-w-[20px] min-h-[20px] ${method === "razorpay" ? "bg-green-400" : ""
                  }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="Razorpay"
                className="h-5 mx-4"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-2 p-2 px-3 border cursor-pointer ${method === "cod" ? "border-green-400" : ""
                }`}
            >
              <p
                className={`rounded-full border border-gray-400 min-w-[20px] min-h-[20px] ${method === "cod" ? "bg-green-400" : ""
                  }`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                Cash On Delivery
              </p>
            </div>
          </div>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          <div className="w-full mt-8 text-end">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 text-white uppercase transition-all duration-300 ease-in-out bg-black rounded-md hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:scale-95"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
