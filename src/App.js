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
      <h3>Editors and IDEs</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-jetbrains.svg"
          appName="JetBrains 1"
          url="https://github.com/francma/everforest-jetbrains"
        ></AppCard>
        <AppCard
          icon="icon-jetbrains.svg"
          appName="JetBrains 2"
          url="https://github.com/jef/forest-night-jetbrains"
        ></AppCard>
        <AppCard
          icon="icon-sublime-text.svg"
          appName="Sublime Text"
          url="https://github.com/mhanberg/forest-night-textmate"
        ></AppCard>
        <AppCard
          icon="icon-textmate.svg"
          appName="TextMate"
          url="https://github.com/mhanberg/forest-night-textmate"
        ></AppCard>
        <AppCard
          icon="icon-vim.svg"
          appName="Vim"
          url="https://github.com/sainnhe/everforest"
        ></AppCard>
        <AppCard
          icon="icon-visual-studio.svg"
          appName="Visual Studio 2022"
          url="https://github.com/ZachFranzen/Everforest"
        ></AppCard>
        <AppCard
          icon="icon-vs-code.svg"
          appName="VS Code"
          url="https://github.com/sainnhe/everforest-vscode"
        ></AppCard>
      </div>

      <h3>Terminal emulators</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-alacritty.svg"
          appName="Alacritty"
          url="https://gist.github.com/sainnhe/6432f83181c4520ea87b5211fed27950"
        ></AppCard>
        <AppCard
          icon="icon-gnome-terminal.svg"
          appName="Gnome Terminal"
          url="https://github.com/em3n/Everforest-GnomeTerminal"
        ></AppCard>
        <AppCard
          icon="icon-hyper.svg"
          appName="Hyper"
          url="https://github.com/tani/hyper-everforest"
        ></AppCard>
        <AppCard
          icon="icon-iterm2.svg"
          appName="iTerm2"
          url="https://github.com/icewind/everforest.iterm2"
        ></AppCard>
        <AppCard icon="icon-.svg" appName="" url=""></AppCard>
        <AppCard icon="icon-.svg" appName="" url=""></AppCard>
        <AppCard
          icon="icon-konsole.svg"
          appName="Konsole"
          url="https://store.kde.org/c/1638326"
        ></AppCard>
        <AppCard
          icon="icon-wezterm.svg"
          appName="WezTerm"
          url="https://github.com/iambeingtracked/wezterm-everforest"
        ></AppCard>
        <AppCard
          icon="icon-windows-terminal.svg"
          appName="Windows Terminal"
          url="https://gist.github.com/suppayami/7d427d116b97564d1c565a7aed092d08"
        ></AppCard>
        <AppCard
          icon="icon-xfce4-terminal.svg"
          appName="xfce4-terminal"
          url="https://gist.github.com/anka4/0898df5af4537995e032cd5b8011b0d4"
        ></AppCard>
      </div>

      <h3>Other applications</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-alfred.svg"
          appName="Alfred"
          url="https://github.com/mhanberg/forest-night-alfred"
        ></AppCard>
        <AppCard
          icon="icon-btop.svg"
          appName="Btop"
          url="https://github.com/iambeingtracked/btop-everforest"
        ></AppCard>
        <AppCard
          icon="icon-element.svg"
          appName="Element"
          url="https://github.com/iambeingtracked/element-everforest"
        ></AppCard>
        <AppCard
          icon="icon-firefox.svg"
          appName="Firefox"
          url="https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/"
        ></AppCard>
        <AppCard
          icon="icon-gtk.svg"
          appName="GTK"
          url="https://github.com/Theory-of-Everything/everforest-gtk"
        ></AppCard>
        <AppCard
          icon="icon-obsidian.svg"
          appName="Obsidian"
          url="https://github.com/kepano/obsidian-minimal/releases/tag/5.2.8"
        ></AppCard>
        <AppCard
          icon="icon-slack.svg"
          appName="Slack"
          url="https://github.com/itendtostare/everforest-slack"
        ></AppCard>
        <AppCard
          icon="icon-xresources.svg"
          appName="Xresources"
          url="https://github.com/jef/forest-night-xresources"
        ></AppCard>
        <AppCard
          icon="icon-zathura.svg"
          appName="Zathura"
          url="https://github.com/iambeingtracked/zathura-everforest"
        ></AppCard>
        <AppCard
          icon="icon-zsh.svg"
          appName="zsh"
          url="https://github.com/sainnhe/dotfiles/tree/master/.zsh-theme"
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
