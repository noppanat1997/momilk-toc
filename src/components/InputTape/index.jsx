import "./InputTape.scoped.css";

function InputTape({ input }) {
  return (
    <div className="tape">
      <p>{input.text}</p>
      <button className="remove">X</button>
    </div>
  );
}

export default InputTape;
