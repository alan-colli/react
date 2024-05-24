import NoTaskCreated from "./NoTaskCreated";

export default function TaskSpace({ tasks }) {
  return (
    <div className="mt-24 flex flex-col items-center  bg-blue-950 text-white text-2xl h-96 mx-24 border-4 border-blue-400 rounded-3xl">
      {tasks.length === 0 && <NoTaskCreated />}
      {tasks.map((task) => (
        <div>
          <p>{task.Title}</p>
          <p>{task.Task}</p>
          <p>{task.DueDate}</p>
        </div>
      ))}
    </div>
  );
}
