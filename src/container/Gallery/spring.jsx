import React from "react";
import ReactDOM from "react-dom";
import { Gallery } from "./Gallery-3D";

function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
