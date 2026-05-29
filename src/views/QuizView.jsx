import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../data/quizData";

import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import ProgressBar from "../components/ProgressBar";
import Guidetekst from "../components/Guidetekst";
import QuizCard from "../components/QuizCard";
import HintPopup from "../components/HintPopup";

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

      <ProgressBar
        level="Level 2 – Spirende filosof"
        xp={xp}
        maxXp={maxXp}
        percent={(xp / maxXp) * 100}
        questionText={`Spørgsmål ${currentQuestion + 1} / ${quizData.length}`}
        showXpAnimation={showXpAnimation}
      />

      {/* SPØRGSMÅL */}
      <QuizCard question={question} onAnswer={handleAnswer} />

      {/* Guidetekst med klikbar trane for hint */}
      <Guidetekst
        kanKlikkes={true}
        animated={true}
        onBirdClick={() => setPopupVisible(true)}
      >
        “Tryk på mig, hvis du vil have et hint.”
      </Guidetekst>

      {/* Popup ved klik på trane */}
      <HintPopup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        onReplayStory={() => navigate("/historie")}
        audioText={question.hints.audioText}
        hintText={question.hints.hint}
      />

      <Navigation />
    </div>
  );
}
