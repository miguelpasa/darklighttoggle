import { motion } from "framer-motion";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

interface ToggleSectionProps {
  isDark: boolean,
  setDark: (isDark: boolean) => void 
}

const ToggleSection = ({isDark, setDark}: ToggleSectionProps) => {
  return (
    <motion.div 
      className="flex-grow text-center">
      <ToggleSwitch 
        isDark={isDark}
        setDark={setDark}/>
    </motion.div>
  );
}

export default ToggleSection;