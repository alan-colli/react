export default function Results() {
  return (
    <div className="w-full h-full bg-buttonNormal flex flex-col rounded-3xl">
      <div className="flex justify-between px-8 pt-20">
        <p className="text-white text-lg">Tip Amount</p>
        <p className="text-white pr-12 text-3xl">30</p>
      </div>
      <div className="flex justify-between px-8 pt-20">
        <p className="text-white text-lg">
          Total Amount
          <br />
          /Person
        </p>
        <p className="text-white pr-12 text-3xl">24</p>
      </div>
    </div>
  );
}
