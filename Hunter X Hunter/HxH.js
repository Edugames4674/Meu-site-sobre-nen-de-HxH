const frasesEsquerda = [
    '"Eu passei a vida buscando poder. Mas é a verdadeira conexão com os outros que define a verdadeira força." - Meruem',
    '"O que importa não é ganhar ou perder, mas o que você se torna ao lutar." - Komugi',
    '"O caminho do guerreiro não é traçado pela força, mas pela resistência da alma." - Netero'
  ];
  
  const frasesDireita = [
    '"A vida é apenas uma sequência de escolhas, cada uma moldando nossa história." - Chrollo',
    '"Se eu vou morrer, não quero me arrepender." - Gon',
    '"A única coisa que posso fazer é seguir em frente." - Leorio'
  ];
  
  let index = 0;
  
  function trocarFrases() {
    const fraseEsquerda = document.getElementById('frase-esquerda');
    const fraseDireita = document.getElementById('frase-direita');
  
    // Aplica as frases e depois aumenta a opacidade
    fraseEsquerda.innerHTML = frasesEsquerda[index];
    fraseDireita.innerHTML = frasesDireita[index];
    
    // Faz a transição de opacidade para aparecer suavemente
    fraseEsquerda.style.opacity = 1;
    fraseDireita.style.opacity = 1;
  
    index = (index + 1) % frasesEsquerda.length;
  
    // Após o tempo da transição, reseta a opacidade
    setTimeout(() => {
      fraseEsquerda.style.opacity = 0;
      fraseDireita.style.opacity = 0;
    }, 7000); // Faz as frases desaparecerem após 7 segundos
  }
  
  // Função para controlar o áudio
  function toggleAudio() {
    const audio = document.getElementById('audio');
    const controlButton = document.getElementById('audio-control');
    
    if (audio.paused) {
      audio.play();
      controlButton.textContent = "Pause Música";
    } else {
      audio.pause();
      controlButton.textContent = "Play Música";
    }
  }
  