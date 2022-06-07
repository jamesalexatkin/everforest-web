import "../styles/Base.css";
import "../styles/AppCard.css";

function AppCard(props) {
  return (
    <div className="app-card-outer">
      <a href={props.url}>
        <div className="app-card-inner">
          <img className="app-icon" src={props.icon}></img>
          <p className="app-name">{props.appName}</p>
        </div>
      </a>
    </div>
  );
}

export default AppCard;
