import logo from "./logo.svg";
import "./App.css";
import { GeneralRoutes } from "./routes/GeneralRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({ mirror: true, offset: 20, mirror: true });
  useEffect(() => {
    console.log("clled");
    AOS.init();
  }, []);
  return (
    <Router>
      <div className="App">
        <GeneralRoutes />
        {/* hiii */}
      </div>
    </Router>
  );
}

export default App;
