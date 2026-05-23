import { CtaKnap } from "../components/CtaKnap";  

export default function OnboardingView() {
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
    