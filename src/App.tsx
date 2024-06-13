import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToggleSection from './components/ToggleSection/ToggleSection';

const App = () => {
  const [isDarkMode, setDarkMode] = React.useState<boolean>(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  return (
    // <motion.div id="react-root" className={isDarkMode ? "dark-mode-enabled" : ""}> TODO uncomment this
    <motion.div
      initial={{ backgroundColor: isDarkMode ? "#131862" : "#c9f1fa" }}
      animate={{ backgroundColor: isDarkMode ? "#c9f1fa" : "#131862" }}
      id="react-root"
      className="flex flex-col">
      <Header />
      <ToggleSection 
        isDark={isDarkMode}
        setDark={setDarkMode}/>
      <Footer isDark={isDarkMode}/>
    </motion.div>
  );
};

export default App;
