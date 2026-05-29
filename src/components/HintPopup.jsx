import { CtaKnap } from "./CtaKnap";
import lydIkon from "../assets/images/lyd.svg";

export default function HintPopup({ visible, onClose, onReplay, audioText, hintText}) {
    if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[320px] rounded-[20px] px-4 py-14 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lukknap */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-5xl text-[#B4B0B0]"
        >
          x
        </button>

        {/* CTA-knapper */}
        <div className="pt-6">
          <div className="flex flex-col gap-5">
            <CtaKnap>
              <span className="flex items-center gap-3">
                <img src={lydIkon} alt="" className="w-7 h-7" />
                <span>{audioText}</span>
              </span>
            </CtaKnap>

            <CtaKnap onClick={onReplay}>
              Få historien fortalt igen
            </CtaKnap>
          </div>

          <p className="mt-6 px-6 text-center">
            {hintText}
          </p>
        </div>
      </div>
    </div>
  );
}