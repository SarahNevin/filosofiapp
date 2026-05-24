import Navigation from "../components/Navigation";
import Guidetekst from "../components/Guidetekst";

export default function QuizView() {
  return (
    <div className="min-h-screen pb-[91px]">
      <Guidetekst
        kanKlikkes={true}
        animated={true}
      >
        “Tryk på mig, hvis du vil have et hint.”
      </Guidetekst>

      <Navigation />
    </div>
  );
}
