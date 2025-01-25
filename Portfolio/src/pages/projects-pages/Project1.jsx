import { Link } from "react-router-dom";
import ArrowImage from "../../figures/iconmonstr-arrow-left-alt-filled-240.png";
import CompCountryGIF from "../../figures/project1/CompGIF.gif";
import MobileCountryApp from "../../figures/project1/MobileCountryApp.png";
import MobileGIF from "../../figures/project1/MobileGIF.gif";

function Route1() {
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
          In this project, I created an app that shows information about any
          country from an API.
        </p>
        <p className="text-lg sm:text-xl mb-6">
          Built with ReactJS, TailwindCSS, and Axios, this project taught me how
          APIs work and how to interact with them.
        </p>

        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2">
            Using a mobile-first approach, here’s how the app looks:
          </p>
          <img
            src={MobileCountryApp}
            alt="App Screenshot"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2">Here’s how the app works:</p>

          <div className="relative">
            <img
              id="gif"
              src={MobileGIF}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2">
            App running in a bigger screen:
          </p>

          <div className="relative">
            <img
              id="gif"
              src={CompCountryGIF}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route1;
