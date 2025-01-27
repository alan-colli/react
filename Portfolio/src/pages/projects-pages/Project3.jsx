import GIF from "../../figures/project3/GIF.gif";
import Comp from "../../figures/project3/Comp.png";
import Screen from "../../figures/project3/Screen.png";

export default function Route3() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="text-white px-4 py-6 mt-[12vh] w-full text-center lg:w-[50vw]">
        <p className="text-lg sm:text-xl mb-4 lg:text-7xl">
          In this project, I developed a fully responsive e-commerce website
          with a shopping cart, following the Mobile First approach. Using
          React.JS and TailwindCSS, I was able to create a modern, intuitive,
          and efficient application.
        </p>
        <p className="text-lg sm:text-xl mb-4 lg:text-7xl">
          Throughout the development process, I explored the use of Redux to
          manage the global state, which improved the user experience and made
          the application more organized and scalable.
        </p>
        <p className="text-lg sm:text-xl mb-4 lg:text-7xl">
          Furthermore, I focused on ensuring the design was adaptable to various
          screen sizes, providing seamless navigation on both mobile devices and
          desktops.
        </p>
      </div>
      <div className="mb-6">
        <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24 text-white">
          Here’s how the app looks:
        </p>
        <img
          src={Screen}
          alt="App Screenshot"
          className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:mx-auto"
        />
      </div>
      <div className="mb-6 flex  flex-col">
        <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24 text-white">
          Here’s how the app works:
        </p>
        <div className="relative">
          <img
            id="gif"
            src={GIF}
            alt="App Animation"
            className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:mx-auto"
          />
        </div>
      </div>
      <div className="mb-6 flex flex-col justify-center items-center">
        <p className="text-lg sm:text-xl mb-2 lg:text-7xl lg:my-24 text-white">
          App in a bigger screen:
        </p>

        <div className="relative">
          <img
            id="App comp screenshot"
            src={Comp}
            alt="App Animation"
            className="w-full rounded-lg shadow-md transition-opacity duration-300 lg:mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
