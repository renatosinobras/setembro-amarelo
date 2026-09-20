const MESSAGES = [
  "Você não precisa resolver tudo hoje. Um passo de cada vez também é seguir em frente.",
  "Pedir ajuda não é fraqueza — é coragem de cuidar de si mesmo.",
  "Seus sentimentos são válidos, mesmo quando parecem grandes demais para caber no dia.",
  "Existe gente que se importa com você, mesmo nos dias em que isso é difícil de sentir.",
  "Você já superou dias difíceis antes. Isso também é prova da sua força.",
  "Está tudo bem não estar bem. O importante é não passar por isso em silêncio.",
  "Falar sobre o que você sente pode ser o primeiro passo para se sentir mais leve.",
  "Você importa. Sua história ainda tem muitos capítulos para escrever.",
  "Cuidar da sua saúde mental é tão importante quanto cuidar do corpo.",
  "Ninguém deveria enfrentar a dor sozinho. Procure alguém em quem você confia.",
  "Pequenas conquistas também são conquistas. Comemore o que for possível hoje.",
  "Você não está sozinho(a). Tem gente disposta a ouvir, sem julgamento.",
  "Respire. Você já chegou até aqui, e isso significa muito.",
  "Se hoje foi difícil, seja gentil com você mesmo(a) — amanhã é uma nova chance."
];

const cardText = document.getElementById("cardText");
const actionBtn = document.getElementById("actionBtn");

let lastIndex = -1;

function pickMessage() {
  if (MESSAGES.length === 1) return MESSAGES[0];
  let index;
  do {
    index = Math.floor(Math.random() * MESSAGES.length);
  } while (index === lastIndex);
  lastIndex = index;
  return MESSAGES[index];
}

function showMessage() {
  cardText.classList.remove("animate");
  cardText.textContent = pickMessage();
  // restart animation
  void cardText.offsetWidth;
  cardText.classList.add("animate");

  if (actionBtn.dataset.state !== "again") {
    actionBtn.textContent = "Quero receber outra 💛";
    actionBtn.dataset.state = "again";
  }
}

actionBtn.addEventListener("click", showMessage);
