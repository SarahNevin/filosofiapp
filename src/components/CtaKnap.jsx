export function CtaKnap({ children, onClick }) {
    return (
        <button
            className="w-[300px] rounded-[12px] bg-[#F3E9DC] text-[#151B22] py-3"
            onClick={onClick}
        >
            {children}
        </button>
    );
}