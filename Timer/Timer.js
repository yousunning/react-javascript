import React, { useEffect } from "react";
//()=>{}
const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 총총,,");
    }, 1000);
    return () => {
      //언마운트 될때
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  return (
    <div>
      <span>타이머 시작합니다. 콘솔을 보세요.</span>
    </div>
  );
};
export default Timer;
