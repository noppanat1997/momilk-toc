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

  const setSize = (size) => setDisplay((d) => ({ ...d, size }))
  const setTopping = (topping) => setDisplay((d) => ({ ...d, topping }))
  const setMilk = (milk) => setDisplay((d) => ({ ...d, milk }))

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
        <Display size={display.size} topping={display.topping} />
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
