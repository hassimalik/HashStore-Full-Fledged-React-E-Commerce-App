import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { gsap } from "gsap";

function ProductCard({ product, index }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const cardRef = useRef(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl flex flex-col items-center cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-xl border w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[19%]`}
    >
      {/* Card Background */}
      <div className={`w-full rounded-2xl overflow-hidden border ${
        theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}>
        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-t-2xl cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Title */}
        <h1
          className={`line-clamp-2 font-semibold p-2 text-center ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {product.title}
        </h1>

        {/* Price */}
        <p className={`mb-3 text-lg font-bold text-center ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          ${product.price}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => handleAddToCart(product)}
          className="mb-4 flex justify-center items-center gap-2 w-10/12 mx-auto px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 active:scale-95 transition-all duration-300"
        >
          <IoCartOutline className="w-5 h-5" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
