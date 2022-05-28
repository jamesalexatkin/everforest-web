import "../colors.css";

function squareStyle(color) {
  return {
    width: "50px",
    height: "50px",
    background: color,
  };
}

function Square(props) {
  return <div className="Square" style={squareStyle(props.color)}></div>;
}

function ColorBox(props) {
  return (
    <div className="ColorBox">
      <Square color={props.color}></Square>
      <p>{props.color}</p>
    </div>
  );
}

function Palette() {
  return (
    <div className="Palette">
      <ColorBox color="#2b3339"></ColorBox>
      <ColorBox color="#323c41"></ColorBox>
    </div>
  );
}

export default Palette;
