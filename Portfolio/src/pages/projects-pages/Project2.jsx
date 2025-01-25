import { Link } from "react-router-dom";
import ArrowImage from "../../figures/iconmonstr-arrow-left-alt-filled-240.png";
import AddingComp from "../../figures/project2/AddingComp.gif";
import AddingMob from "../../figures/project2/AddingMob.gif";
import DeletingMob from "../../figures/project2/DeletingMob.gif";
import MobImg from "../../figures/project2/MobImg.png";
import SearchMob from "../../figures/project2/SearchMob.gif";
import UpdatingMob from "../../figures/project2/UpdatingMob.gif";

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
        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2">
            Here it's how the application looks:
          </p>
          <div className="relative">
            <img
              id="gif"
              src={MobImg}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2">Creating a contact:</p>
          <div className="relative">
            <img
              id="gif"
              src={AddingMob}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300"
            />
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2">Updating a contact:</p>
            <div className="relative">
              <img
                id="gif"
                src={UpdatingMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2">deleting a contact:</p>
            <div className="relative">
              <img
                id="gif"
                src={DeletingMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2">Searching a contact:</p>
            <div className="relative">
              <img
                id="gif"
                src={SearchMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2">
              How it looks on bigger screens:
            </p>
            <div className="relative">
              <img
                id="gif"
                src={AddingComp}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route2;
