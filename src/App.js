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
      <h3>Editors and IDEs</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-emacs.svg"
          appName="Emacs"
          category="editor-ide"
          url="https://github.com/theory-of-everything/everforest-theme"
        ></AppCard>
        <AppCard
          icon="icon-jetbrains.svg"
          appName="JetBrains 1"
          category="editor-ide"
          url="https://github.com/francma/everforest-jetbrains"
        ></AppCard>
        <AppCard
          icon="icon-jetbrains.svg"
          appName="JetBrains 2"
          category="editor-ide"
          url="https://github.com/jef/forest-night-jetbrains"
        ></AppCard>
        <AppCard
          icon="icon-sublime-text.svg"
          appName="Sublime Text"
          category="editor-ide"
          url="https://github.com/mhanberg/forest-night-textmate"
        ></AppCard>
        <AppCard
          icon="icon-textmate.svg"
          appName="TextMate"
          category="editor-ide"
          url="https://github.com/mhanberg/forest-night-textmate"
        ></AppCard>
        <AppCard
          icon="icon-vim.svg"
          appName="Vim"
          category="editor-ide"
          url="https://github.com/sainnhe/everforest"
        ></AppCard>
        <AppCard
          icon="icon-visual-studio.svg"
          appName="Visual Studio 2022"
          category="editor-ide"
          url="https://github.com/ZachFranzen/Everforest"
        ></AppCard>
        <AppCard
          icon="icon-vs-code.svg"
          appName="VS Code"
          category="editor-ide"
          url="https://github.com/sainnhe/everforest-vscode"
        ></AppCard>
      </div>

      <h3>Terminal emulators</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-alacritty.svg"
          appName="Alacritty"
          category="terminal-emulator"
          url="https://gist.github.com/sainnhe/6432f83181c4520ea87b5211fed27950"
        ></AppCard>
        <AppCard
          icon="icon-gnome-terminal.svg"
          appName="Gnome Terminal"
          category="terminal-emulator"
          url="https://github.com/em3n/Everforest-GnomeTerminal"
        ></AppCard>
        <AppCard
          icon="icon-hyper.svg"
          appName="Hyper"
          category="terminal-emulator"
          url="https://github.com/tani/hyper-everforest"
        ></AppCard>
        <AppCard
          icon="icon-iterm2.svg"
          appName="iTerm2"
          category="terminal-emulator"
          url="https://github.com/icewind/everforest.iterm2"
        ></AppCard>
        <AppCard
          icon="icon-kitty.svg"
          appName="Kitty (medium dark)"
          category="terminal-emulator"
          url="https://gist.github.com/sophiabrandt/f013c5980b5f89cd068d8f7f47da2e1c"
        ></AppCard>
        <AppCard
          icon="icon-kitty.svg"
          appName="Kitty (medium light)"
          category="terminal-emulator"
          url="https://gist.github.com/sophiabrandt/da7ab58c3ac5e9283e98ba555329f535"
        ></AppCard>
        <AppCard
          icon="icon-konsole.svg"
          appName="Konsole"
          category="terminal-emulator"
          url="https://store.kde.org/c/1638326"
        ></AppCard>
        <AppCard
          icon="icon-wezterm.svg"
          appName="WezTerm"
          category="terminal-emulator"
          url="https://github.com/iambeingtracked/wezterm-everforest"
        ></AppCard>
        <AppCard
          icon="icon-windows-terminal.svg"
          appName="Windows Terminal"
          category="terminal-emulator"
          url="https://gist.github.com/suppayami/7d427d116b97564d1c565a7aed092d08"
        ></AppCard>
        <AppCard
          icon="icon-xfce4-terminal.svg"
          appName="xfce4-terminal"
          category="terminal-emulator"
          url="https://gist.github.com/anka4/0898df5af4537995e032cd5b8011b0d4"
        ></AppCard>
      </div>

      <h3>Other applications</h3>
      <div className="appsContainer">
        <AppCard
          icon="icon-alfred.svg"
          appName="Alfred"
          category="other"
          url="https://github.com/mhanberg/forest-night-alfred"
        ></AppCard>
        <AppCard
          icon="icon-element.svg"
          appName="Element"
          category="other"
          url="https://github.com/iambeingtracked/element-everforest"
        ></AppCard>
        <AppCard
          icon="icon-firefox.svg"
          appName="Firefox"
          category="other"
          url="https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/"
        ></AppCard>
        <AppCard
          icon="icon-gtk.svg"
          appName="GTK"
          category="other"
          url="https://github.com/Theory-of-Everything/everforest-gtk"
        ></AppCard>
        <AppCard
          icon="icon-kde.svg"
          appName="KDE"
          category="other"
          url="https://github.com/Serge2702/KDE-Everforest.git"
        ></AppCard>
        <AppCard
          icon="icon-obsidian.svg"
          appName="Obsidian"
          category="other"
          url="https://github.com/kepano/obsidian-minimal/releases/tag/5.2.8"
        ></AppCard>
        <AppCard
          icon="icon-slack.svg"
          appName="Slack"
          category="other"
          url="https://github.com/itendtostare/everforest-slack"
        ></AppCard>
        <AppCard
          icon="icon-xresources.svg"
          appName="Xresources"
          category="other"
          url="https://github.com/jef/forest-night-xresources"
        ></AppCard>
        <AppCard
          icon="icon-zathura.svg"
          appName="Zathura"
          category="other"
          url="https://github.com/iambeingtracked/zathura-everforest"
        ></AppCard>
        <AppCard
          icon="icon-zsh.svg"
          appName="Zsh"
          category="other"
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

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact={true} path="/" element={<HomePage />} />
          <Route path="apps" element={<AppsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
