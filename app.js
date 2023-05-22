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

const h1 = document.querySelector("div.hello:first-child h1");

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

function handleTitleClick() {}

// click 이벤트가 발생했을 때 뒤에 함수 실행 / 함수엔 () 괄호 넣으면 안됨! (콜백함수이기 때문)
h1.addEventListener("click", handleTitleClick);
// or
// h1.onclick = handleTitleClick;

////////////////////////////////////////////////////////////////////////////////
