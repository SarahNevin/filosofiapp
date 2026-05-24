import ScreenHeader from "../components/ScreenHeader";
import platonHule from "../assets/images/platons-hule.webp";

export default function HistorieView() {
  return (
    <div>
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
    </div>
  );
}
