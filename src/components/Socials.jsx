//Icons
import {
ImLinkedin,
ImGithub,
ImTwitter,
ImYoutube,
ImInstagram
} from 'react-icons/im'
//React
import { useContext } from "react";
//Cursor Context
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return <div
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.linkedin.com/in/batusevinc/' target='_blank' rel="noreferrer">
        <ImLinkedin />
        </a>  
      </li>
      <li>
        <a href='https://github.com/BatuSevinc' target='_blank' rel="noreferrer">
        <ImGithub />
        </a>  
      </li>
      <li>
        <a href='https://www.youtube.com' target='_blank' rel="noreferrer">
        <ImYoutube />
        </a>  
      </li>
      <li>
        <a href='https://www.instagram.com/batusvnc/' target='_blank' rel="noreferrer">
        <ImInstagram />
        </a>  
      </li>
      <li>
        <a href='https://twitter.com/bosverbebatu' target='_blank' rel="noreferrer">
        <ImTwitter />
        </a>  
      </li>
    </ul>
  </div>;
};

export default Socials;
