import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import useForceUpdate from "./hooks/useForceUpdate"
import InputTape from "./components/InputTape"
import Display from "./components/Display"
import StateChart from "./components/StateChart"
import Panel from "./components/Panel"
import cream from "./img/cream.png"
import "./App.scoped.css"

function App() {
  const history = useHistory()
  const { key, forceUpdate } = useForceUpdate()
  const [input, setInput] = useState([])

  const DEFAULT = { size: "", topping: "", milk: "" }
  const [display, setDisplay] = useState(DEFAULT)

  async function addInput(text) {
    const element = document.getElementById("scrollable-tape")
    await setInput([...input, text])
    var maxScrollLeft = element.scrollWidth - element.clientWidth
    element.scrollTo({ left: maxScrollLeft, behavior: "smooth" })
  }

  function resetState() {
    setDisplay(DEFAULT)
    history.push("/state?current=start")
    forceUpdate()
  }

  function updateQueryString(key, value) {
    if (display.end) return history.push(`/state?current=trap`)

    const { size, topping, milk } = display
    const sizeQuery = key === "size" ? value : size
    const toppingQuery = key === "topping" ? value : topping
    const milkQuery = key === "milk" ? value : milk
    const queryArray = [sizeQuery, toppingQuery, milkQuery]
    const query = queryArray.filter((q) => q.length).join("_")

    history.push(`/state?current=${query}`)
  }

  useEffect(() => {
    history.push("/state?current=start")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="page">
      <img src={cream} alt="cream" className="cream" />
      <div className="state">
        <StateChart />
      </div>
      <div className="tape-wrapper">
        <div className="tape">
          <InputTape data={input} setData={setInput} onReset={resetState} />
        </div>
      </div>
      <div className="display">
        <Display size={display.size} topping={display.topping} milk={display.milk} />
      </div>
      <div className="panel">
        <Panel
          key={key}
          addInput={addInput}
          display={display}
          setDisplay={setDisplay}
          updateQueryString={updateQueryString}
        />
      </div>
    </div>
  )
}

export default App
