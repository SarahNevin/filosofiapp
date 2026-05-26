import { useNavigate } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Guidetekst from "../components/Guidetekst";
import Tekstblok from "../components/Tekstblok";

export default function QuizResultatView() {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Test din forståelse"
        title="Platons hule"
        level="h2"
        visTilbageknap={true}
      />

      <div className="px-5 mt-6">
        <div className="mb-6">
          <p className="progress-tekst text-center mb-2">
            Level 3 – Sandhedssøger
          </p>

          {/* Progressbar */}
          <div className="w-full h-3 bg-[#f3e9dc]/30 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#ffb703]"></div>
          </div>

          <p className="text-center mt-2">75XP / 100XP</p>
        </div>
      </div>

            {/* RESULTAT */}
      <Tekstblok title="Quiz gennemført" level="h1">
        <p>
          Godt gået! Du fik 125 point og er kommet tættere på at forstå
          Platons idéer.
        </p>
      </Tekstblok>

      {/* GUIDETEKST */}
      <Guidetekst kanKlikkes={false}>
        “Der findes ikke altid ét rigtigt svar...”
      </Guidetekst>

      {/* REFLEKSION */}
      <Tekstblok title="Refleksion" level="h2">
        <p>
          Tal med en klassekammerat, eller tænk selv over:
        </p>

        <p>
          Har du oplevet noget, som ændrede måden, du så verden på?
        </p>
      </Tekstblok>

       <div className="flex justify-center my-6">
        <CtaKnap onClick={() => navigate("/historie")}>
          Tilbage til emnet
        </CtaKnap>
      </div>

      <Navigation />
    </div>
  );
}
