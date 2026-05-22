export function CtaKnap({ children, onClick }) {
    return (
        <button
            className="text-xl md:text-[26px] font-medium text-[#722E3C] border-2 rounded-[30px] overflow-hidden transition-colors duration-300 hover:text-white py-1 px-6 flex justify-center bg-[#CEBC9833]"
            onClick={onClick}
        >
            {children}
        </button>
    );
}