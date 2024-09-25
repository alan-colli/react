import ButtonAdd from "./Components/ButtonAdd";
import ButtonEdit from "./Components/ButtonEdit";
import Header from "./Components/Header";
import TaskSpace from "./Components/TaskSpace";

export default function App() {
  return (
    <div className="bg-blue-600 h-[100vh] w-[100vw] justify-start flex flex-col items-center">
      <Header></Header>
      <div className="w-[70vw] h-[3vh] flex justify-center items-center space-x-4">
        <ButtonAdd />
        <ButtonEdit />
      </div>
      <TaskSpace></TaskSpace>
    </div>
  );
}
