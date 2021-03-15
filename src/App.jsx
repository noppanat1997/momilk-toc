import { useState } from "react"
import InputTape from "./components/InputTape"
import Display from "./components/Display"
import StateChart from "./components/StateChart"
import Panel from "./components/Panel"
import cream from "./img/cream.png"
import "./App.scoped.css"

function App() {
  const [input, setInput] = useState([])
  const [display, setDisplay] = useState({})

  async function addInput(text) {
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
          <InputTape data={input} setData={setInput} onReset={() => setDisplay({})} />
        </div>
      </div>
      <div className="display">
        <Display size={display.size} topping={display.topping} milk={display.milk} />
      </div>
      <div className="panel">
        <Panel addInput={addInput} display={display} setDisplay={setDisplay} />
      </div>
    </div>
  )
}

export default App
