import "../styles/Palette.css";

function squareStyle(color, left, right) {
  return {
    background: color,
    "border-top-left-radius": left === true ? "16px" : 0,
    "border-bottom-left-radius": left === true ? "16px" : 0,
    "border-top-right-radius": right === true ? "16px" : 0,
    "border-bottom-right-radius": right === true ? "16px" : 0,
  };
}

function Square(props) {
  return (
    <div
      className="Square"
      style={squareStyle(props.color, props.left, props.right)}
    ></div>
  );
}

function ColorBox(props) {
  return (
    <div className="ColorBox">
      <Square
        color={props.color}
        left={props.left}
        right={props.right}
      ></Square>
      <p>{props.color}</p>
    </div>
  );
}

function Palette(props) {
  var colors = props.colors;
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }

  return (
    <div className="Palette">
      {colors.map((colorV, index) => (
        <ColorBox
          key={colorV}
          color={colorV}
          left={index === 0}
          right={index === colors.length - 1}
        />
      ))}
    </div>
  );
}

export default Palette;
