import CompCountryGIF from "../../figures/project1/CompGIF.gif";
import MobileCountryApp from "../../figures/project1/MobileCountryApp.png";
import MobileGIF from "../../figures/project1/MobileGIF.gif";

function Route1() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="text-white px-4 py-6 mt-[12vh] w-full text-center lg:w-[50vw]">
        <p className="text-lg sm:text-xl mb-4 lg:text-7xl">
          In this project, I developed an app that shows information about any
          country from an API.
        </p>
        <p className="text-lg sm:text-xl mb-6 lg:text-7xl">
          Built with ReactJS, TailwindCSS, and Axios, this project taught me how
          APIs work and how to interact with them.
        </p>

        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
            Using a mobile-first approach, here’s how the app looks:
          </p>
          <img
            src={MobileCountryApp}
            alt="App Screenshot"
            className="w-full rounded-lg shadow-md lg:w-1/3 lg:mx-auto"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24 ">
            Here’s how the app works:
          </p>

          <div className="relative">
            <img
              id="gif"
              src={MobileGIF}
              alt="App Animation"
              className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:w-1/3 lg:mx-auto"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24">
            App running in a bigger screen:
          </p>

          <div className="relative">
            <img
              id="gif"
              src={CompCountryGIF}
              alt="App Animation"
              className="w-[100vw] rounded-lg shadow-md transition-opacity duration-300 lg:w-[75%] lg:h-auto lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route1;
