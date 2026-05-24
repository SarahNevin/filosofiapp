import { useNavigate } from "react-router-dom";
import Tilbageknap from "../assets/images/tilbagepil.svg";

export default function TilbageKnap() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-1/2 left-0 -translate-y-1/2 w-11 h-11 items-center justify-center"
    >
      <img src={Tilbageknap} alt="Tilbage" className="w-[14px] h-[25px]" />
    </button>
  );
}
