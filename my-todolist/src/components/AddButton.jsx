export default function AddButton({ children, ...props }) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <button
        className=" text-white bg-blue-600 hover:bg-blue-400 w-24 h-22 border-2 border-black rounded-md"
        onClick={handleStartTask}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
