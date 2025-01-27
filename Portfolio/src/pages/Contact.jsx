import linkedinIcon from "../figures/iconmonstr-linkedin-4-240.png";
import emailImage from "../figures/iconmonstr-email-10-240.png";
import githubImage from "../figures/iconmonstr-github-1-240.png";
import { useState } from "react";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-32 lg:space-y-64">
        <a
          href="https://linkedin.com/in/alan-colli-314ab028a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-16 h-16 hover:scale-125 lg:w-48 lg:h-48"
            src={linkedinIcon}
            alt="linkedin image"
          />
        </a>
        <img
          className="w-16 h-16 hover:scale-125 lg:w-48 lg:h-48"
          src={emailImage}
          alt="email image"
          onClick={handleShowEmail}
        />
        <a
          href="https://github.com/alan-colli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-16 h16 hover:scale-125 lg:w-48 lg:h-48"
            src={githubImage}
            alt="github image"
          />
        </a>
      </div>
      {showEmail && (
        <div className="absolute bg-white text-gray-900 text-sm rounded-md p-2 shadow-lg lg:text-5xl">
          <p>{`alanbritocolli@gmail.com`}</p>
        </div>
      )}
    </div>
  );
}
