import Trane from "../assets/images/trane.svg";

export default function Guidetekst({
  children,
  animated = false,
  onBirdClick,
}) {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4">
      <p className="flex-1">{children}</p>
      <button
        onClick={onBirdClick}
        className={`shrink-0 ${animated ? "animate-bird" : ""}`}
      >
        <img src={Trane} alt="Tranen Ori" className="w-[150px]" />
      </button>
    </div>
  );
}
