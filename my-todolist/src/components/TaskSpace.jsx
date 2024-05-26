import NoTaskCreated from "./NoTaskCreated";

export default function TaskSpace({ tasks }) {
  return (
    <div className="mt-24 flex inlineflex items-center justify-center bg-blue-950 text-white text-2xl h-96 mx-24 border-4 border-blue-400 rounded-3xl  ">
      {tasks.length === 0 && <NoTaskCreated />}
      {tasks.map((task) => (
        <div className="bg-blue-400 p-4 border-4 border-black rounded-3xl text-black h-40 mx-4 flex flex-col justify-center h-56 w-38">
          <p>Title: {task.Title}</p>
          <p>Task: {task.Task}</p>
          <p>Due Date: {task.DueDate}</p>
        </div>
      ))}
    </div>
  );
}
