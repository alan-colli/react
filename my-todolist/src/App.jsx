import Header from "./components/Header.jsx";
import AddButton from "./components/AddButton.jsx";
import TaskSpace from "./components/TaskSpace.jsx";
import NewTask from "./components/NewTask.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isAddingTask, setIsAddingTask] = useState(false);

  function handleAddTask() {
    setIsAddingTask(true);
  }

  function handleSaveTask(task) {
    setTasks((prevState) => [...prevState, task]);
    setIsAddingTask(false);
  }

  function handleCancelTask() {
    setIsAddingTask(false);
  }

  const handleDeleteTask = (index) => {
    setTasks((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <>
      {isAddingTask && (
        <NewTask
          isOpen={isAddingTask}
          onRequestClose={handleCancelTask}
          handleSave={handleSaveTask}
        />
      )}
      <Header />
      <AddButton onClick={handleAddTask}>+ Add</AddButton>
      <TaskSpace tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
