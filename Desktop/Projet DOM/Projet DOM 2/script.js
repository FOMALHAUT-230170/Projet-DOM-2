document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments HTML par leur identifiant
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // FONCTION : Génère un code couleur hexadécimal aléatoire (ex: #5A1F8C)
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // ÉVÉNEMENT : Changement de couleur au clic sur le bouton
  if (changeColorBtn && colorBox) {
    changeColorBtn.addEventListener("click", () => {
      // Appel de la fonction pour obtenir une couleur aléatoire
      const randomColor = getRandomColor();
      
      // Modification de la couleur d'arrière-plan de la boîte
      colorBox.style.backgroundColor = randomColor;
    });
  }
});
