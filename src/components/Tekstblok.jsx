export default function Tekstblok({ title, text, level = "h1", children }) {
  const isH1 = level === "h1";

  return (
    <section className="my-[30px] flex flex-col items-center gap-6 px-14 text-center">
      {isH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}
