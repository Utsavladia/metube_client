import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import AllRoutes from "./Components/AllRoutes";
import LeftDrawer from "./Components/LeftDrawer";
import { useState } from "react";

export function App() {
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(true);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };

  return (
    <Router>
      <Navbar toggleLeftBar={toggleLeftBar} />
      <LeftDrawer isVisible={isLeftBarVisible} />
      <AllRoutes />
    </Router>
  );
}
