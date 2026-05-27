import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";
import quizData from "../data/quizData";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Guidetekst from "../components/Guidetekst";
import LydIkon from "../assets/images/lyd.svg";

export default function QuizView() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = quizData[currentQuestion];

  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [xp, setXp] = useState(0);
  const [showXpAnimation, setShowXpAnimation] = useState(false);
  const maxXp = quizData.length * 25;

  function handleAnswer(answer) {
    console.log("Valgt svar:", answer);

    const isCorrect = answer.correct;
    const newXp = xp + (isCorrect ? 25 : 0);

    setXp(newXp);

    if (isCorrect) {
      setShowXpAnimation(true);
      setTimeout(() => setShowXpAnimation(false), 1000);
    }

    const next = currentQuestion + 1;

    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      // vent 1 sekund for at vise XP-animationen, før der navigeres til resultatet
      setTimeout(() => {
        navigate("/quiz/resultat", { state: { xp: newXp } });
      }, 1000);
    }
  }

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
            Level 2 – Spirende filosof
          </p>

          {/* Progressbar */}
          <div className="w-full h-3 bg-[#f3e9dc]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffb703] transition-all duration-500"
              style={{ width: `${(xp / maxXp) * 100}%` }}
            ></div>
          </div>

          {showXpAnimation && (
            <p className="text-center text-[#ffb703] font-bold animate-bounce mt-3">
              +25 XP ✨
            </p>
          )}

          <p className="text-center mt-2">
            Spørgsmål {currentQuestion + 1} / {quizData.length}
          </p>
        </div>
      </div>

      {/* SPØRGSMÅL */}
      <h1 className="spoergsmaal-tekst text-center mb-3 px-5">
        {question.question}
      </h1>

      <div className="flex flex-col gap-6 mt-6 px-10">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="border border-[#F3E9DC] p-4 rounded-xl shadow"
            onClick={() => handleAnswer(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>

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
          className=" fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-6"
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

                <CtaKnap onClick={() => navigate("/historie")}>
                  Få historien fortalt igen
                </CtaKnap>
              </div>

              {/* Hint */}
              <p className="mt-6 px-6 text-center">
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
