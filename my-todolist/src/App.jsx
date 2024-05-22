import Header from "./components/Header.jsx";
import AddButton from "./components/AddButton.jsx";
import TaskSpace from "./components/TaskSpace.jsx";
import NewTask from "./components/NewTask.jsx";
import NoTaskCreated from "./components/NoTaskCreated.jsx";
import { useState } from "react";

function App() {
  // const [taskState, setTaskState] = useState({
  //   tasks: [],
  // });

  // function handleAddTask() {
  //   setTaskState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedTaskId: null,
  //     };
  //   });
  // }

  return (
    <>
      <Header />
      <AddButton>+ Add</AddButton>
      <TaskSpace /*onAddTask={handleStartAddTask}*/ />
      <NoTaskCreated />
    </>
  );
}

export default App;
