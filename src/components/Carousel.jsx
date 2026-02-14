import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./carousal.css";

function Carousel() {
  const { data, loading } = useContext(DataContext);
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const btnRefs = useRef([]);
  const sliderRef = useRef(null);

  const keepRef = (arr, el, i) => {
    if (el) arr.current[i] = el;
  };

  const animateSlide = (i) => {
    const items = [
      titleRefs.current[i],
      descRefs.current[i],
      btnRefs.current[i],
    ].filter(Boolean);

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        overwrite: true,
      }
    );
  };

  useEffect(() => {
    if (data?.length > 0) {
      const img = new Image();
      img.src = data[0].thumbnail;
      animateSlide(0);
    }
  }, [data]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    lazyLoad: "ondemand",
    beforeChange: (_, next) => setActiveIndex(next),
    afterChange: (i) => animateSlide(i),
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {data.slice(0, 6).map((item, index) => (
          <div key={item.id}>
            <div
              className={`min-h-[92vh] flex items-center ${
                theme === "dark"
                  ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
                  : "bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-100"
              }`}
            >
              <div className="max-w-6xl mx-auto 
                              px-6 py-14 
                              flex flex-col 
                              md:flex-row 
                              items-center 
                              justify-between 
                              gap-16 
                              md:gap-14 
                              lg:gap-100">

                {/* TEXT */}
                <div className="w-full md:w-1/2 lg:max-w-xl 
                                space-y-6 
                                text-center md:text-left 
                                order-2 md:order-1">

                  <h3
                    ref={(el) => keepRef(titleRefs, el, index)}
                    className="text-xl md:text-2xl font-semibold text-red-500"
                  >
                    Premium Electronics Collection
                  </h3>

                  <h1
                    className={`text-3xl md:text-4xl lg:text-6xl tracking-tight ${
                      theme === "dark" ? "text-white" : "text-[#2e213c]"
                    }`}
                  >
                    {item.title}
                  </h1>

                  <p
                    ref={(el) => keepRef(descRefs, el, index)}
                    className={`text-sm md:text-base leading-relaxed ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {item.description}
                  </p>

                  <button
                    ref={(el) => keepRef(btnRefs, el, index)}
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    View Product
                  </button>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-60 md:w-72 lg:w-80 aspect-square rounded-full shadow-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* ARROWS */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 z-20"
      >
        <FiChevronLeft className="w-10 h-10 text-red-500" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 z-20"
      >
        <FiChevronRight className="w-10 h-10 text-red-500" />
      </button>
      
    </div>
  );
}

export default Carousel;
