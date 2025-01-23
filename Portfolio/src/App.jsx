import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Route1 from "./pages/projects-pages/Project1";
import Route2 from "./pages/projects-pages/Project2";
import Route3 from "./pages/projects-pages/Project3";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/route1" element={<Route1 />} />
        <Route path="/projects/route2" element={<Route2 />} />
        <Route path="/projects/route3" element={<Route3 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
