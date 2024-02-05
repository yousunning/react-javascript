import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.rander(<App />, rootElement); ---> 옛날방식

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // 현방식
