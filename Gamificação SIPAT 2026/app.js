const rounds = [
  {
    theme: "Atividade crítica | Terraplenagem",
    area: "Terraplenagem",
    image: "assets/terraplenagem.jpg",
    imageAlt: "Escavadeira e caminhão em rota delimitada por leiras e pontaletes refletivos.",
    title: "Equipamentos em movimento",
    description:
      "Uma escavadeira carrega um caminhão. Outro basculante se aproxima sem confirmação do operador.",
    choices: [
      {
        text: "Realizar aproximação antes de comunicar para manter a produção.",
        score: 0,
        level: "risk",
        feedback: "Sem confirmação, há exposição à linha de fogo e risco de colisão."
      },
      {
        text: "Obedecer o fluxo, observar as leiras, placas e os pontaletes refletivos e confirmar a manobra.",
        score: 100,
        level: "best",
        feedback: "Obedecer a sinalização e manter a comunicação positiva preservam vidas."
      },
      {
        text: "Manter o fluxo e colocar alguém para sinalizar à distância.",
        score: 50,
        level: "partial",
        feedback: "Sinalização ajuda, mas não substitui segregação e autorização da manobra."
      }
    ]
  },
  {
    theme: "Atividade crítica | Manutenção",
    area: "Manutenção e lubrificação",
    image: "assets/manutencao.jpg",
    imageAlt: "Manutenção de pá carregadeira bloqueada e com implemento apoiado.",
    title: "Lubrificação de pá carregadeira",
    description:
      "A equipe iniciará o serviço, mas a trava de articulação e o bloqueio ainda não foram aplicados.",
    choices: [
      {
        text: "Desligar o motor e executar rapidamente a lubrificação.",
        score: 0,
        level: "risk",
        feedback: "Equipamento desligado ainda pode movimentar ou ser acionado."
      },
      {
        text: "Calçar as rodas e manter um colega observando o serviço.",
        score: 50,
        level: "partial",
        feedback: "Ainda faltam o bloqueio de energias e a trava de articulação."
      },
      {
        text: "Apoiar o implemento, bloquear energias, travar a articulação e calçar as rodas.",
        score: 100,
        level: "best",
        feedback: "A manutenção só começa com todas as energias controladas."
      }
    ]
  },
  {
    theme: "Atividade crítica | Içamento",
    area: "Içamento de aduela",
    image: "assets/obra-civil.jpg",
    imageAlt: "Aduela suspensa com área isolada por barreiras pantográficas.",
    title: "Movimentação de aduela pré-moldada",
    description:
      "A aduela está pronta para movimentação, mas a zona de içamento ainda precisa ser liberada.",
    choices: [
      {
        text: "Içar lentamente enquanto as pessoas recuam.",
        score: 0,
        level: "risk",
        feedback: "Nenhuma pessoa deve permanecer na área de influência da carga."
      },
      {
        text: "Instalar barreiras pantográficas, isolar a área, validar documentação e içar com sinaleiro e operador treinados.",
        score: 100,
        level: "best",
        feedback: "A área isolada e a comunicação do içamento preservam a barreira crítica."
      },
      {
        text: "Manter apenas um ajudante próximo para orientar a peça.",
        score: 50,
        level: "partial",
        feedback: "O ajudante ainda pode ficar exposto à carga e a pontos de esmagamento."
      }
    ]
  },
  {
    theme: "Liderança como barreira | Terraplenagem",
    area: "Terraplenagem",
    image: "assets/terraplenagem.jpg",
    imageAlt: "Rota de terraplenagem delimitada por leiras e pontaletes refletivos.",
    title: "Rota alterada no turno",
    description:
      "O novo acesso dos caminhões tem um aclive com sinalização de marcha específica para este trecho.",
    choices: [
      {
        text: "Seguir a marcha designada na sinalização e manter a distância de seguimento.",
        score: 100,
        level: "best",
        feedback: "A disciplina operacional age como barreira de controle preventivo."
      },
      {
        text: "Tenho muita confiança na minha experiência. Não preciso de placa nenhuma.",
        score: 0,
        level: "risk",
        feedback: "Experiência adicional não elimina o risco de tombamento."
      },
      {
        text: "Vou subir embalado para não precisar trocar de marcha.",
        score: 50,
        level: "partial",
        feedback: "Obedecer a sinalização de marcha é primordial para prevenção ao risco de tombamento."
      }
    ]
  },
  {
    theme: "Liderança como barreira | Obra civil",
    area: "Concretagem de aduelas",
    image: "assets/obra-civil.jpg",
    imageAlt: "Frente civil organizada para atividade com aduelas.",
    title: "Concretagem após chuva",
    description:
      "A chuva alterou o posicionamento previsto para a concretagem.",
    choices: [
      {
        text: "Prosseguir em velocidade reduzida, pois a peça já está posicionada.",
        score: 0,
        level: "risk",
        feedback: "A nova condição exige reanálise antes de qualquer liberação."
      },
      {
        text: "Reavaliar planejamento, corrigir controles necessários e então seguir com atividade.",
        score: 100,
        level: "best",
        feedback: "A liderança reage à mudança antes que ela gere exposição."
      },
      {
        text: "Reduzir a equipe na área e prosseguir com maior atenção.",
        score: 50,
        level: "partial",
        feedback: "Reduzir pessoas não corrige os riscos do planejamento alterado."
      }
    ]
  },
  {
    theme: "Liderança como barreira | Taludes",
    area: "Plantio de grama em talude",
    image: "assets/obra-civil.jpg",
    imageAlt: "Talude gramado em frente de obra civil.",
    title: "Talude úmido",
    description:
      "Após chuva, trabalhadores relatam perda de aderência durante o plantio de grama.",
    choices: [
      {
        text: "Suspender a exposição e definir método seguro após avaliar a estabilidade.",
        score: 100,
        level: "best",
        feedback: "Ouvir o alerta e agir impede exposição a queda ou escorregamento."
      },
      {
        text: "Concluir rapidamente o trecho já iniciado.",
        score: 0,
        level: "risk",
        feedback: "Prazo não justifica permanecer em uma condição insegura."
      },
      {
        text: "Liberar apenas profissionais mais habituados à atividade.",
        score: 50,
        level: "partial",
        feedback: "Experiência individual não controla a instabilidade do solo."
      }
    ]
  }
];

const maxScore = rounds.length * 100;
const state = {
  index: 0,
  score: 0,
  answers: [],
  locked: false
};

const screens = document.querySelectorAll(".screen");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-round");

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetSession() {
  state.index = 0;
  state.score = 0;
  state.answers = [];
  state.locked = false;
  showScreen("welcome-screen");
}

function updateProgress() {
  const number = state.index + 1;
  setText("#round-label", `Rodada ${number}/${rounds.length}`);
  setText("#header-score", state.score);
  document.querySelector("#progress-fill").style.width = `${(number / rounds.length) * 100}%`;
}

function renderRound() {
  const round = rounds[state.index];
  state.locked = false;
  setText("#theme-label", round.theme);
  setText("#scenario-area", round.area);
  setText("#scenario-title", round.title);
  setText("#scenario-description", round.description);

  const image = document.querySelector("#scenario-image");
  image.src = round.image;
  image.alt = round.imageAlt;

  choices.replaceChildren();
  round.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    const text = document.createElement("span");
    button.className = "choice";
    button.type = "button";
    letter.className = "choice-letter";
    letter.textContent = String.fromCharCode(65 + index);
    text.textContent = choice.text;
    button.append(letter, text);
    button.addEventListener("click", () => recordDecision(choice, button));
    choices.appendChild(button);
  });

  feedback.className = "feedback is-hidden";
  nextButton.classList.add("is-hidden");
  nextButton.textContent =
    state.index === rounds.length - 1 ? "Ver resultado" : "Próxima rodada";
  updateProgress();
}

function recordDecision(choice, button) {
  if (state.locked) {
    return;
  }
  state.locked = true;
  state.score += choice.score;
  state.answers.push(choice);
  choices.querySelectorAll(".choice").forEach((item) => {
    item.disabled = true;
  });
  button.classList.add("selected", choice.level);

  const labels = {
    risk: "Resposta errada",
    partial: "Resposta correta incompleta",
    best: "Resposta correta completa"
  };
  feedback.className = `feedback ${choice.level}`;
  setText("#feedback-heading", labels[choice.level]);
  setText("#feedback-text", choice.feedback);
  nextButton.classList.remove("is-hidden");
  updateProgress();
}

function completeSession() {
  const ratio = state.score / maxScore;
  let title = "Equipe em alerta";
  let message = "Toda atividade crítica exige controles verificados antes do início.";
  if (ratio >= 0.85) {
    title = "Equipe guardiã das vidas";
    message = "A equipe identificou as decisões que protegem pessoas nas atividades críticas.";
  } else if (ratio >= 0.6) {
    title = "Equipe em evolução";
    message = "Boas escolhas foram feitas. Reforcem as barreiras críticas no campo.";
  }
  setText("#outcome-title", title);
  setText("#outcome-message", message);
  setText("#final-score", state.score);
  showScreen("outcome-screen");
}

function advanceRound() {
  if (!state.locked) {
    return;
  }
  if (state.index === rounds.length - 1) {
    completeSession();
    return;
  }
  state.index += 1;
  renderRound();
}

function startSession() {
  state.index = 0;
  state.score = 0;
  state.answers = [];
  renderRound();
  showScreen("game-screen");
}

document.querySelector("#open-briefing").addEventListener("click", () => {
  showScreen("briefing-screen");
});
document.querySelector("#begin-session").addEventListener("click", startSession);
document.querySelector("#print-result").addEventListener("click", () => window.print());
document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", resetSession);
});
nextButton.addEventListener("click", advanceRound);

document.addEventListener("keydown", (event) => {
  if (!document.querySelector("#game-screen").classList.contains("is-active")) {
    return;
  }
  const number = Number(event.key);
  if (!state.locked && number >= 1 && number <= 3) {
    choices.children[number - 1].click();
  }
  if (state.locked && event.key === "Enter") {
    advanceRound();
  }
});
