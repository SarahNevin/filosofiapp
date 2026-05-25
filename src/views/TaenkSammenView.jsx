import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Tekstblok from "../components/Tekstblok";
import Guidetekst from "../components/Guidetekst";
import ScrollableSlider from "../components/ScrollableSlider";
import ContentCard from "../components/ContentCard";

import taenkSammen from "../assets/images/taenk-sammen.png";

export default function TaenkSammenView() {
    const roles = [
    {
      title: "Huleboer",
      image: taenkSammen,
    },
    {
      title: "Den Frigjorte",
      image: taenkSammen,
    },
    {
      title: "Dommer",
      image: taenkSammen,
    },
  ];

  return (
    <div className="min-h-screen pb-[91px]">
      <ScreenHeader
        tagline="Tænk sammen"
        title="Platons hule"
        level="h2"
        visTilbageknap
      />

      {/* Tekstblok 1 */}
      <Tekstblok title="Rollespil" level="h1">
        <p>
          Vælg en rolle og spil hulelignelsen sammen i klassen. Hvordan oplever
          I sandheden forskelligt?
        </p>
      </Tekstblok>

      <Guidetekst kanKlikkes={false}>
        "Prøv at se verden gennem en andens øjne."
      </Guidetekst>

    {/* Slider med roller */}
      <div className="mt-8">
        <ScrollableSlider>
          {roles.map((role, index) => (
            <div key={index} className="w-[332px] h-[300px] flex-shrink-0">
              <ContentCard title={role.title} image={role.image} link={role.link} />
            </div>
          ))}
        </ScrollableSlider>
        </div>

      {/* Tekstblok 2 */}
      <Tekstblok title="Overvej dette" level="h2">
        <ul className="space-y-2 list-disc">
          <li>Hvem afgør, hvad der er sandt?</li>
          <li>Hvorfor kan nye idéer være svære at acceptere?</li>
          <li>Kan man stole på sine sanser?</li>
          <li>Ville du turde forlade hulen?</li>
          <li>Hvordan er det, at være alene om at se noget anderledes?</li>
        </ul>
      </Tekstblok>

      <Navigation />
    </div>
  );
}
