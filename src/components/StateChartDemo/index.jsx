import React from 'react';

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import './stateChartDemo.css'; // contains .diagram-component CSS

const data = {
  className: 'go.GraphLinksModel',
  nodeKeyProperty: 'id',
  nodeDataArray: [
    { id: -1, loc: '155 -138', category: 'Start' },
    { id: 0, loc: '190 15', text: 'Shopping' },
    { id: 1, loc: '353 32', text: 'Browse Items' },
    { id: 2, loc: '353 166', text: 'Search Items' },
    { id: 3, loc: '512 12', text: 'View Item' },
    { id: 4, loc: '661 17', text: 'View Cart' },
    { id: 5, loc: '644 171', text: 'Update Cart' },
    { id: 6, loc: '800 96', text: 'Checkout' },
    { id: -2, loc: '757 229', category: 'End' },
  ],
  linkDataArray: [
    { from: -1, to: 0, text: 'Visit online store' },
    { from: 0, to: 1, progress: 'true', text: 'Browse' },
    { from: 0, to: 2, progress: 'true', text: 'Use search bar' },
    { from: 1, to: 2, progress: 'true', text: 'Use search bar' },
    { from: 2, to: 3, progress: 'true', text: 'Click item' },
    { from: 2, to: 2, text: 'Another search', curviness: 20 },
    { from: 1, to: 3, progress: 'true', text: 'Click item' },
    { from: 3, to: 0, text: 'Not interested', curviness: -100 },
    { from: 3, to: 4, progress: 'true', text: 'Add to cart' },
    { from: 4, to: 0, text: 'More shopping', curviness: -150 },
    { from: 4, to: 5, text: 'Update needed', curviness: -50 },
    { from: 5, to: 4, text: 'Update made' },
    { from: 4, to: 6, progress: 'true', text: 'Proceed' },
    { from: 6, to: 5, text: 'Update needed' },
    { from: 6, to: -2, progress: 'true', text: 'Purchase made' },
  ],
};

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, {
    // start everything in the middle of the viewport
    initialContentAlignment: go.Spot.Center,
    initialAutoScale: go.Diagram.Uniform,
    'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
    layout: new go.ForceDirectedLayout(),
    'draggingTool.isEnabled': false,
    model: $(go.GraphLinksModel, {
      linkKeyProperty: 'key', // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    }),
    allowCopy: false,
    allowDelete: false,
    allowSelect: false,
    allowLink: false,
  });

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    'Auto', // the Shape will go around the TextBlock
    { locationSpot: go.Spot.Center },
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
      go.Point.stringify,
    ),
    $(
      go.Shape,
      'RoundedRectangle',
      { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding('fill', 'color'),
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: false, overflow: go.TextBlock.OverflowClip }, // some room around the text
      new go.Binding('text').makeTwoWay(),
    ),
  );

  diagram.nodeTemplateMap.add(
    'Start',
    $(
      go.Node,
      'Spot',
      { desiredSize: new go.Size(75, 75) },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
        go.Point.stringify,
      ),
      $(go.Shape, 'Circle', {
        fill: '#52ce60' /* green */,
        stroke: null,
        portId: '',
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: 'pointer',
      }),
      $(go.TextBlock, 'Start', {
        font: 'bold 16pt helvetica, bold arial, sans-serif',
        stroke: 'whitesmoke',
      }),
    ),
  );

  diagram.nodeTemplateMap.add(
    'End',
    $(
      go.Node,
      'Spot',
      { desiredSize: new go.Size(75, 75) },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
        go.Point.stringify,
      ),
      $(go.Shape, 'Circle', {
        fill: 'maroon',
        stroke: null,
        portId: '',
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
        cursor: 'pointer',
      }),
      $(go.Shape, 'Circle', {
        fill: null,
        desiredSize: new go.Size(65, 65),
        strokeWidth: 2,
        stroke: 'whitesmoke',
      }),
      $(go.TextBlock, 'End', {
        font: 'bold 16pt helvetica, bold arial, sans-serif',
        stroke: 'whitesmoke',
      }),
    ),
  );

  diagram.linkTemplate = $(
    go.Link, // the whole link panel
    {
      adjusting: go.Link.Stretch,
      reshapable: false,
      relinkableFrom: false,
      relinkableTo: false,
      toShortLength: 3,
      curve: go.Link.JumpOver,
    },
    new go.Binding('points').makeTwoWay(),
    new go.Binding('curviness'),
    $(
      go.Shape, // the link shape
      { strokeWidth: 3 },
      new go.Binding('stroke', 'color'),
    ),
    $(
      go.Shape, // the arrowhead
      { toArrow: 'standard', stroke: null },
      new go.Binding('fill', 'color'),
    ),
    $(
      go.Panel,
      'Auto',
      $(
        go.Shape, // the label background, which becomes transparent around the edges
        {
          fill: 'white',
          stroke: null,
        },
      ),
      $(
        go.TextBlock,
        'transition', // the label text
        {
          textAlign: 'center',
          font: '9pt helvetica, arial, sans-serif',
          margin: 4,
          editable: false, // enable in-place editing
        },
        // editing the text automatically updates the model data
        new go.Binding('text').makeTwoWay(),
      ),
    ),
  );

  return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
// function handleModelChange(changes) {
//   alert('GoJS model changed!');
// }

// render function...
function StateChartDemo() {
  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={[
          {
            key: 0,
            text: 'This sample\n showcases\n all predefined',
            color: 'lightblue',
            loc: '0 0',
            category: 'Start',
          },
          { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
          // { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
          // { key: 3, text: 'Delta', color: 'pink', loc: '150 150' },
          // {
          //   key: 4,
          //   text: 'This sample\n showcases\n all predefined',
          //   color: 'lightblue',
          //   loc: '0 0',
          //   category: 'End',
          // },
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1, color: 'red', text: 'Browse' },
          // { key: -2, from: 0, to: 2, color: 'black', text: 'Browse' },
          // { key: -3, from: 1, to: 1, color: 'green', text: 'Browse' },
          // { key: -4, from: 2, to: 3, color: 'green', text: 'Browse' },
          // { key: -5, from: 3, to: 4, color: 'red', text: 'Use search bar' },
        ]}
        // onModelChange={handleModelChange}
      />
    </div>
  );
}

export default StateChartDemo;
