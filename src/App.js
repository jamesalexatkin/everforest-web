import "./styles/Base.css";
import "./styles/Colors.css";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CodeSample from "./components/CodeSample";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Intro></Intro>

      <CodeSample></CodeSample>

      <Footer></Footer>
    </div>
  );
}

export default App;
