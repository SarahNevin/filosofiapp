import { useState } from "react";

function PageSlider({ children, onIndexChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll(e) {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / width);

    if (index !== activeIndex) {
      setActiveIndex(index);
      onIndexChange?.(index);
    }
  }

  return (
    <div
      onScroll={handleScroll}
      className="relative w-full h-full overflow-x-auto flex snap-x snap-mandatory hide-scrollbar scroll-smooth"
    >
      {children.map((child, index) => (
        <div key={index} className="w-full h-full flex-shrink-0 snap-start">
          {child}
        </div>
      ))}
    </div>
  );
}

export default PageSlider;