// const heading = React.createElement("h1", { id: "heading" }, "Hello React!");

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm h2 tag"),
  ]),
]);

//JSX javascriptxml
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
