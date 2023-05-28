const toDoForm = document.querySelector("form#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("ul#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  // 버튼의 부모에 접근(li태크)
  const li = e.target.parentElement;
  // 삭제
  // filter로 로컬스토리지에서 가져온 toDos의 id와 누른 li의 id 같은 것을 제외하고
  // 다시 toDos 배열에 담아 로컬스토리지에 저장한다.
  toDos = toDos.filter((toDos) => toDos.id != Number(li.id));
  li.remove();

  saveToDos();
}

function paintToDo(newToDo) {
  const button = document.createElement("button");
  button.innerText = "❤";
  button.addEventListener("click", deleteToDo);
  // li 태그를 만듬
  const toDoLi = document.createElement("li");
  // list의 아이디를 줌
  toDoLi.id = newToDo.id;
  // span 태그를 만듬
  const toDoText = document.createElement("span");
  // li 태그 안에 span 태그를 넣음
  button.id = "deleteBtn";
  toDoLi.append(button);
  toDoLi.append(toDoText);
  // li 태그 안의 span 태그의 택스트에 newToDo 를 넣음
  toDoText.innerText = newToDo.text;
  // li 태그를 ul 태그 안에 넣음
  toDoList.append(toDoLi);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;

  // forEach 배열의 요소의 수 만큼 반복한다.
  // 파라미터로 item을 준다.
  parsedToDos.forEach(paintToDo);
}
