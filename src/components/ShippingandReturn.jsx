import React from "react";

const ShippingAndReturns = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Shipping & Returns
        </h1>

        {/* Shipping Info */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-4">
            Shipping
          </h2>
          <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-base">
            We offer worldwide shipping on all orders. Orders are processed
            within 1-2 business days.
          </p>
          <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-base">
            Standard shipping typically takes 5-7 business days, while expedited
            options are available at checkout.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-base">
            You will receive a tracking number via email once your order has
            shipped.
          </p>
        </section>

        {/* Returns Info */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-4">
            Returns
          </h2>
          <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-base">
            Returns are accepted within 30 days of delivery. Products must be
            unused and in their original packaging.
          </p>
          <p className="text-gray-600 mb-2 text-sm sm:text-base md:text-base">
            To start a return, contact our support team with your order number
            and reason for return.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-base">
            Refunds will be processed within 5-7 business days after receiving
            the returned item.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingAndReturns;
