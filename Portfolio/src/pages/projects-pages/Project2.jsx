import AddingComp from "../../figures/project2/AddingComp.gif";
import AddingMob from "../../figures/project2/AddingMob.gif";
import DeletingMob from "../../figures/project2/DeletingMob.gif";
import MobImg from "../../figures/project2/MobImg.png";
import SearchMob from "../../figures/project2/SearchMob.gif";
import UpdatingMob from "../../figures/project2/UpdatingMob.gif";

function Route2() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="text-white px-4 py-6 mt-[12vh] lg:w-[50vw] w-full text-center">
        <p className="text-lg sm:text-xl mb-6 lg:text-7xl">
          In this project, I developed a fully functional contacts manager,
          featuring options to add, delete, update, and search contacts.
        </p>
        <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
          On the FrontEnd, I used ReactJS for building the user interface,
          TailwindCSS for styling, and Axios to handle API requests. On the
          BackEnd, I created the API from scratch using Node.js and integrated
          it with a SQLite database for data storage.
        </p>
        <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
          As helper tools, I used DBeaver to manage the database and Insomnia to
          monitor the API requests.
        </p>
        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
            Here it's how the application looks:
          </p>
          <div className="relative">
            <img
              id="image"
              src={MobImg}
              alt="App Animation"
              className="w-full rounded-lg shadow-md lg:w-1/3 lg:mx-auto"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
            Creating a contact:
          </p>
          <div className="relative">
            <img
              id="gif"
              src={AddingMob}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:w-1/3 lg:mx-auto"
            />
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
              Updating a contact:
            </p>
            <div className="relative">
              <img
                id="gif"
                src={UpdatingMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:w-1/3 lg:mx-auto"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
              deleting a contact:
            </p>
            <div className="relative">
              <img
                id="gif"
                src={DeletingMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:w-1/3 lg:mx-auto"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
              Searching a contact:
            </p>
            <div className="relative">
              <img
                id="gif"
                src={SearchMob}
                alt="App Animation"
                className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:w-1/3 lg:mx-auto"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
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
