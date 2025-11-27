import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
  const { cart } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [address, setAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const deliveryFee = deliveryOption === "express" ? 500 : 0; // £5 = 500p
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderTotal = itemsTotal + deliveryFee;

  const handlePayment = async () => {
    setProcessing(true);

    const response = await fetch("http://localhost:5000/api/checkout/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart,
        deliveryFee,
        address
      }),
    });

    const { clientSecret } = await response.json();

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: { address: { line1: address } },
      },
    });

    if (result.error) {
      setError(result.error.message);
      setProcessing(false);
    } else {
      window.location = "/thank-you";
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Delivery Options */}
      <label className="block mb-4">
        <span className="font-semibold">Delivery Option:</span>
        <select
          className="border p-2 w-full mt-2"
          value={deliveryOption}
          onChange={(e) => setDeliveryOption(e.target.value)}
        >
          <option value="standard">Standard Delivery — FREE</option>
          <option value="express">Express Delivery — £5</option>
        </select>
      </label>

      {/* Address */}
      <label className="block mb-4">
        <span className="font-semibold">Delivery Address:</span>
        <input
          type="text"
          className="border p-2 w-full mt-2"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>

      {/* Order Summary */}
      <div className="border p-4 rounded mb-4 bg-gray-50">
        <h2 className="font-bold text-lg mb-2">Order Summary</h2>
        <p>Items Total: £{(itemsTotal / 100).toFixed(2)}</p>
        <p>Delivery Fee: £{(deliveryFee / 100).toFixed(2)}</p>
        <p className="font-bold text-xl mt-2">
          Total: £{(orderTotal / 100).toFixed(2)}
        </p>
      </div>

      {/* Card Input */}
      <div className="mb-4 p-3 border rounded">
        <CardElement />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        disabled={!stripe || processing}
        className="bg-purple-600 text-white px-4 py-2 rounded w-full"
        onClick={handlePayment}
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
