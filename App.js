import React, { useEffect, useState } from "react";
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
function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState();

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // //렌더링 될때마다 실행
  // useEffect(() => {
  //   console.log("렌더링!!");
  // });

  // //state 바뀔 때마다 실행
  // useEffect(() => {
  //   console.log("count 렌더링!!");
  // }, [count]);

  // useEffect(() => {
  //   console.log("name 렌더링!!");
  // }, [name]);

  // //마운트 될때만 실행 시키고 싶다?
  // useEffect(() => {
  //   console.log("마운팅");
  // }, []);
  return (
    <div>
      <button onClick={handleCountUpdate}>업뎃</button>
      <span>count : {count} </span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <br />
      <span>name :{name}</span>
    </div>
  );
}

export default App;
