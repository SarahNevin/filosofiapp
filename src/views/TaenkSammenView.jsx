import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Tekstblok from "../components/Tekstblok";
import Guidetekst from "../components/Guidetekst";
import ScrollableSlider from "../components/ScrollableSlider";
import ContentCard from "../components/ContentCard";

import huleboer from "../assets/images/huleboer.png";
import frigjorte from "../assets/images/den-frigjorte.png";
import dommer from "../assets/images/dommer.png";

export default function TaenkSammenView() {
    const roles = [
    {
      title: "Huleboer",
      image: huleboer,
    },
    {
      title: "Den Frigjorte",
      image: frigjorte,
    },
    {
      title: "Dommer",
      image: dommer,
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
      <Tekstblok className="mt-20" title="Rollespil" level="h1">
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
        <ScrollableSlider title="Roller">
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
