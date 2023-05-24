// id 선택
// const title = document.getElementById("title");
// title.innerText = "Got you!";

// class 선택
// const title = document.getElementsByClassName("hello");
//console.log(title);

// tag 선택
// const title = document.getElementsByTagName("h1");
// console.log(title);

// 좋음 이거 쓰셈 document.querySelector(".hello");
// const title = document.querySelector(".hello h1");
// console.log(title);

// const h1 = document.querySelector("div.hello:first-child h1");

// 이벤트 리스너 클릭
// js로 css color 토글
/*
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;
}
*/

// html 변경은 JS로!
// style 변경은 CSS로!

// function handleTitleClick() {
// "active" 같은 raw string 을 사용하는 대신
// const 를 만들어 사용하는 것이 좋음
// const clickedClass = "active";
/*
    // h1 class 에 clickedClass 가 포함되어 있는가?
    if (h1.className.contains(clickedClass)) {
      // h1.className = ""; 는 모든 class를 변경 해버림
      // h1 class 에 clickedClass 를 제거한다.
      h1.classList.remove(clickedClass);
    } else {
      // h1.className = clickedClass;
      // h1 class 에 clickedClass 를 추가한다.
      h1.classList.add(clickedClass);
    }
  */

// 이 한 줄로 정리된다!
// h1.classList.toggle(clickedClass);
// }

// click 이벤트가 발생했을 때 뒤에 함수 실행 / 함수엔 () 괄호 넣으면 안됨! (콜백함수이기 때문)
// h1.addEventListener("click", handleTitleClick);
// or
// h1.onclick = handleTitleClick;

////////////////////////////////////////////////////////////////////////////////

// const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  // JS에서 유효성 검사를 하는건 하면 안되는 짓임
  /*
  const value = loginInput.value;
  // required
  if (value == "") { 
    alert("Please write your name!");
  } 
  // maxlength
  else if (value.length > 15) {
    alert("Your name is too long");
  }
  */

  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", handleLoginBtnClick);
