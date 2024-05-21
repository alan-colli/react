import AddButton from "./AddButton.jsx";
import Input from "./Input.jsx";

export default function NewTask() {
  return (
    <div className="bg-blue-400 flex flex-col items-center w-96 rounded-md border-2 border-black">
      <menu className="flex space-x-5 mt-2">
        <li>
          <AddButton>Save</AddButton>
        </li>
        <li>
          <AddButton>Cancel</AddButton>
        </li>
      </menu>
      <div className="bg-gradient-to-b from-blue-900 to-blue-700  rounded-md m-2 border-black border-2">
        <p>
          <Input label="Title: " />
        </p>
        <p>
          <Input label="Task: " textarea />
        </p>
        <p>
          <Input label="Due date: " />
        </p>
      </div>
    </div>
  );
}
