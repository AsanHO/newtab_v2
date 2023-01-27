const callender = document.querySelector(".callender");
const clock = document.querySelector(".clock");

function getclock() {
  const date = new Date(); // 전역함수 지정시 값이 고정되어버림, 함수안에 집어넣어야 값이 계속 변화함. 이유는 모른다.
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ); //노마드코더식 배열이 함수안에선 먹히지가 않음.
  const today = new Date().getDay();
  const todayLabel = week[today];

  // padstart는 string에서만 작동
  clock.innerText = `${hour}:${minute}:${second}`;
  callender.innerText = `${month}월 ${dates}일 ${todayLabel}`;
}

//setInterval(rp, 1000);
// 1초후 동작 반복
//setTimeout(rp, 1000);
// 1초후 동작 종료
getclock();
setInterval(getclock, 1000);
console.log(getclock);
