import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import useForceUpdate from "./hooks/useForceUpdate"
import InputTape from "./components/InputTape"
import Display from "./components/Display"
import StateChart from "./components/StateChart"
import Panel from "./components/Panel"
import cream from "./img/cream.png"
import "./App.scoped.css"
import { Modal } from "./components/Modal"

function App() {
  const history = useHistory()
  const modal = Modal.useModal()
  const { key, forceUpdate } = useForceUpdate()
  const { key: panelKey, forceUpdate: forcePanelUpdate } = useForceUpdate()
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
    forcePanelUpdate()
  }

  function updateQueryString(key, value) {
    if (display.end) return history.push(`/state?current=trap`)
    if (key === "end") return history.push(`/state?current=end`)

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

  useEffect(() => {
    forceUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display])

  return (
    <div className="page">
      <img src={cream} alt="cream" className="cream" />
      <div className="state">
        <div className="cp" onClick={modal.open} />
        <StateChart key={key} />
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
          key={panelKey}
          addInput={addInput}
          display={display}
          setDisplay={setDisplay}
          updateQueryString={updateQueryString}
        />
      </div>
      <button className="member" onClick={modal.open}>
        รายชื่อสมาชิก
      </button>
      <Modal modal={modal}>
        <h1 style={{ marginBottom: "1.25rem" }}>รายชื่อสมาชิก</h1>
        <table className="member-list">
          <tbody>
            <tr>
              <td style={{ paddingRight: "1rem" }}>61010193</td>{" "}
              <td style={{ paddingRight: "1rem" }}>นายชนัสพงศ์</td>{" "}
              <td style={{ paddingRight: "1rem" }}>พรหมสินธุ์</td>
            </tr>
            <tr>
              <td style={{ paddingRight: "1rem" }}>61010416</td>{" "}
              <td style={{ paddingRight: "1rem" }}>นายธนกฤต</td>{" "}
              <td style={{ paddingRight: "1rem" }}>เจริญบูลย์วิวัฒน์</td>
            </tr>
            <tr>
              <td style={{ paddingRight: "1rem" }}>61010479</td>{" "}
              <td style={{ paddingRight: "1rem" }}>นางสาวธมน</td>{" "}
              <td style={{ paddingRight: "1rem" }}>เนตรวิเชียร</td>
            </tr>
            <tr>
              <td style={{ paddingRight: "1rem" }}>61010497</td>{" "}
              <td style={{ paddingRight: "1rem" }}>นายธัญธร</td>{" "}
              <td style={{ paddingRight: "1rem" }}>พรสวัสดิ์ชัย</td>
            </tr>
            <tr>
              <td style={{ marginRight: ".5rem" }}>61010541</td>{" "}
              <td style={{ marginRight: ".5rem" }}>นายนพณัฐ</td>{" "}
              <td style={{ marginRight: ".5rem" }}>พันลุตัน</td>
            </tr>
            <tr>
              <td style={{ marginRight: ".5rem" }}>61010750</td>{" "}
              <td style={{ marginRight: ".5rem" }}>นายพิพิธพงศ์</td>{" "}
              <td style={{ marginRight: ".5rem" }}>จิตภักดิ์ไทย</td>
            </tr>
            <tr>
              <td style={{ marginRight: ".5rem" }}>61011387</td>{" "}
              <td style={{ marginRight: ".5rem" }}>นายธนภัทร</td>{" "}
              <td style={{ marginRight: ".5rem" }}>ด่านพัฒนชัยกุล</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  )
}

export default App
