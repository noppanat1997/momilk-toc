import { useEffect, useState, useCallback } from "react"
import { ReactDiagram } from "gojs-react"
import queryString from "query-string"
import { useLocation } from "react-router-dom"
import * as go from "gojs"
//configs
import { initDiagram } from "./initDiagram"
//css
import "./stateChart.css"
//constants
import { INITIAL_STATE_DATA } from "../../constants/stateData"
import useForceUpdate from "../../hooks/useForceUpdate"

function StateChart() {
  const { key, forceUpdate } = useForceUpdate()
  const location = useLocation()
  const [nodeData, setNodeData] = useState(INITIAL_STATE_DATA.nodeDataArray)
  const [linkData, setLinkData] = useState(INITIAL_STATE_DATA.linkDataArray)
  const [focusKey, setFocusKey] = useState(0)

  const diagramRef = useCallback(
    (element) => {
      if (element === null) return
      const diagram = element.getDiagram()
      if (diagram instanceof go.Diagram) {
        diagram.addDiagramListener("InitialLayoutCompleted", () => {
          // find the corresponding Node
          const data = diagram.findNodeForKey(focusKey)
          // and center it and select it
          diagram.centerRect(data.actualBounds)
          diagram.select(data)
        })
      }
    },
    [focusKey]
  )

  useEffect(() => {
    const queryObject = queryString.parse(location.search) || {}
    if (Object.keys(queryObject).length > 0) {
      updatedNodeDataHandler(queryObject)
    } else {
      setNodeData(INITIAL_STATE_DATA.nodeDataArray)
      const updatedInitialLinkHighlight = INITIAL_STATE_DATA.linkDataArray
      updatedInitialLinkHighlight[0].color = "DimGrey"
      setLinkData(updatedInitialLinkHighlight)
    }

    forceUpdate()
  }, [location.search])

  const updatedNodeDataHandler = (queryObject) => {
    Object.keys(queryObject).forEach((key) => {
      const updatedNodeData = INITIAL_STATE_DATA.nodeDataArray.map((node) => {
        /**
         * found node value equal to query
         */
        if (node.value === queryObject[key]) {
          const updatedLinkData = INITIAL_STATE_DATA.linkDataArray.map((link) => {
            if (link.from === node.key) {
              return {
                ...link,
                color: "DimGrey",
                visible: true,
                zOrder: 99,
              }
            } else {
              return link
            }
          })

          updatedLinkData[0].color = "white"
          setLinkData(updatedLinkData)

          setFocusKey(node.key)

          return {
            ...node,
            fill: "#42929D",
          }
        } else {
          return node
        }
      })
      setNodeData(updatedNodeData)
    })
  }

  return (
    <div key={key} className="diagram-wrapper">
      <ReactDiagram
        ref={diagramRef}
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
