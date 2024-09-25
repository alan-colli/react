export default function Card({ list }) {
  return (
    <div className="h-[28vh] w-[12.5vw] bg-gray-100 flex flex-col justify-start items-start rounded-md pl-4 pt-4 space-y-8">
      {list.map((task, index) => (
        <div key={index}>
          <p className="my-2">Activity: {task.Activity}</p>
          <p className="my-2">Date: {task.Date}</p>
        </div>
      ))}
    </div>
  );
}
