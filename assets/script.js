document.addEventListener("DOMContentLoaded", () => {
    const typingText = "30 JavaScript Projects";
    const typingElement = document.getElementById("typing-effect");
    const cursorElement = document.getElementById("cursor");
    let index = 0;
  
    function typeEffect() {
      if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 75); // Velocidade de digitação
      } else {
        setTimeout(() => {
          typingElement.textContent = "";
          index = 0;
          typeEffect();
        }, 1000); // Pausa antes de reiniciar o loop
      }
    }
  
    typeEffect();
  });
  