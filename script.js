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

  const menus = [
    { linkId: "explorer-link", menuId: "explorer-menu" },
    { linkId: "browse-link", menuId: "browse-menu" },
    { linkId: "pages-link", menuId: "pages-menu" },
  ];

  menus.forEach(({ linkId, menuId }) => {
    const link = document.getElementById(linkId);
    const menu = document.getElementById(menuId);

    // Bascule l'affichage du menu au clic
    link.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("visible");
    });

    // Ferme le menu si l'utilisateur clique ailleurs
    document.addEventListener("click", (event) => {
      if (!link.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("visible");
      }
    });
  });
});
