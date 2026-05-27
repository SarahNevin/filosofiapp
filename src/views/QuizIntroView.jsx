import { useNavigate } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import ProgressBar from "../components/ProgressBar";
import Tekstblok from "../components/Tekstblok";
import Guidetekst from "../components/Guidetekst";

export default function QuizIntroView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Test din forståelse"
        title="Platons hule"
        level="h2"
        visTilbageknap={true}
      />

      <ProgressBar
        level="Level 2 – Spirende filosof"
        xp={0}
        maxXp={125}
        percent={0}
      />
      <div>
        <Tekstblok title="Klar til quiz?" level="h1">
          <p>
            Vælg mellem 3 svar og se, hvor meget du husker fra fortællingen.
          </p>
          <p>Brug Ori til at få hints, og saml point undervejs.</p>
        </Tekstblok>

        {/* GUIDETEKST */}
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