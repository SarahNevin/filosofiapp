export default function Tekstblok({ title, level = "h1", children, className }) {
  const isH1 = level === "h1";

  return (
    <section className={`flex flex-col items-center gap-6 px-14 text-center ${className}`}>
      {isH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </section>
  );
}
