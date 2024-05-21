import Input from "./Input";
import Button from "./AddButton";

export default function NewTAsk() {
  return (
    <div className="bg-blue-400 flex flex-col items-center w-1/4 rounded-md border-2 border-black">
      <menu className="flex space-x-5 mt-2">
        <li>
          <Button>Save</Button>
        </li>
        <li>
          <Button>Cancel</Button>
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
