import AddButton from "./AddButton.jsx";
import Input from "./Input.jsx";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function NewTask({ isOpen, onRequestClose, handleSave }) {
  const [task, setTask] = useState({});

  const handleCancel = () => {
    setTask({});
    onRequestClose();
  };

  const handleSaveClick = () => {
    handleSave(task);
    handleCancel();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCancel}
      contentLabel="New Task Modal"
      className="flex justify-center items-center fixed inset-0 bg-transparent"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center"
    >
      <div className="bg-blue-400 flex flex-col items-center w-96 rounded-md border-2 border-black">
        <menu className="flex space-x-5 mt-2">
          <li>
            <AddButton onClick={handleSaveClick}>Save</AddButton>
          </li>
          <li>
            <AddButton onClick={handleCancel}>Cancel</AddButton>
          </li>
        </menu>
        <div className="bg-gradient-to-b from-blue-900 to-blue-700  rounded-md m-2 border-black border-2">
          <div>
            <Input
              label="Title: "
              onChange={(e) => setTask({ ...task, Title: e.target.value })}
            />
          </div>
          <div>
            <Input
              label="Task: "
              textarea
              onChange={(e) => setTask({ ...task, Task: e.target.value })}
            />
          </div>
          <div>
            <Input
              label="Due date: "
              onChange={(e) => setTask({ ...task, DueDate: e.target.value })}
              type="date"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
