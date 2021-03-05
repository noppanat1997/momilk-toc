import * as go from "gojs"

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
export function initDiagram() {
  const $ = go.GraphObject.make
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, {
    // start everything in the middle of the viewport
    initialContentAlignment: go.Spot.Center,
    initialAutoScale: go.Diagram.Uniform,
    "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
    "draggingTool.isEnabled": false,
    model: $(go.GraphLinksModel, {
      linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    }),
    allowCopy: false,
    allowDelete: false,
    allowSelect: false,
    allowLink: false,
  })

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    "Auto", // the Shape will go around the TextBlock
    { locationSpot: go.Spot.Center },
    { desiredSize: new go.Size(80, 80) },
    new go.Binding("location", "loc", go.Point.parse),
    $(
      go.Shape,
      "Circle",
      { name: "SHAPE", fill: "white", strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "fill")
    ),
    $(
      go.TextBlock,
      {
        font: "9pt Prompt, arial, sans-serif",
      },
      { editable: false, overflow: go.TextBlock.OverflowClip }, // some room around the text
      new go.Binding("stroke", "color"),
      new go.Binding("text").makeTwoWay()
    )
  )

  diagram.nodeTemplateMap.add(
    "Start",
    $(
      go.Node,
      "Spot",
      { locationSpot: go.Spot.Center },
      { desiredSize: new go.Size(75, 75) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      $(
        go.Shape,
        "Circle",
        {
          stroke: null,
          portId: "",
          fromLinkable: true,
          fromLinkableSelfNode: true,
          fromLinkableDuplicates: true,
          toLinkable: true,
          toLinkableSelfNode: true,
          toLinkableDuplicates: true,
          cursor: "pointer",
        },
        new go.Binding("fill", "fill")
      ),
      $(
        go.TextBlock,
        "Start",
        {
          font: "bold 16pt Prompt, bold arial, sans-serif",
        },
        new go.Binding("stroke", "color")
      )
    )
  )

  diagram.nodeTemplateMap.add(
    "End",
    $(
      go.Node,
      "Spot",
      { locationSpot: go.Spot.Center },
      { desiredSize: new go.Size(75, 75) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      $(
        go.Shape,
        "Circle",
        {
          stroke: null,
          portId: "",
          fromLinkable: true,
          fromLinkableSelfNode: true,
          fromLinkableDuplicates: true,
          toLinkable: true,
          toLinkableSelfNode: true,
          toLinkableDuplicates: true,
          cursor: "pointer",
        },
        new go.Binding("fill", "fill")
      ),
      $(
        go.TextBlock,
        "End",
        {
          font: "bold 16pt Prompt, bold arial, sans-serif",
        },
        new go.Binding("stroke", "color")
      )
    )
  )

  diagram.linkTemplate = $(
    go.Link, // the whole link panel
    new go.Binding("points").makeTwoWay(),
    $(
      go.Shape, // the link shape
      { strokeWidth: 3 },
      new go.Binding("stroke", "color")
    ),
    $(
      go.Shape, // the arrowhead
      { toArrow: "standard", stroke: null },
      new go.Binding("fill", "color")
    )
  )

  return diagram
}