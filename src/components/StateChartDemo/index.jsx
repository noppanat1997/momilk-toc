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
    'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
    layout: new go.ForceDirectedLayout(),
    'draggingTool.isEnabled': false,
    model: $(go.GraphLinksModel, {
      linkKeyProperty: 'key', // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    }),
  });

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    'Auto', // the Shape will go around the TextBlock
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
      { margin: 8, editable: true }, // some room around the text
      new go.Binding('text').makeTwoWay(),
    ),
  );

  diagram.linkTemplate = $(
    go.Link, // the whole link panel
    {
      curve: go.Link.Bezier,
      adjusting: go.Link.Stretch,
      reshapable: true,
      relinkableFrom: true,
      relinkableTo: true,
      toShortLength: 3,
    },
    new go.Binding('points').makeTwoWay(),
    new go.Binding('curviness'),
    $(
      go.Shape, // the link shape
      { strokeWidth: 1.5 },
      new go.Binding('stroke', 'progress', function(progress) {
        return progress ? '#52ce60' /* green */ : 'black';
      }),
      new go.Binding('strokeWidth', 'progress', function(progress) {
        return progress ? 2.5 : 1.5;
      }),
    ),
    $(
      go.Shape, // the arrowhead
      { toArrow: 'standard', stroke: null },
      new go.Binding('fill', 'progress', function(progress) {
        return progress ? '#52ce60' /* green */ : 'black';
      }),
    ),
    $(
      go.Panel,
      'Auto',
      $(
        go.Shape, // the label background, which becomes transparent around the edges
        {
          fill: $(go.Brush, 'Radial', {
            0: 'rgb(245, 245, 245)',
            0.7: 'rgb(245, 245, 245)',
            1: 'rgba(245, 245, 245, 0)',
          }),
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
          editable: true, // enable in-place editing
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
          { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
          { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
          { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
          { key: 3, text: 'Delta', color: 'pink', loc: '150 150' },
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1, progress: 'true', text: 'Browse' },
          { key: -2, from: 0, to: 2, progress: 'true', text: 'Browse' },
          { key: -3, from: 1, to: 1, progress: 'true', text: 'Browse' },
          { key: -4, from: 2, to: 3, progress: 'true', text: 'Browse' },
          { key: -5, from: 3, to: 0, progress: 'true', text: 'Browse' },
        ]}
        // onModelChange={handleModelChange}
      />
    </div>
  );
}

export default StateChartDemo;
