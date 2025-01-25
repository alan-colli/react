import { Link } from "react-router-dom";
import ArrowImage from "../../figures/iconmonstr-arrow-left-alt-filled-240.png";

function Route2() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start">
      <Link
        to={"/projects"}
        className="text-white flex items-center gap-2 fixed top-[10vh] left-4 z-20 bg-gray-800 p-2 rounded-md shadow-lg"
      >
        <img src={ArrowImage} alt="Arrow" className="w-6 h-6" />
        <span className="text-lg">Back</span>
      </Link>
      <div className="text-white px-4 py-6 mt-[12vh] max-w-screen-sm w-full text-center">
        <p className="text-lg sm:text-xl mb-4">
          In this project, I developed a fully functional contacts manager,
          featuring options to add, delete, update, and search contacts.
        </p>
        <p className="text-lg sm:text-xl mb-4">
          On the FrontEnd, I used ReactJS for building the user interface,
          TailwindCSS for styling, and Axios to handle API requests. On the
          BackEnd, I created the API from scratch using Node.js and integrated
          it with a SQLite database for data storage.
        </p>
        <p className="text-lg sm:text-xl mb-4">
          As helper tools, I used DBeaver to manage the database and Insomnia to
          monitor the API requests.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Route2;
