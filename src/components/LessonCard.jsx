function LessonCard({ title, image }) {
  return (
    <div className="w-full h-full overflow-hidden relative rounded-b-[12px]">
      <img src={image} alt={title} className="w-full h-[225px] object-cover" />

      <div
        className="absolute bottom-0 left-0 right-0 h-[75px] flex items-center justify-center rounded-b-[12px]"
        style={{ backgroundColor: "#F3E9DC" }}
      >
        <p className="emne-tekst">{title}</p>
      </div>
    </div>
  );
}

export default LessonCard;
