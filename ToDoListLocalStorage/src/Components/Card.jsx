export default function Card() {
  return (
    <div className="h-[28vh] w-[12.5vw] bg-gray-100 flex flex-col justify-start items-start rounded-md pl-4 pt-4 space-y-8">
      <p>Activity: </p>
      <input type="text" />
      <p>Due Date: </p>
      <input type="date" />
    </div>
  );
}
