const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoInput");
const toDoList = document.querySelector(".toDoList");
//로컬리스트 전용 상수
let toDos = [];
const TODOS_KEY = "todos";
//엔터를 누를때
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

//투두리스트 생성
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  btn.innerText = "❌";
  btn.style.backgroundColor = "rgba(255, 255, 255, 0)";
  btn.style.border = "none";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  //appendchild는 무조건 아래에 있어야함 룰
}
//투두리스트 삭제 & 로컬리스트 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //투두리스트 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //로컬리스트 삭제
  saveToDos();
}
//생성시 로컬리스트에도 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//생성된 로컬리스트를 다시 디스플레이
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  //savedToDos가 null이 아니라면
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}
