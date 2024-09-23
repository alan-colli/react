export default function Button({ onButtonClick }) {
  return (
    <button
      className="bg-white text-gray-800 w-[5vw] border-2 border-gray-800 rounded hover:border-red-600 hover:text-red-600"
      onClick={onButtonClick}
    >
      Desmarcar
    </button>
  );
}
