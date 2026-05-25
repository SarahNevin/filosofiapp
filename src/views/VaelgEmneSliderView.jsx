import { useState } from "react";
import PageSlider from "../components/PageSlider";
import ScreenHeader from "../components/ScreenHeader";
import Navigation from "../components/Navigation";
import platonHule from "../assets/images/test-din-forstaelse.png";

export default function VaelgEmneView() {
  const screens = [
    { title: "Idéernes verden", image: platonHule },
    { title: "Ud af hulen", image: platonHule },
    { title: "Idéernes verden", image: platonHule },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
            <div key={index} className="relative w-full h-full">
              <img
                src={screen.image}
                alt={screen.title}
                className="absolute inset-0 w-full h-full object-cover"
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