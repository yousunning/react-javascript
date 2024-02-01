import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App1";
/*
useEffect(()=>{})
Mount : 화면에 첫 렌더링
Update : 다시렌더링
UnMount : 화면에서 사라질때
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
