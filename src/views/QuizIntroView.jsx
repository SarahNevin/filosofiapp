import { useNavigate } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Tekstblok from "../components/Tekstblok";
import Guidetekst from "../components/Guidetekst";

export default function QuizIntroView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-[91px]">
      {/* HEADER */}
      <ScreenHeader
        tagline="Test din forståelse"
        title="Platons hule"
        level="h2"
        visTilbageknap={true}
      />

      {/* PROGRESS */}
      <div className="px-5 mt-6">
        <div className="mb-6">
          <p className="progress-tekst text-center mb-2">
            Level 2 – Spirende filosof
          </p>

          <div className="w-full h-3 bg-[#f3e9dc]/30 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#ffb703]"></div>
          </div>

          <p className="text-center mt-2">75XP / 100XP</p>
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <Tekstblok title="Klar til quiz" level="h1">
          <p>
            Vælg mellem 3 svar og se, hvor meget du husker fra fortællingen.
          </p>
          <p>Brug Ori til at få hints, og saml point undervejs.</p>
        </Tekstblok>

        {/* GUIDETEKST (nu uden klik + uden popup) */}
        <Guidetekst kanKlikkes={false}>
          Hints koster ikke point, men måske afslører jeg lidt for meget ...”
        </Guidetekst>

        {/* CTA */}
        <div className="flex justify-center my-6">
          <CtaKnap onClick={() => navigate("/quiz/start")}>
            Start quiz
          </CtaKnap>
        </div>

        <Navigation />
      </div>
    </div>
  );
}