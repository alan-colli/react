import Button from "./Button";

export default function Imput({}) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary w-1/5 rounded-xl">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <div className="mt-4">
          <input className="rounded-xl" type="number" />
        </div>
        <div>
          <input className="rounded-xl" type="text" />
        </div>
        <div>
          <input className="rounded-xl" type="date" />
        </div>
      </div>
      <div className="flex space-x-4 py-2">
        <Button>Submit</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
}
