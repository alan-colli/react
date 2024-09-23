import Button from "./Button";
import ClickScreen from "./ClickScreen";

export default function Bodypage() {
  return (
    <div className=" bg-gray-500 w-screen h-screen flex  flex-col items-center">
      <div
        id="header"
        className="bg-gray-300 w-[60vw] h-[5vh] flex justify-center items-center mt-24 rounded-t-[8px] "
      >
        <h1 className="font-bold text-3xl font-serif">
          Clique abaixo para marcar
        </h1>
      </div>
      <ClickScreen />
      <div
        id="footer"
        className="w-[60vw] h-[5vh] bg-gray-300 rounded-b-[8px] flex flex-col justify-center items-center"
      >
        <Button></Button>
      </div>
    </div>
  );
}
