import Trane from "../assets/images/trane.svg";

export default function Guidetekst({
  children,
  animated = false,
  onBirdClick,
  kanKlikkes = false,
}) {
  const traneIndhold = (
    <div className={`shrink-0 ${animated ? "animer-trane" : ""}`}>
      <img src={Trane} alt="Tranen Ori" className="w-[150px]" />
    </div>
  );

  return (
    <div className="mt-8 flex items-center justify-between pl-5">
      <p className="flex-1">{children}</p>

      {kanKlikkes && onBirdClick ? (
        <button onClick={onBirdClick} type="button">
          {traneIndhold}
        </button>
      ) : (
        traneIndhold
      )}
    </div>
  );
}
