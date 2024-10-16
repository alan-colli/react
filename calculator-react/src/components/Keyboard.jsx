export default function Keyboard({
  handleChangeScreen,
  handleReset,
  handleDeleteNumber,
  handleCalculate,
}) {
  return (
    <div className="w-[80vw] h-[50vh] flex justify-center">
      <div className="bg-blue-950 rounded-md">
        <div className="grid grid-cols-4 gap-12 m-4 font-serif">
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={7}
            onClick={(e) => handleChangeScreen(e.target.value)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={8}
            onClick={() => handleChangeScreen(8)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={9}
            onClick={() => handleChangeScreen(9)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="-"
            onClick={() => handleChangeScreen("-")}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={4}
            onClick={() => handleChangeScreen(4)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={5}
            onClick={() => handleChangeScreen(5)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={6}
            onClick={() => handleChangeScreen(6)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="+"
            onClick={() => handleChangeScreen("+")}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={1}
            onClick={() => handleChangeScreen(1)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={2}
            onClick={() => handleChangeScreen(2)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={3}
            onClick={() => handleChangeScreen(3)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="X"
            onClick={() => handleChangeScreen("X")}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="."
            onClick={() => handleChangeScreen(".")}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value={0}
            onClick={() => handleChangeScreen(0)}
          />
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="/"
            onClick={() => handleChangeScreen("/")}
          />

          {/* Botão de Deletar */}
          <input
            type="button"
            className="bg-blue-200 w-12 h-12 rounded-md text-xl"
            value="DEL"
            onClick={handleDeleteNumber}
          />

          <div className="grid grid-cols-2 space-x-36 ml-4">
            <input
              type="button"
              className="w-32 h-12 bg-red-600 rounded-md text-3xl"
              value="RES"
              onClick={handleReset}
            />
            <input
              type="button"
              className="w-32 h-12 bg-red-600 rounded-md text-3xl"
              value="="
              onClick={handleCalculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
