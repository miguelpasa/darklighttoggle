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
        initial={isDark ? 
            { 
                backgroundColor: "rgb(28, 42, 66)"
            } : 
            { 
                backgroundColor: "rgb(226 232 240)"
            }}
        animate={isDark ? 
            { 
                backgroundColor: "rgb(226 232 240)" 
            } : 
            { 
                backgroundColor: "rgb(28, 42, 66)" 
            }
        }
        className={"absolute top-0 bottom-0 left-0 right-0 w-64 lg:h-28 rounded-full m-auto shadow-md ring-2 " + (isDark ? " ring-slate-200" : " ring-slate-600")}
        onClick={handleToggleClick}
        onMouseDown={handleToggleMouseDown}
        onMouseUp={handleToggleMouseUp}
        onMouseLeave={handleToggleMouseUp}>
        <motion.div
            initial={isDark ? 
                { 
                    x: "136px"
                } : 
                {
                    x: "8px" 
                }
            }
            animate={isDark ? 
                { 
                    x: "8px",
                    backgroundColor: "rgb(253, 184, 19)"
                } :
                {
                    x: "136px",
                    backgroundColor: "rgb(246, 241, 213)"
                }
            }
            transition={{ type: "spring", bounce: "0.3", duration: "0.5" }}
            className={"bg-gray-300 absolute w-28 rounded-full h-24 top-0 bottom-0 m-auto " + (mouseDown ? "shadow-inner" : "shadow-none")}>
      </motion.div>
    </motion.div>
  );
};

export default ToggleSwitch;