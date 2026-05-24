import { useState } from "react";
import { CtaKnap } from "../components/CtaKnap";

import Navigation from "../components/Navigation";
import Guidetekst from "../components/Guidetekst";
import LydIkon from "../assets/images/lyd.svg";

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
            className="relative w-full max-w-[320px] rounded-[20px] px-4 py-14 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Luk-knap */}
            <button
              onClick={() => setPopupVisible(false)}
              className="absolute top-4 right-4 text-5xl text-[#B4B0B0]"
            >
              x
            </button>

            {/* Hint-knapper i layover */}
            <div className="pt-6">
            <div className="flex flex-col gap-5">
              <CtaKnap>
                <span className="flex items-center gap-3">
                  <img src={LydIkon} alt="" className="w-7 h-7" />
                  <span>Hvad tænker Ida, 11 år?</span>
                </span>
              </CtaKnap>

              <CtaKnap>Få historien fortalt igen</CtaKnap>
            </div>

            {/* Hint */}
            <p
              className="mt-6 text-center"
            >
              Hint: Find svaret i Sofies Verden s. 122, andet afsnit
            </p>
          </div>
          </div>
        </div>
      )}

      <Navigation />
    </div>
  );
}
