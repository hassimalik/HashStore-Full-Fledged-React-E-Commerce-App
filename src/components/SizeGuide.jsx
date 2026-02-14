import React from "react";

const SizeGuide = () => {
  const sizes = [
    { size: "S", chest: "34-36 in", waist: "28-30 in" },
    { size: "M", chest: "38-40 in", waist: "32-34 in" },
    { size: "L", chest: "42-44 in", waist: "36-38 in" },
    { size: "XL", chest: "46-48 in", waist: "40-42 in" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Size Guide
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-500 text-white text-left text-sm sm:text-base md:text-base">
                <th className="py-3 px-4 sm:px-6">Size</th>
                <th className="py-3 px-4 sm:px-6">Chest</th>
                <th className="py-3 px-4 sm:px-6">Waist</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.size} className="border-b border-gray-200 text-sm sm:text-base md:text-base">
                  <td className="py-3 px-4 sm:px-6">{s.size}</td>
                  <td className="py-3 px-4 sm:px-6">{s.chest}</td>
                  <td className="py-3 px-4 sm:px-6">{s.waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-base">
          * Measurements are approximate and may vary slightly by product.
        </p>
      </div>
    </div>
  );
};

export default SizeGuide;
