const clock = document.querySelector("h2#clock");

function getClock() {
  //data object는 이걸 호출하는 당시의 현재날짜랑 시간을 알려준다.
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // 시, string 으로 숫자로 받은 것을 글자로 저장.
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 분, padstart() function 은 네가 가지고 있는 string을 보다 길게 만들어야할떄 사용한다.
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 초
  clock.innerText = `${hours}:${minutes}:${seconds}`; // 구한 숫자를 innertext 로 넣어줌
}

getClock(); // 계속해서 현제시간을 나타나게 한것.
setInterval(getClock, 1000); //get clock every second
