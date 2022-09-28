import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

//Importing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NavigationBar from "./component/NavigationBar";
import Training from "./pages/Training";
import Experience from "./pages/Experience";
import More from "./pages/More";

import eke2 from '../src/assets/eke2.jpeg'

//Importing styles
import "./styles/main.css";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/exprience":
      component = <Experience />;
      break;
    case "/training":
      component = <Training />;
      break;
    case "/more":
      component = <More />;
      break;
    default:
      break;
  }
  return (
    // style={{backgroundImage: `url(${eke2})`, height: 900, width: 500, backgroundRepeat: "no-repeat"}}
    <React.Fragment>
      <div>
        <NavigationBar />
        {component}
      </div>
    </React.Fragment>
  );
}

export default App;
