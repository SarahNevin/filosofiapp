import { useNavigate, useLocation } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import ProgressBar from "../components/ProgressBar";
import Guidetekst from "../components/Guidetekst";
import Tekstblok from "../components/Tekstblok";
import quizData from "../data/quizData";

export default function QuizResultatView() {
    const location = useLocation();
    const xp = location.state?.xp || 0;
    const maxXp =  quizData.length * 25;
    const percent = (xp / maxXp) * 100;

    const isGood = xp >= maxXp * 0.6;

  const navigate = useNavigate();
  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Test din forståelse"
        title="Platons hule"
        level="h2"
        visTilbageknap={true}
      />

          {/* Progressbar */}
    <ProgressBar
        level="Level 2 – Spirende filosof"
        xp={xp}
        maxXp={maxXp}
        percent={percent}
      />

            {/* RESULTAT */}
      <Tekstblok className="mb-5" title="Quiz gennemført" level="h1">
        <p>
          {isGood
    ? `Godt gået! Du fik ${xp} point og er kommet tættere på at forstå Platons idéer.`
    : `Godt forsøgt! Du fik ${xp} point. Prøv igen, og forbedr dit resultat.`}
        </p>
      </Tekstblok>

      {/* GUIDETEKST */}
      <Guidetekst kanKlikkes={false}>
        “Der findes ikke altid ét rigtigt svar...”
      </Guidetekst>

      {/* REFLEKSION */}
      <Tekstblok className="mt-5" title="Refleksion" level="h2">
        <p>
          Tal med en klassekammerat, eller tænk selv over:
        </p>

        <p>
          Har du oplevet noget, som ændrede måden, du så verden på?
        </p>
      </Tekstblok>

       <div className="flex justify-center mt-10 mb-6">
        <CtaKnap onClick={() => navigate("/emne")}>
          Tilbage til emnet
        </CtaKnap>
      </div>

      <Navigation />
    </div>
  );
}
