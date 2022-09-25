import "../styles/Base.css";
import "../styles/Intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="Intro">
      <h1>A green-based color palette.</h1>
      <p>
        Designed by&nbsp;
        <a href="https://github.com/sainnhe/everforest" target="_blank">
          Sainnhe Park
        </a>
        &nbsp;to be warm and soft to protect developers' eyes.
      </p>
      <Link className="IntroButton" to="/apps">
        Apps
      </Link>
    </div>
  );
}

export default Intro;
