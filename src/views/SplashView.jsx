import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="flex items-center justify-center min-h-screen">
        <h1>Sofies Verden</h1>
        <img
            src={GyldendalLogo}
            alt="Gyldendal logo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-30"
        />
    </div>
  );
}