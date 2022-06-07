import "./styles/Base.css";
import "./styles/Colors.css";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeSample from "./components/CodeSample";
import AppCard from "./components/AppCard";

function HomePage() {
  return (
    <div>
      <Intro></Intro>
      <CodeSample></CodeSample>
    </div>
  );
}

function AppsPage() {
  return (
    <div>
      <h1>Supported apps</h1>
      <h2>
        Forest all your favourite applications by integrating Everforest into
        your workflow.
      </h2>
      <div className="appsContainer">
        <AppCard
          icon="icon-vim.svg"
          appName="Vim"
          url="https://github.com/sainnhe/everforest"
        ></AppCard>
        <AppCard
          icon="icon-vs-code.svg"
          appName="VS Code"
          url="https://github.com/sainnhe/everforest-vscode"
        ></AppCard>
        <AppCard
          icon="icon-visual-studio.svg"
          appName="Visual Studio 2022"
          url="https://github.com/ZachFranzen/Everforest"
        ></AppCard>
        <AppCard
          icon="icon-firefox.svg"
          appName="Firefox"
          url="https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/"
        ></AppCard>
        <AppCard
          icon="icon-firefox.svg"
          appName="Firefox"
          url="https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/"
        ></AppCard>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
