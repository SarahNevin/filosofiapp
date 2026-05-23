import { useNavigate } from "react-router-dom";
import { CtaKnap } from "../components/CtaKnap";
import GyldendalLogo from "../assets/images/gyldendal-logo.svg";  
import ScreenHeader from "../components/ScreenHeader";
import Tekstblok from "../components/Tekstblok";

export default function OnboardingView() {
    const navigate = useNavigate();

    return (
        <div>
            <ScreenHeader
            tagline="Opdag verden med nye øjne"
            title="Sofies Verden"
            level="h1"
            />
            <Tekstblok
            title="Velkommen, tænker ..."
            text="Dyk ned i fortællinger, idéer og filosofiske spørgsmål fra Sofies Verden ét tema ad gangen."
            level="h2"
            />
            <div className="flex flex-col items-center gap-6">
                <CtaKnap onClick={() => navigate("/intro")}>
                    START REJSEN
                </CtaKnap>
            </div>
                <img
                src={GyldendalLogo}
                alt="Gyldendal logo"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-30"
            />
        </div>
    );
}
    