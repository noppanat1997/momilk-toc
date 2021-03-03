import { useState } from "react";
import InputTape from "./components/InputTape";
import "./App.scoped.css";

function App() {
  const [input, setInput] = useState([
    { id: 1, text: "Size M" },
    { id: 2, text: "บราวนี่" },
    { id: 3, text: "กล้วย" },
    { id: 4, text: "หวานปกติ" },
    { id: 5, text: "คนละครึ่ง" },
  ]);

  async function addInput(data) {
    // console.log(data);
    const element = document.getElementById("scrollable-tape");
    await setInput([...input, { id: input.length + 1, text: data }]);
    var maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
  }

  return (
    <div className="page">
      <div className="state">{/* STATE HERE */}</div>
      <div className="tape-wrapper">
        <div className="tape">
          <InputTape data={input} setData={setInput} />
        </div>
      </div>
      <div className="display">{/* DISPLAY HERE */}</div>
      <div className="panel">{/* PANEL HERE */}</div>
      <button
        style={{ position: "absolute", bottom: "2rem", right: "2rem" }}
        onClick={() => addInput(`ทดสอบ ${input.length + 1}`)}
      >
        Add Stage
      </button>
    </div>
  );
}

export default App;
