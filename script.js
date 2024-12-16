document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.getElementById("user-icon");
    const userMenu = document.getElementById("user-menu");
  
    userIcon.addEventListener("click", () => {
      // Bascule la classe visible
      userMenu.classList.toggle("visible");
    });
  
    // Fermer le menu si l'utilisateur clique en dehors
    document.addEventListener("click", (event) => {
      if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.remove("visible");
      }
    });



    const explorerLink = document.getElementById("explorer-link");
    const explorerMenu = document.getElementById("explorer-menu");

    // Lorsque l'on clique sur "Explorer", on affiche ou cache le menu
    explorerLink.addEventListener("click", (e) => {
      e.preventDefault();  // Empêche le comportement par défaut du lien
      explorerMenu.classList.toggle("visible");
    });

    // Fermer le menu si l'utilisateur clique en dehors
    document.addEventListener("click", (event) => {
      if (!explorerLink.contains(event.target) && !explorerMenu.contains(event.target)) {
        explorerMenu.classList.remove("visible");
      }
    });
  });
  


