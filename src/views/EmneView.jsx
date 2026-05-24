import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import platonHule from "../assets/images/platons-hule.webp";

export default function EmneView() {
  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Platon"
        title="Ud af hulen"
        level="h1"
        visTilbageknap={true}
      />

      <div className="w-full flex justify-center mt-6">
        <img
          src={platonHule}
          alt="Platons hule"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <Navigation />
    </div>
  );
}
