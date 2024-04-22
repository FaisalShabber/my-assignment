import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import bgtop from "./Assets/bgtop.svg";
import HowItWork from "./Components/HowItWork/HowItWork";
import ViewAll from "./Components/ViewAll/ViewAll";


function App() {
  return (
    <div>
      <Router>
        <div
          className=""
          style={{
            backgroundImage: `url(${bgtop})`,
            // backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            height:"840px"
          }}
        >
          <Navbar />
          <Header />
        </div>
        <HowItWork />
        <ViewAll />
    
      </Router>
    </div>
  );
}

export default App;
