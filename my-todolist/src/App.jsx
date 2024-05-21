import Header from "./components/Header.jsx";
import AddButton from "./components/AddButton.jsx";
import TaskSpace from "./components/TaskSpace.jsx";
import NewTask from "./components/NewTask.jsx";

function App() {
  return (
    <>
      <Header />
      <AddButton>+ Add</AddButton>
      <TaskSpace />
      <NewTask />
    </>
  );
}

export default App;
