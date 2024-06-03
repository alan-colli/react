import NoTaskCreated from "./NoTaskCreated";
import DeletButton from "./DeletButton";

export default function TaskSpace({ tasks, onDeleteTask }) {
  return (
    <div className="mt-24 flex items-center justify-center bg-blue-950 text-white text-2xl h-96 mx-24 border-4 border-blue-400 rounded-3xl">
      {tasks.length === 0 ? (
        <NoTaskCreated />
      ) : (
        <div className="overflow-x-auto custom-scrollbar h-full w-full p-4">
          <div className="flex justify-center items-center gap-4 h-full">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-blue-400 p-4 border-4 border-black rounded-3xl text-black flex flex-col justify-start h-56 w-60 flex-shrink-0 overflow-y-auto custom-scrollbar"
              >
                <DeletButton onClick={() => onDeleteTask(index)}>
                  Delete
                </DeletButton>
                <p className="my-2">Title: {task.Title}</p>
                <p className="my-2">Task: {task.Task}</p>
                <p className="my-2">Due Date: {task.DueDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
