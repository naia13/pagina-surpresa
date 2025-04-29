function mostrarSurpresa() {
    const frases = [
      "Eu te amo mais do que palavras podem dizer.",
      "Você faz meus dias mais felizes.",
      "Obrigado por estar ao meu lado. ❤️",
      "Vamos comemorar muitos outros anos juntas!"
    ];
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("mensagem").innerText = frases[indice];
  }
  
  // Criar corações aleatórios
  const hearts = document.querySelector(".hearts");
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.textContent = "❤️";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (3 + Math.random() * 2) + "s";
    hearts.appendChild(span);
  }
  
