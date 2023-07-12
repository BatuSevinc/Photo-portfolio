import { useState, useEffect, createContext } from "react";

//create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  //mouse konumu
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  //cursor bg state
  const [cursorBg, setCursorBg] = useState("default");

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);
    //eventi kaldır
    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  //cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  //mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBg('text');
  };
  //mouse Leaver handler
  const mouseLeaveHandler = () => {
    setCursorBg('default');
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
