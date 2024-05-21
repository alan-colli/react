import Header from "./components/Header";
import AddButton from "./components/AddButton";
import TaskSpace from "./components/TaskSpace";
import NewTask from "./components/NewTask";
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
