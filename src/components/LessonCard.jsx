import { Link } from "react-router-dom";

function LessonCard({ title, image, link }) {
  return (
    <Link to={link} className="block w-[332px] h-[300px]">
    <div className="w-full h-full overflow-hidden relative rounded-b-[12px]">
      <img src={image} alt={title} className="w-full h-[225px] object-cover" />

      <div
        className="absolute bottom-0 left-0 right-0 h-[75px] flex items-center justify-center"
        style={{ backgroundColor: "#F3E9DC" }}
      >
        <p className="emne-tekst">{title}</p>
      </div>
    </div>
  </Link>
  );
}

export default LessonCard;
