let catName = "";
let mood = 0;
let day = 1;

function startGame() {
  const nameInput = document.getElementById("nameInput");
  catName = nameInput.value.trim();
  if (catName === "") {
    alert("이름을 입력해주세요!");
    return;
  }
  document.getElementById("introScreen").style.display = "none";
  document.getElementById("tutorialScreen").style.display = "block";
  document.getElementById("tutorialText").innerText = `안녕, ${catName}아! 이제부터 너는 마을 사람들의 곁에 다가가, 따뜻한 하루를 선물할 거야. 선택지를 눌러 너의 행동을 결정하고, 그들의 하루를 바꿔줘.`;
}

function startDay() {
  document.getElementById("tutorialScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  showScene();
}

function showScene() {
  const story = document.getElementById("storyText");
  const choices = document.getElementById("choices");

  if (day === 1) {
    story.innerText = `할머니 댁에 도착했어. 할머니는 너를 보고 따뜻하게 웃으셨어. 뭘 할까, ${catName}아?`;
    choices.innerHTML = `
      <button onclick="selectChoice(1)">할머니 무릎에 올라가서 잔다</button>
      <button onclick="selectChoice(2)">조용히 옆에 앉아있다</button>
      <button onclick="selectChoice(3)">마당을 돌아다닌다</button>
    `;
  } else if (day === 2) {
    story.innerText = `${catName}는 오늘, 조용한 골목 끝 작은 방 앞에 멈춰섰다. 창가에 앉은 청년이 바깥을 멍하니 바라보고 있었다.`;
    choices.innerHTML = `
      <button onclick="selectChoice(1)">작은 돌멩이를 발로 툭툭 찬다.</button>
      <button onclick="selectChoice(2)">창가에 올라가 조용히 앉는다.</button>
      <button onclick="selectChoice(3)">그를 바라보다가 살며시 돌아선다.</button>
    `;
  } else if (day === 3) {
    story.innerText = `${catName}는 마을 놀이터에 다다랐다. 그네 위에 앉은 아이는 조용히 입을 다물고 있었다.`;
    choices.innerHTML = `
      <button onclick="selectChoice(1)">그네 밑에서 공을 굴린다.</button>
      <button onclick="selectChoice(2)">아이 앞에 털실을 내려놓는다.</button>
      <button onclick="selectChoice(3)">그네 뒤에 앉아 함께 움직인다.</button>
    `;
  } else {
    showEnding();
  }
}

function selectChoice(option) {
  if (day === 1) {
    if (option === 1) mood += 2;
    else if (option === 2) mood += 1;
  } else if (day === 2) {
    if (option === 1) mood += 1;
    else if (option === 2) mood += 2;
  } else if (day === 3) {
    if (option === 1) mood += 2;
    else if (option === 2) mood += 1;
  }
  day++;
  showScene();
}

function showEnding() {
  document.getElementById("gameScreen").style.display = "none";
  document.getElementById("endingScreen").style.display = "block";
  const text = document.getElementById("endingText");

  if (mood >= 6) {
    text.innerText = `“사랑하는 ${catName}에게.\n\n너는 아무 말도 하지 않았지만, 우리 모두는 네가 무슨 말을 하고 싶은지 알았단다.\n너의 발소리는 따뜻했고, 너의 침묵은 커다란 위로였어.\n오늘도, 내일도 너를 기억할게.\n– 마을 사람들”`;
  } else if (mood >= 3) {
    text.innerText = `${catName}, 고마워.\n\n너는 그냥 곁에 있어준 것뿐인데, 그게 우릴 웃게 했어.\n우린 말로 표현을 잘 못하지만, 이 편지가 너에게 닿길 바랄게.`;
  } else {
    text.innerText = `편지는 짧았다.\n\n“오늘도 와줘서, 고맙다.”\n\n단 한 줄이었지만, 그 안엔 모든 마음이 담겨 있었다.`;
  }
}
