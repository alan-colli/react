import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex flex-col justify-center  items-center text-white text-3xl ">
      <div className="flex flex-col space-y-12">
        <Link to="/projects/route1" className="hover:scale-110">
          Countries App
        </Link>
        <Link to="/projects/route2" className="hover:scale-110">
          Contact Manager
        </Link>
        <Link to="/projects/route3" className="hover:scale-110">
          Rota 3
        </Link>
      </div>
    </div>
  );
}
