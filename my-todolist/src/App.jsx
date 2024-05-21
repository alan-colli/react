import Header from "./components/Header.jsx";
import AddButton from "./components/AddButton.jsx";
import TaskSpace from "./components/TaskSpace.jsx";
import NewTask from "./components/NewTask.jsx";
import NoTaskCreated from "./components/NoTaskCreated.jsx";
import { useState } from "react";

function App() {
  const [taskState, setTaskState] = useState({
    selectedTask: undefined,
    tasks: [],
  });

  function handleStartTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  return (
    <>
      <Header />
      <AddButton onStartAddTask={handleStartTask}>+ Add</AddButton>
      <TaskSpace />
      <NoTaskCreated />
    </>
  );
}

export default App;
