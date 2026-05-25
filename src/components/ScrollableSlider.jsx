function ScrollableSlider({ children }) {
  return (
    <>
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 pl-4 py-2 mb-10">{children}</div>
      </div>
    </>
  );
}

export default ScrollableSlider;
