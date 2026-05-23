export default function Tekstblok({
    title,
    text,
    level = "h1",
}) {
    const isH1 = level === "h1";

    return (
        <section className="my-[30px] flex flex-col items-center gap-6 px-14">
            {isH1 ? (<h1>{title}</h1>) : (<h2>{title}</h2>)}
            <p>{text}</p>
        </section>
    );
}