export default function QuizCard({ question, onAnswer }) {
  return (
    <>
      <h1 className="spoergsmaal-tekst text-center mb-3 px-5">
        {question.question}
      </h1>

      <div className="flex flex-col gap-6 mt-6 px-10">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="border border-[#F3E9DC] p-4 rounded-xl shadow"
            onClick={() => onAnswer(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
}