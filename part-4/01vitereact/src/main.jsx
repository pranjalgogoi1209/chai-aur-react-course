import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function CustomApp() {
  return (
    <>
      <h1>This is Custom App using vite + react</h1>
    </>
  );
}

/* const ReactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to visit google"
} */
// it will not work may be react want some different key name

const AnotherElement = <h1>I am h1 element</h1>;

const name = "Pranjal Gogoi";

const NewElement = React.createElement(
  "a", // element
  { href: "https://google.com", target: "_blank" }, // object of attributes
  "Click Me To Visit Google : New Element--", // content / typography
  name
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // CustomApp()
  // We can write it like function calling

  // <CustomApp/>
  // react parse the function to object

  // AnotherElement

  NewElement

  // <App/>
);
