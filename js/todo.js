const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("ul#todo-list");

function deleteToDo(e) {
  // 버튼의 부모에 접근(li태크)
  const li = e.target.parentElement;
  // 삭제.
  li.remove();
}

function paintToDo(newToDo) {
  const button = document.createElement("button");
  button.innerText = "❤";
  button.addEventListener("click", deleteToDo);
  // li 태그를 만듬
  const toDoLi = document.createElement("li");
  // span 태그를 만듬
  const toDoText = document.createElement("span");
  // li 태그 안에 span 태그를 넣음
  toDoLi.append(toDoText);
  toDoLi.append(button);
  // li 태그 안의 span 태그의 택스트에 newToDo 를 넣음
  toDoText.innerText = newToDo;
  // li 태그를 ul 태그 안에 넣음
  toDoList.append(toDoLi);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
