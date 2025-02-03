import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white text-3xl md:text-3xl lg:text-4xl">
      <div className="flex flex-col space-y-12 lg:space-y-16 items-center justify-center">
        <Link to="/projects/route1" className="hover:scale-110">
          <p>Countries App (API)</p>
        </Link>
        <Link to="/projects/route2" className="hover:scale-110">
          <p>Contact Manager (CRUD)</p>
        </Link>
        <Link to="/projects/route3" className="hover:scale-110">
          <p>ReduxShop (Redux)</p>
        </Link>
      </div>
    </div>
  );
}
