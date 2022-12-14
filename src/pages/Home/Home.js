import React, { useContext } from "react";
import Gridsall from "./Gridsall";
import Carousells from "./Carousells";
import Middle from "./Middle";
import Header from "../../components/Header/Header";
import "./carousel.css";
import "../../App.css";
import Testimonials from "./Testimonials";
import EndOne from "./EndOne";
import { ThemeContext } from "../../context/ThemeContext";
import Partners from "./Partners";
import DesktopFour from "./DesktopFour";
const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: isDarkMode ? "#080c48" : "#b6dfff",
        }}
      >
        {/* <Header /> */}
        <Carousells />
        <Middle />
        <Gridsall />
        <div className="endM">
          <EndOne />
        </div>
        <DesktopFour />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
