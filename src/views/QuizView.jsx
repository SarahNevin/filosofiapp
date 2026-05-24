import { useState } from "react";

import Navigation from "../components/Navigation";
import Guidetekst from "../components/Guidetekst";

export default function QuizView() {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="min-h-screen pb-[91px]">
      {/* Guidetekst med klikbar trane for hint */}
      <Guidetekst
        kanKlikkes={true}
        animated={true}
        onBirdClick={() => setPopupVisible(true)}
      >
        “Tryk på mig, hvis du vil have et hint.”
      </Guidetekst>

      {/* Popup ved klik på trane */}
      {popupVisible && (
        <div
          className=" fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
          onClick={() => setPopupVisible(false)}
        >
          <div
            className="relative w-full max-w-[320px] rounded-[20px] bg-black px-4 py-14"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Luk-knap */}
        <button onClick={() => setPopupVisible(false)}
          className="absolute top-4 right-4 text-5xl">
            x
        </button>
        </div>
      </div>
      )}

      <Navigation />
    </div>
  );
}
