import { motion } from "framer-motion";
import React from "react";

interface ToggleSwitchProps {
  isDark: boolean,
  setDark: (isDark: boolean) => void 
}

const ToggleSwitch = ({isDark, setDark}: ToggleSwitchProps) => {
  const [mouseDown, setMouseDown] = React.useState<boolean>(false);

  // this only happens when BOTH mouse DOWN and UP happens on the switch element
  const handleToggleClick = () => {
    setDark(!isDark);
  };

  const handleToggleMouseDown = () => {
    setMouseDown(true);
  }

  const handleToggleMouseUp = () => {
    setMouseDown(false);
  }
  return (
    <motion.div
      id="toggle-button"
      className="bg-gray-200 absolute top-0 bottom-0 left-0 right-0 w-64 lg:h-28 rounded-full m-auto shadow-md ring-2 ring-slate-200"
      onClick={handleToggleClick}
      onMouseDown={handleToggleMouseDown}
      onMouseUp={handleToggleMouseUp}
      onMouseLeave={handleToggleMouseUp}>
      <motion.div
        initial={{ x: isDark ? "136px" : "8px" }}
        animate={{ x: isDark ? "8px" : "136px"}}
        transition={{ type: "spring", bounce: "0.3", duration: "0.5" }}
        className={"bg-gray-300 absolute w-28 rounded-full h-24 top-0 bottom-0 m-auto " + (mouseDown ? "shadow-inner" : "shadow-none")}>
      </motion.div>
    </motion.div>
  );
};

export default ToggleSwitch;