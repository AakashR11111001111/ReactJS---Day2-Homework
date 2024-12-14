var root = document.querySelector("#root");
var rootDiv = ReactDOM.createRoot(root);
const h1 = React.createElement("h1",{},"Topics Covered");
const p1 = React.createElement("p",{},"The Following is the List of all the topics we cover in the MDN learning area.");
const a1 = React.createElement("a",{href : "#"},"Getting started with the web");
const p2 = React.createElement("p",{},"Provides a practical introduction to web development for complete beginner.");
const a2 = React.createElement("a",{href: "#"},"HTML - Structuring the web");
const p3 = React.createElement("p",{},"HTML is the language that we use to structure the different part of our content and define what their meaning and purpose is. This topic teaches HTML in details.");
const a3 = React.createElement("a",{href: "#"},"CSS - Styling the web");
const p4 = React.createElement("p",{},"CSS is the language that we use to control our web content's style and layout , as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS");

const parent = React.createElement("div",{},h1,p1,a1,p2,a2,p3,a3,p4);
rootDiv.render(parent);