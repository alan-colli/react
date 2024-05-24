import Header from "./components/Header.jsx";
import AddButton from "./components/AddButton.jsx";
import TaskSpace from "./components/TaskSpace.jsx";
import NewTask from "./components/NewTask.jsx";
import NoTaskCreated from "./components/NoTaskCreated.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isAddingTask, setIsAddingTask] = useState(false);

  function handleAddTask() {
    setIsAddingTask(true);
  }

  function handleSaveTask(task) {
    setTasks([...tasks, task]);
    setIsAddingTask(false);
  }

  function handleCancelTask() {
    setIsAddingTask(false);
  }

  return (
    <>
      {isAddingTask && (
        <NewTask handleSave={handleSaveTask} handleCancel={handleCancelTask} />
      )}
      <Header />
      <AddButton onClick={handleAddTask}>+ Add</AddButton>
      <TaskSpace tasks={tasks} />
    </>
  );
}

export default App;
