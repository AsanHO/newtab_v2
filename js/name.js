const name = document.querySelector(".name");
const greeting = document.querySelector(".greeting");
const loginForm = document.querySelector(".loginForm");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  //preventDefault() : 디폴트르 적용 되는 행동들을 멈춤
  //지금은 사라졌지만 블루보틀 위치에서 관서와 관동지방을 변경할때 필요할 것 같다.
  const userName = name.value;
  localStorage.setItem(USERNAME_KEY, userName);
  //``백틱 기호 사용 ${변수명}
}
//
loginForm.addEventListener("submit", onSubmit);
//onsubmit()를 작성하면, 즉시실행이 된다 10줄은 summit 이벤트 발생시 함수 작동

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser === null) {
  //form 1 greeting 0
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
} else {
  //form 0 greeting 1
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `welcome, ${savedUser}`;
}
