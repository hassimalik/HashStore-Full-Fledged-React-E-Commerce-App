import React from "react";

const ShippingAndReturns = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Shipping & Returns
        </h1>

        {/* Shipping Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Shipping
          </h2>
          <p className="text-gray-600 mb-2">
            We offer worldwide shipping on all orders. Orders are processed
            within 1-2 business days.
          </p>
          <p className="text-gray-600 mb-2">
            Standard shipping typically takes 5-7 business days, while expedited
            options are available at checkout.
          </p>
          <p className="text-gray-600">
            You will receive a tracking number via email once your order has
            shipped.
          </p>
        </section>

        {/* Returns Info */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Returns</h2>
          <p className="text-gray-600 mb-2">
            Returns are accepted within 30 days of delivery. Products must be
            unused and in their original packaging.
          </p>
          <p className="text-gray-600 mb-2">
            To start a return, contact our support team with your order number
            and reason for return.
          </p>
          <p className="text-gray-600">
            Refunds will be processed within 5-7 business days after receiving
            the returned item.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingAndReturns;
