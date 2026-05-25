import Tilbageknap from "./Tilbageknap";

export default function ScreenHeader({
  tagline,
  title,
  level = "h1",
  visTilbageknap = false,
}) {
  const isHeading1 = level === "h1";

  return (
    <header
      className={`pt-16 flex flex-col items-center ${isHeading1 ? "gap-7" : "gap-3"}`}
    >
      <h3>{tagline}</h3>

      <div className="relative w-full">
        {visTilbageknap && <Tilbageknap />}

        <div className="flex justify-center">
          {isHeading1 ? <h1>{title}</h1> : <h2>{title}</h2>}
        </div>
      </div>
    </header>
  );
}
