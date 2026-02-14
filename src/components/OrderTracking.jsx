import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Tracking info for Order ID: ${orderId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 md:px-20 lg:px-32">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Order Tracking
        </h1>

        {/* Form */}
        <form
          onSubmit={handleTrack}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
        >
          <label
            className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
            htmlFor="orderId"
          >
            Enter Your Order ID:
          </label>
          <input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g., 12345"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-300 text-sm sm:text-base"
          >
            Track Order
          </button>
        </form>

        {/* Dummy Tracking Info */}
        {orderId && (
          <div className="mt-6 p-4 sm:p-6 bg-gray-100 rounded-md text-gray-700 text-sm sm:text-base space-y-1">
            <p><span className="font-semibold">Order ID:</span> {orderId}</p>
            <p><span className="font-semibold">Status:</span> In Transit</p>
            <p><span className="font-semibold">Estimated Delivery:</span> 3-5 business days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
