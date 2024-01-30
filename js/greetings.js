const loginForm = document.querySelector("#login-form"); // id가 login-form 인 요소를 자바스크립트에서 사용할수있도록 가져오는 역할
const loginInput = document.querySelector("#login-form input"); // login-form 안에 있는 input 요소를 찾아서 위와 같은 역할을 함
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //2.
  event.preventDefault(); // 브라우저 멈춤
  loginForm.classList.add(HIDDEN_CLASSNAME); //form을 다시 숨김
  const username = loginInput.value; //lodininput.value를 username이라는 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); //username 값을 unsername이라는 key와 함께 local storage에 저장
  paintGreetings(username); //paintGreetings 함수를 호출
}

function paintGreetings(username) {
  //3. 비어있는 h1 요소 안에 'Hello ${username}' 이라는 텍스트 추가
  greeting.innerText = `Hello. ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1 요소로부터 "hidden" 이라는 클래스명을 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //1.

if (savedUsername === null) {
  //사용사가 처음들어왔을때
  loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden 클래스 삭제
  loginForm.addEventListener("submit", onLoginSubmit); //submit event가 발생하면 onloginsubmit 이 실행
} else {
  paintGreetings(savedUsername);
}
