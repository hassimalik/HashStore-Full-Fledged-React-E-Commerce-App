import { useContext, useMemo, useRef, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import gsap from "gsap";

function Category() {
  const { data } = useContext(DataContext);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const categoryRef = useRef([]);

  const categoryOnlyData = useMemo(() => {
    if (!data?.length) return [];
    return [...new Set(data.map((item) => item.category))];
  }, [data]);

  useEffect(() => {
    if (!categoryOnlyData.length) return;

    // GSAP timeline for smooth stagger
    const tl = gsap.timeline();
    tl.fromTo(
      categoryRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, [categoryOnlyData]);

  return (
    <div
      className={`transition-colors duration-500  ${
                theme === "dark"
                  ? "bg-[#0c3b3b]"
                  : "bg-red-400"
              } py-4 px-2`}
      style={{ height: "auto" }}
    >
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {categoryOnlyData.map((cat, i) => (
          <button
            key={cat}
            ref={(el) => (categoryRef.current[i] = el)}
            onClick={() => navigate(`/category/${encodeURIComponent(cat)}`)}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap
              ${
                theme === "dark"
                  ? "bg-[#5f0808] text-white hover:bg-blue-500"
                  : "bg-red-400 text-white hover:bg-red-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
