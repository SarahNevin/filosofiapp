import Navigation from "../components/Navigation";
import ScreenHeader from "../components/ScreenHeader";
import Tekstblok from "../components/Tekstblok";
import Guidetekst from "../components/Guidetekst";
import ScrollableSlider from "../components/ScrollableSlider";
import ContentCard from "../components/ContentCard";
import RollePopup from "../components/RollePopup";
import { CtaKnap } from "../components/CtaKnap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import huleboer from "../assets/images/huleboer.png";
import frigjorte from "../assets/images/den-frigjorte.png";
import dommer from "../assets/images/dommer.png";

export default function TaenkSammenView() {

  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      title: "Huleboer",
      image: huleboer,
      description:
        "Du lever i hulen og ser kun skyggerne på væggen. For dig er skyggerne virkeligheden.",
    },
    {
      title: "Den Frigjorte",
      image: frigjorte,
      description:
        "Du har forladt hulen og har set en større virkelighed udenfor. Du prøver at forklare de andre, hvad du har set.",
    },
    {
      title: "Dommer",
      image: dommer,
      description:
        "Du lytter til begge sider og vurderer, hvad der virker mest sandt.",
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
            <div
              key={index}
              className="w-[332px] h-[300px] flex-shrink-0"
              onClick={() => setSelectedRole(role)}
            >
              <ContentCard title={role.title} image={role.image} />
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

      <div className="flex justify-center mt-10 mb-6">
        <CtaKnap onClick={() => navigate("/emne")}>Tilbage til emnet</CtaKnap>
      </div>

   <RollePopup
        role={selectedRole}
        onClose={() => setSelectedRole(null)}
      />

      <Navigation />
    </div>
  );
}
