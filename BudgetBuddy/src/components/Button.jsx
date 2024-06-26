export default function Button({ children, onClick }) {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <button
        className="bg-secondary text-text w-28 h-8 rounded-xl border-2 hover:border-secondary hover:bg-text hover:text-secondary"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
