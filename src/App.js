import "./styles/Base.css";
import "./styles/Colors.css";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeSample from "./components/CodeSample";

function Home() {
  return (
    <div>
      <Intro></Intro>
      <CodeSample></CodeSample>
    </div>
  );
}

function Apps() {
  return (
    <div>
      <h1>APPS TEST</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
