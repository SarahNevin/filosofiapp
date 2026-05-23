export default function ScreenHeader({
    tagline,
    title,
    level ="h1"
}) {
    const isHeading1 = level === "h1";

    return (
        <header className={`pt-16 flex flex-col items-center mb-20 ${isHeading1 ? "gap-7" : "gap-3"}`}>
        <h3>{tagline}</h3>

        {isHeading1 ? (
            <h1>{title}</h1>) : (<h2>{title}</h2>
        )}
        </header>
    );
    }