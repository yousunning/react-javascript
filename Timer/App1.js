import React, { useEffect, useState } from "react";
import Timer from "./Timer";
/*

useEffect(()=>{
//작업코드
},[value]) //종속배열(dependency Array) 화면에 첫렌더링, 벨류 값이 바뀔때 실행

종속배열 없으면 매번 렌더링 된다.

// Clean Up -정리 
useEffect(()=>{}, []);
  //구독
  return() => {
    구독해지로직 코드
  }
*/
function App1() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App1;
