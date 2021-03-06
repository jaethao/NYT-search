// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
var Main = require("./components/Index.jsx");

// This code here allows us to render our main component (in this case Main)
// Note that the Id is "app" which matches that of the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));
