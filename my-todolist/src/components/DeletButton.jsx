export default function DeletButton({ children, ...props }) {
  return (
    <div className="flex items-center flex-col border-black">
      <button
        className="bg-red-500  rounded-3xl hover:bg-red-100 h-8 w-24 flex justify-center items-center"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
