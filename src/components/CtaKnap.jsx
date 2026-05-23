export function CtaKnap({ children, onClick }) {
    return (
        <button
            className="w-[300px] min-h-[81px] rounded-[12px] bg-[#F3E9DC] text-[#151B22] py-5 flex items-center justify-center text-center CTA-tekst"
            onClick={onClick}
        >
            {children}
        </button>
    );
}