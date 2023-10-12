import React, { useContext } from "react";
// import icons
import { ImGithub, ImLinkedin } from "react-icons/im";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/martyna-codes/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Martynacodes"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
