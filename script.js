function mostrarSurpresa() {
  const frases = [
    "Eu te amo mais do que palavras podem dizer.",
    "Você faz meus dias mais felizes.",
    "Obrigada por estar ao meu lado. ❤️",
    "Vamos comemorar muitos outros anos juntas!"
  ];

  // Escolher uma frase aleatória e exibir
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("mensagem").innerText = frases[indice];

  // Criar corações aleatórios na tela
  const hearts = document.querySelector(".hearts");
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.textContent = "❤️";
    span.style.left = Math.random() * 100 + "vw"; // Posicionamento horizontal aleatório
    span.style.animationDuration = (3 + Math.random() * 2) + "s"; // Duração aleatória da animação
    hearts.appendChild(span);
  }
}
