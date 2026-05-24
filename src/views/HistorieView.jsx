import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import platonHule from "../assets/images/platons-hule.webp";
import Guidetekst from "../components/Guidetekst";

export default function HistorieView() {
  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Oplev fortællingen"
        title="Ud af hulen"
        level="h2"
        visTilbageknap={true}
      />

      <div className="w-full flex justify-center mt-6">
        <img
          src={platonHule}
          alt="Platons hule"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <Guidetekst kanKlikkes={false}>
        “Forestil dig en mørk hule, hvor mennesker sidder fanget og kun kan se
        skygger på en væg...”
      </Guidetekst>

      <Navigation />
    </div>
  );
}
