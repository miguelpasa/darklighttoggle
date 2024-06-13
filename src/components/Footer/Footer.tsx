import { motion } from "framer-motion";

interface FooterProps {
  isDark: boolean;
}
const Footer = ({ isDark } : FooterProps) => {
  return (
    <motion.div 
      initial={{ color: isDark ? "#FFFFFF" : "#000000" }}
      animate={{ color: isDark ? "#000000" : "#FFFFFF" }}
      className="text-right p-3">
      Made by Miguel Pasa 🔥🔥🔥
    </motion.div>
  );
};

export default Footer;