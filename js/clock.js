const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// interval : 매번 일어나야 하는 무언가
// setInterval(function, ms) : 매 시간마다 실행해주는 함수
// setInterval(sayHello, 2000);

// setTimeout(function, ms) : 일정시간 후 실행해주는 함수
// setTimeout(sayHello, 2000);

getClock();
setInterval(getClock, 1000);

// string.padStart() / string.padEnd()
// ex) "1".padStart(2, "0");
