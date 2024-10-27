import "./App.css"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Feature1 from "./components/Feature1.js"
import Feature2 from "./components/Feature2.js"
import Ratings from "./components/Ratings.js"
import Testi from "./components/Testi.js"

const App = () => {
  return (
    <div className="main mx-[200px]">
      <Navbar />
      <div className="content mt-[100px] flex flex-col gap-[200px]">
        <Hero />
        <Feature1 />
        <Feature2 />
        <Ratings />
        <Testi />
      </div>
    </div>
  );
};

export default App;
