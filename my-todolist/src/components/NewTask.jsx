import AddButton from "./AddButton.jsx";
import Input from "./Input.jsx";
import { useState } from "react";

export default function NewTask({ handleSave, handleCancel }) {
  const [task, setTask] = useState({});

  return (
    <div className="bg-blue-400 flex flex-col items-center w-96 rounded-md border-2 border-black">
      <menu className="flex space-x-5 mt-2">
        <li>
          <AddButton onClick={() => handleSave(task)}>Save</AddButton>
        </li>
        <li>
          <AddButton onClick={handleCancel}>Cancel</AddButton>
        </li>
      </menu>
      <div className="bg-gradient-to-b from-blue-900 to-blue-700  rounded-md m-2 border-black border-2">
        <p>
          <Input
            label="Title: "
            onChange={(e) => setTask({ ...task, Title: e.target.value })}
          />
        </p>
        <p>
          <Input
            label="Task: "
            textarea
            onChange={(e) => setTask({ ...task, Task: e.target.value })}
          />
        </p>
        <p>
          <Input
            label="Due date: "
            onChange={(e) => setTask({ ...task, DueDate: e.target.value })}
            type="date"
          />
        </p>
      </div>
    </div>
  );
}
