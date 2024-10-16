export default function Screen({ value }) {
  return (
    <div className="w-[90vw] h-[12vh] bg-blue-950 mb-20 rounded-xl flex justify-end items-center pr-4 text-gray-100 font-sans text-6xl">
      {value}
    </div>
  );
}
