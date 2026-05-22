import { CtaKnap } from "../components/CtaKnap";
import GyldendalLogo from "../assets/images/gyldendal-logo.svg";

export default function SplashView({ onStart }) {
    return (
        <div>
            <div className="flex flex-col items-center gap-6">
                <CtaKnap onClick={onStart}>
                    START REJSEN
                </CtaKnap>
            </div>
                <img
                src={GyldendalLogo}
                alt="Gyldendal logo"
                className="absolute bottom-4 left-4 w-24"
            />
        </div>
    );
}