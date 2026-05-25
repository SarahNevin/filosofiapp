import { useState } from "react";

function ScrollableSlider({ children }) {
  const [activeDot, setActiveDot] = useState(0);

  function handleScroll(event) {
    const scrollLeft = event.target.scrollLeft;

    const currentIndex = Math.round(scrollLeft / 344);

    setActiveDot(currentIndex);
  }

  return (
    <>
      {/* Slider */}
      <div
        onScroll={handleScroll}
        className="w-full overflow-x-auto hide-scrollbar"
      >
        <div className="flex gap-3 pl-4 py-2">{children}</div>
      </div>

      {/* Prikker */}
      <div className="flex justify-center gap-3 mt-4 mb-10">
        {children.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeDot === index ? "opacity-100" : "opacity-30"
            }`}
            style={{ backgroundColor: "#F3E9DC" }}
          />
        ))}
      </div>
    </>
  );
}

export default ScrollableSlider;
