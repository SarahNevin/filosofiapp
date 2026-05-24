import { useNavigate } from "react-router-dom";
import Tilbagepil from "../assets/images/tilbagepil.svg";

export default function Tilbageknap() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-1/2 left-6 -translate-y-1/2 w-11 h-11 items-center justify-center"
    >
      <img src={Tilbagepil} alt="Tilbage" className="w-[14px] h-[25px]" />
    </button>
  );
}
