import { Link } from "react-router-dom";

function Route1() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black justify-center items-center flex">
      <Link to={"/projects"} className="text-white">
        BACK
      </Link>
    </div>
  );
}

export default Route1;
