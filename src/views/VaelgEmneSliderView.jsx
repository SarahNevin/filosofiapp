import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageSlider from "../components/PageSlider";
import ScreenHeader from "../components/ScreenHeader";
import Navigation from "../components/Navigation";
import ideernesVerden from "../assets/images/ideernes-verden.png";
import hulelignelsen from "../assets/images/hulelignelsen.png";
import filosofistaten from "../assets/images/filosofistaten.png";

export default function VaelgEmneView() {
  const screens = [
    { title: "Idéernes verden", image: ideernesVerden },
    { title: "Ud af hulen", image: hulelignelsen },
    { title: "Filosofistaten", image: filosofistaten },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="h-dvh flex flex-col overflow-hidden bg-black">
      <ScreenHeader
        tagline="Platon"
        title={screens[activeIndex].title}
        level="h1"
        visTilbageknap={false}
      />

      <main className="flex-1 min-h-0 overflow-hidden">
        <PageSlider onIndexChange={setActiveIndex}>
          {screens.map((screen, index) => (
            <div
              key={index}
              className="relative w-full h-full"
              onClick={() => {
                if (index === 1) {
                  navigate("/emne");
                }
              }}
            >
              <img
                src={screen.image}
                alt={screen.title}
                className="absolute inset-0 w-full h-full object-cover md:object-contain"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </PageSlider>
      </main>

      {/* Prikker */}
      <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-20">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-opacity ${
              activeIndex === index ? "opacity-100" : "opacity-30"
            }`}
            style={{ backgroundColor: "#F3E9DC" }}
          />
        ))}
      </div>

      <Navigation />
    </div>
  );
}
