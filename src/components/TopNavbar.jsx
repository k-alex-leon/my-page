import React from "react";
import { scroller } from "react-scroll";

const TopNavbar = ({ iconClicked }) => {
  const handleClickApp = (section) => {
    iconClicked(section);

    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuart",
      offSet: 0,
    });
  };

  return (
    <nav className="w-full h-10 fixed top-0 left-0 rigth-0 text-white bg-gray-950 z-50">
      <ul className="flex justify-center pt-4">
        <li>
          <img className="hover:scale-75 transition duration-150" onClick={() => handleClickApp('introduction')} src="./images/home.png" alt="message" />
        </li>
        <li>
          <img className="hover:scale-75 transition duration-150" onClick={() => handleClickApp('knowledge')} src="./images/code.png" alt="message" />
        </li>
        <li>
          <img className="hover:scale-75 transition duration-150" onClick={() => handleClickApp('work')} src="./images/files.png" alt="message" />
        </li>
        <li>
          <img className="hover:scale-75 transition duration-150" onClick={() => handleClickApp('education')} src="./images/notebook.png" alt="message" />
        </li>
        <li>
          <img className="hover:scale-75 transition duration-150" onClick={() => handleClickApp('contact')} src="./images/message.png" alt="message" />
        </li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
