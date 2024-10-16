export default function Keyboard() {
  return (
    <div className="w-[80vw] h-[50vh] flex justify-center">
      <div className="bg-blue-900 rounded-md ">
        <div className="grid grid-cols-4 gap-12 m-4 font-serif">
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            7
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            8
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            9
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            -
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            4
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            5
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            6
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            +
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            1
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            2
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            3
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            X
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            ,
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            0
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            /
          </button>
          <button className="bg-blue-200 w-12 h-12 rounded-md text-xl">
            DEL
          </button>
          <div className="grid grid-cols-2 space-x-36 ml-4">
            <button className="w-32 h-12 bg-red-600 rounded-md text-3xl">
              RESET
            </button>
            <button className="w-32 h-12 bg-red-600 rounded-md text-3xl">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
