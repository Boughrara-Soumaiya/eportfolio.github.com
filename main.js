function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
  const text = "Étudiante en double licence Droit et Informatique, je fusionne compétences techniques et expertise juridique. Passionnée par l'innovation numérique, j'explore le développement web, la gestion de bases de données et la cybersécurité.";
  let index = 0;
  function typeEffect() {
      if (index < text.length) {
          document.getElementById("typed-text").textContent += text.charAt(index);
          index++;
          setTimeout(typeEffect, 50);
      } else {
          document.getElementById("typed-text").style.borderRight = "none"; // Retire le curseur après l'animation
      }
  }
  typeEffect();
});

function openPopup(title, image, text) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-image").src = image;
  document.getElementById("popup-text").textContent = text;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

