const perguntas = [
  {
    pergunta: "Durante o Exame Chunin, qual era o verdadeiro objetivo da primeira fase escrita?",
    respostas: [
      { opcao: "Testar conhecimento teórico dos ninjas", correto: false },
      { opcao: "Avaliar a capacidade de colar sem ser pego", correto: true },
      { opcao: "Identificar os melhores genins de Konoha", correto: false },
      { opcao: "Revelar os traidores infiltrados", correto: false }
    ]
  },
  {
    pergunta: "Qual foi o número da sala da primeira fase do Exame Chunin?",
    respostas: [
      { opcao: "302", correto: true },
      { opcao: "301", correto: false },
      { opcao: "204", correto: false },
      { opcao: "101", correto: false }
    ]
  },
  {
    pergunta: "Quem aplicou a primeira fase do Exame Chunin?",
    respostas: [
      { opcao: "Ibiki Morino", correto: true },
      { opcao: "Kakashi Hatake", correto: false },
      { opcao: "Yamato", correto: false },
      { opcao: "Anko Mitarashi", correto: false }
    ]
  },
  {
    pergunta: "Qual era o verdadeiro propósito da segunda fase do Exame Chunin, na Floresta da Morte?",
    respostas: [
      { opcao: "Sobrevivência física apenas", correto: false },
      { opcao: "Capturar uma invocação rara", correto: false },
      { opcao: "Avaliar trabalho em equipe e tomada de decisão sob pressão", correto: true },
      { opcao: "Testar o uso de jutsus proibidos", correto: false }
    ]
  },
  {
    pergunta: "Orochimaru se disfarçou de qual vila durante o Exame?",
    respostas: [
      { opcao: "Vila da Areia", correto: false },
      { opcao: "Vila da Névoa", correto: false },
      { opcao: "Vila do Som", correto: true },
      { opcao: "Vila da Nuvem", correto: false }
    ]
  },
  {
    pergunta: "Quem enfrentou Gaara na fase eliminatória antes da invasão?",
    respostas: [
      { opcao: "Rock Lee", correto: true },
      { opcao: "Sasuke Uchiha", correto: false },
      { opcao: "Kiba Inuzuka", correto: false },
      { opcao: "Shikamaru Nara", correto: false }
    ]
  },
  {
    pergunta: "Qual genin foi desclassificado por atacar mortalmente seu oponente?",
    respostas: [
      { opcao: "Dosu Kinuta", correto: false },
      { opcao: "Zaku Abumi", correto: false },
      { opcao: "Gaara", correto: true },
      { opcao: "Neji Hyuuga", correto: false }
    ]
  },
  {
    pergunta: "Qual destes personagens foi promovido a Chunin após o exame?",
    respostas: [
      { opcao: "Sasuke Uchiha", correto: false },
      { opcao: "Naruto Uzumaki", correto: false },
      { opcao: "Shikamaru Nara", correto: true },
      { opcao: "Rock Lee", correto: false }
    ]
  }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };

    respostasElemento.appendChild(botao);
  }
}

function finalizarJogo() {
  let mensagem = "";

  if (acertos === perguntas.length) {
    mensagem = "Você é um verdadeiro Jounin! Dominou todas as respostas! 🏆";
  } else if (acertos >= 6) {
    mensagem = "Parabéns! 🔥 Você foi promovido a Chunin! 🥳";
  } else if (acertos >= 3) {
    mensagem = "Você está quase lá. Continue seu treinamento, Genin! 🍃";
  } else {
    mensagem = "Você falhou no Exame Chunin. Volte para a Academia Ninja! 📖";
  }

  textoFinal.innerHTML = `
    Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.<br><br>${mensagem}
  `;

  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
