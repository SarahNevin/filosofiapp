import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trane from "../assets/images/trane.svg";
import sofiesVerden from "../assets/images/sofies-verden-logo-hvid.svg";
import GyldendalLogo from "../assets/images/gyldendal-logo.svg";

export default function SplashView() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
        {/* Sofies Verden Logo */}
        <img src={sofiesVerden} alt="Sofies Verden logo" className="absolute top-20 left-1/2 -translate-x-1/2 w-[360px]" />


      {/* Trane */}
      <img src={trane} alt="Trane" className="trane z-10" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
        <img src={GyldendalLogo} alt="Gyldendal logo" className="w-30" />
      </div>
    </div>
  );
}
