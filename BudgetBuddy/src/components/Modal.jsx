import Button from "./Button";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Input({
  isOpen,
  onRequestClose,
  handleSave,
  textInput,
  onTextInputChange,
  numberInput,
  onNumberInputChange,
  dateInput,
  onDateInputChange,
}) {
  const [transaction, setTransaction] = useState([]);

  function handleCancel() {
    setTransaction({});
    onRequestClose();
  }

  function handleSubmitClick() {
    handleSave(transaction);
    handleCancel();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCancel}
      className="flex justify-center items-center fixed inset-0 bg-transparent"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center bg-primary w-1/5 rounded-xl">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <div className="mt-4">
            <input
              className="rounded-md text-primary font-serif pl-2 placeholder-primary"
              type="number"
              placeholder="Value"
              value={numberInput}
              onChange={onNumberInputChange}
            />
          </div>
          <div>
            <input
              className="rounded-md text-primary font-serif pl-2 placeholder-primary"
              type="text"
              placeholder="Description"
              value={textInput}
              onChange={onTextInputChange}
            />
          </div>
          <div>
            <input
              className="rounded-md text-primary font-serif pl-2"
              type="date"
              value={dateInput}
              onChange={onDateInputChange}
            />
          </div>
        </div>
        <div className="flex space-x-4 py-2">
          <Button onClick={handleSubmitClick}>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}
