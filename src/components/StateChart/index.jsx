import React from "react"
import { ReactDiagram } from "gojs-react"
//configs
import { initDiagram } from "./initDiagram"
//css
import "./stateChart.css"
//constants
import { INITIAL_STATE_DATA } from "../../constants/stateData"

function StateChart() {
  const [nodeData, setNodeData] = React.useState(
    INITIAL_STATE_DATA.nodeDataArray
  )
  const [linkData, setLinkData] = React.useState(
    INITIAL_STATE_DATA.linkDataArray
  )

  return (
    <div className="diagram-wrapper">
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram"
        style={{ width: "100%", height: "100%" }}
        nodeDataArray={nodeData}
        linkDataArray={linkData}
      />
    </div>
  )
}

export default StateChart
