import { Link } from "react-router-dom";
import ArrowImage from "../../figures/iconmonstr-arrow-left-alt-filled-240.png";

function Route1() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black justify-center items-center flex">
      <Link to={"/projects"} className="text-white">
        <img src={ArrowImage} alt="" />
      </Link>
    </div>
  );
}

export default Route1;
