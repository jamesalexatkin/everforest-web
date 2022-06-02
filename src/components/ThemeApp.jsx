import "../styles/Base.css";
import "../styles/ThemeApp.css";

function ThemeApp(props) {
  return (
    <div className="ThemeApp">
      <img className="appIcon" src={props.icon}></img>
      <p className="appName">{props.appName}</p>
    </div>
  );
}

export default ThemeApp;