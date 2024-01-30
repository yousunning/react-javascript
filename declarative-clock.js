//선언 변경관리 편하도록 ?
const oneSecond = () => 1000; // 초
const getCurrentTime = () => new Date(); //시간 돌려주는 함수
const clear = () => console.clear(); // 콘솔 지워주는 함수
const log = (message) => console.log(message); // 메시지 데이터 출렭

const abstractClockTime = (date) => ({
  // 날짜 정보를 시간으로 직렬화 시키는 함수
  hours: date.getHours(), // getHours() 사용하여 hours 필드 만들기
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilianHours = (clockTime) => ({
  // clockTime을 객체로 받아서
  ...clockTime, //새로운 객체 타입으로 받는다 //객체구조분해
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
}); //clockTime 타입에서 hours 업데이트 시켜주는 함수 적용 , 업데이트 시간 정보

const appendAMPM = (clockTime) => ({
  //clockTime 객체를 받아서
  ...clockTime, // 객체 전개해서
  ampm: clockTime.hours >= 12 ? "PM" : "AM", // clockTime가 12보다 크거나 같으면 pm아니면 am
});

const display = (target) => (time) => target(time); //콘솔에 타임이 찍히도록 타겟함수?

const formatClock = (format) => (
  time //format을 파라미터로 받아서 replace함수 사용.
) =>
  format
    .replace("hh", time.hours) // replace함수 사용하여 표기선언
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
  //hours minutes seconds ampm [키] 값들을 받아서
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key], // 10보다 작으면 앞에다 0을 붙여주는 표기 선언
}); // 한자리 수를 두자리 수를 만들어주는 구문

// 배열처리
const compose = (...fns) => (
  arg // 함수들을 받아다가 배열로 만들어주는 부분
) => fns.reduce((composed, f) => f(composed), arg); //배열.reduce((파라미터로, 하나씩 ))=>하나씩(결과값인자값 , arg)
// 콜백지옥하지않고 comepose로 지정한 것들만 ?

const convertToCivilianTime = (
  clockTime //시간을 컴포즈 함수로 호출하는 구문 / 즉시실행 함수처럼 사용함
) => compose(appendAMPM, civilianHours)(clockTime); //시분초 필드 추가 / civilianHours 두자리로 바꾸는 변수 가져오기

const doubleDigits = (civilianTime) =>
  compose(
    // 시분포를 두자리수로 바꿔주는 함수 / 미리 만들어 놓은 civilianTime으로 compose agument 하여 받기
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds") //prependZero 함수
  )(civilianTime);

const startTicking = () =>
  setInterval(
    // 콜백함수 틀
    compose(
      // 콜백함수 만들기
      clear,
      getCurrentTime, // 시간 가져오고
      abstractClockTime, // 직렬화만드는거 호출
      convertToCivilianTime, // 상용시?
      doubleDigits, // 두자리로 만드는 거 가져오고
      formatClock("hh:mm:ss tt"), // 요로케 만들거 가져오고
      display(log) // 인자 넘겨서 콘솔에 찍을 수 있게끔 만들어주고
    ),
    oneSecond() // 지연시간
  );

startTicking(); // 마지막으로 함수 호출
