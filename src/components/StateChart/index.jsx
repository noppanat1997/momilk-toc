import { useEffect, useState } from "react"
import { ReactDiagram } from "gojs-react"
import queryString from "query-string"
import { useLocation } from "react-router-dom"
//configs
import { initDiagram } from "./initDiagram"
//css
import "./stateChart.css"
//constants
import { INITIAL_STATE_DATA } from "../../constants/stateData"
import useForceUpdate from "./useForceUpdate"

function StateChart() {
  const { key, forceUpdate } = useForceUpdate()
  const location = useLocation()
  const [nodeData, setNodeData] = useState(INITIAL_STATE_DATA.nodeDataArray)
  const [linkData, setLinkData] = useState(INITIAL_STATE_DATA.linkDataArray)

  useEffect(() => {
    console.log(queryString.parse(location.search))
    const queryObject = queryString.parse(location.search)
    if (Object.keys(queryObject).length > 0) {
      updatedNodeDataHandler(queryObject)
    } else {
      setNodeData(INITIAL_STATE_DATA.nodeDataArray)
    }

    forceUpdate()
  }, [location.search])

  const updatedNodeDataHandler = (queryObject) => {
    if (queryObject.size) {
      const updatedNodeData = INITIAL_STATE_DATA.nodeDataArray.map((node) => {
        if (node.layer === "size") {
          if (node.value === queryObject.size)
            return {
              ...node,
              fill: "Crimson",
            }
        }
        return node
      })
      setNodeData(updatedNodeData)
    }
  }

  return (
    <div key={key} className="diagram-wrapper">
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
