export default function Header() {
  return (
    <div className=" mt-8 mb-16 w-[90vw] h-[8vh] flex flex-row justify-between items-end text-gray-100 ">
      <p className="text-4xl">Calc</p>
      <div className="flex flex-row space-x-16">
        <p>Theme</p>
        <button>COLOR</button>
      </div>
    </div>
  );
}
