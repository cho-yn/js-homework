/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = getNode(".nav ul");
const visualImage = getNode(".visual img");
const nickName = getNode(".nickName");

function setBgcolor(index) {
  let color = data[index].color;
  document.body.style.backgroundImage = `linear-gradient(to bottom, ${color})`;
}
function setImage(index) {
  let fileName = data[index].name.toLowerCase();
  visualImage.src = `./assets/${fileName}.jpeg`;
  visualImage.alt = data[index].alt;
}
function setNameText(index) {
  nickName.textContent = data[index].name;
}

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");

  if (!li) return;

  let index = li.dataset.index - 1;

  const list = [...navigation.children];

  list.forEach((li) => removeClass(li, "is-active"));

  setBgcolor(index);
  setImage(index);
  setNameText(index);

  addClass(li, "is-active");
}

navigation.addEventListener("click", handleClick);
