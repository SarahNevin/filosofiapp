export default function RollePopup({ role, onClose }) {
  if (!role) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[320px] rounded-[20px] px-4 py-14 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lukknap */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-5xl text-[#B4B0B0]"
        >
          x
        </button>

        {/* INDHOLD */}
        <div className="pt-6">
          <h2 className="text-center mb-4">
            {role.title}
          </h2>

          <p className="text-center px-6">
            {role.description}
          </p>
        </div>
      </div>
    </div>
  );
}