const user = {
  id: "",
  pw: "",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const button = document.querySelector(".btn-login");
const inputEmail = document.querySelector("#userEmail");
const inputPassword = document.querySelector("#userPassword");

function handleInputEmail() {
  if (this.id === "userEmail") {
    if (emailReg(this.value)) {
      console.log("emailReg성공");
      this.classList.remove("is--invalid");
      user.id = this.value;
    } else {
      console.log("emailReg실패");
      this.classList.add("is--invalid");
      user.id = this.value;
    }
  }
}
function handleInputPasssword() {
  if (this.id === "userPassword") {
    if (pwReg(this.value)) {
      console.log("pwReg성공");
      this.classList.remove("is--invalid");
      user.pw = this.value;
    } else {
      console.log("pwReg실패");
      this.classList.add("is--invalid");
      user.pw = this.value;
    }
  }
}
inputEmail.addEventListener("input", handleInputEmail);
inputPassword.addEventListener("input", handleInputPasssword);

function href(address) {
  window.location.href = address;
}

function handleButtonLogin(e) {
  e.preventDefault();

  if (emailReg(user.id) && pwReg(user.pw)) {
    href("welcome.html");
  }
}
button.addEventListener("click", handleButtonLogin);
