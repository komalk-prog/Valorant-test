let root = ReactDOM.createRoot(document.getElementById("root"));
console.log();
let heading1 = React.createElement(
  "h1",
  { id: "heading1", key: 123 },
  "heading1"
);
let heading2 = React.createElement("h2", { key: 456 }, "heading2");

let div = React.createElement("div", {}, [heading1, heading2]);

root.render(div);
