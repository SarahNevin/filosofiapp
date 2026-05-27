export default function ProgressBar({
    level, xp, maxXp, percent, questionText, showXpAnimation,   
}) {

    return (
            <div className="px-5 mt-6">
      <div className="mb-6">
        <p className="progress-tekst text-center mb-2">
          {level}
        </p>

        {/* Progressbar */}
           <div className="w-full h-3 bg-[#f3e9dc]/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ffb703] transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

{/* XP-animation ved rigtigt svar */}
     {showXpAnimation && (
          <p className="text-center text-[#ffb703] font-bold animate-bounce mt-3">
            +25 XP ✨
          </p>
        )}

{/* Vis enten det aktuelle spørgsmål eller XP-status */}
    <p className="text-center mt-2">
          {questionText ? questionText : `${xp}XP / ${maxXp}XP`}
        </p>
      </div>
    </div>
  );
}

