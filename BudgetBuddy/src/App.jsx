import Modal from "./components/Modal";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header />
      {modalOpen && (
        <Modal>
          <button className="bg-third text-text w-44 h-12 mt-12 rounded-lg hover:bg-secondary hover:border-primary border-2 border-secondary">
            Transaction
          </button>
        </Modal>
      )}
      <Counter />
    </div>
  );
}
