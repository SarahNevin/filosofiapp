import { useNavigate } from "react-router-dom";

import hjemIkon from "../assets/images/hjem.svg";
import soegIkon from "../assets/images/soeg.svg";
import profilIkon from "../assets/images/profil.svg";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[91px] bg-[#151B22] flex justify-around items-center">
      <button
        onClick={() => navigate("/onboarding")}
        className="flex flex-col items-center justify-center gap-1"
      >
        <img src={hjemIkon} alt="Hjem" className="w-[25px] h-[25px]" />
        <span className="navbar-tekst">Hjem</span>
      </button>

      <button
        onClick={() => {}}
        className="flex flex-col items-center justify-center gap-1"
      >
        <img src={soegIkon} alt="Søg" className="w-[25px] h-[25px]" />
        <span className="navbar-tekst">Søg</span>
      </button>

      <button
        onClick={() => {}}
        className="flex flex-col items-center justify-center gap-1"
      >
        <img src={profilIkon} alt="Profil" className="w-[25px] h-[25px]" />
        <span className="navbar-tekst">Profil</span>
      </button>
    </nav>
  );
}
