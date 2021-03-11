import { useState } from "react"
import InputTape from "./components/InputTape"
import Display from "./components/Display"
import StateChart from "./components/StateChart"
import Panel from "./components/Panel"
import cream from "./img/cream.png"
import "./App.scoped.css"

function App() {
  const [input, setInput] = useState(["ขนาดกลาง", "บราวนี่", "กล้วย", "หวานปกติ", "คนละครึ่ง"])

  async function addInput(text) {
    // console.log(text);
    const element = document.getElementById("scrollable-tape")
    await setInput([...input, text])
    var maxScrollLeft = element.scrollWidth - element.clientWidth
    element.scrollTo({ left: maxScrollLeft, behavior: "smooth" })
  }

  return (
    <div className="page">
      <img src={cream} alt="cream" className="cream" />
      <div className="state">
        <StateChart />
      </div>
      <div className="tape-wrapper">
        <div className="tape">
          <InputTape data={input} setData={setInput} />
        </div>
      </div>
      <div className="display">
        <Display size="s" topping="brownie" />
      </div>
      <div className="panel">
        <Panel addInput={addInput} />
      </div>
      {/* <button
        style={{ position: "absolute", bottom: "2rem", right: "2rem" }}
        onClick={() => addInput(`ทดสอบ ${input.length + 1}`)}
      >
        Add Stage
      </button> */}
    </div>
  )
}

export default App
