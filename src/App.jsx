//React
import { useContext } from "react";
//Components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
//Router
import { BrowserRouter as Router } from "react-router-dom"; 
//Motion
import { motion } from "framer-motion";
//CursorContext
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const {cursorVariants,cursorBg} = useContext(CursorContext)
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    

      <motion.div
      variants={cursorVariants}
      animate={cursorBg}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 
      pointer-events-none z-50 rounded-full"></motion.div>
    </>
  );
};

export default App;
