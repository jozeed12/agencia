document.addEventListener("DOMContentLoaded", function () {
    menu();
  });

function menu() {
  const btnFlotante = document.querySelector(".abrir_menu");
  const menu = document.querySelector(".menu");

  if(btnFlotante) {
    btnFlotante.addEventListener("click", abrirCerrarMenu);

    function abrirCerrarMenu() {
      if (menu.classList.contains("activo")) {
        menu.classList.remove("activo");
        btnFlotante.classList.remove("activo");
      } else {
        menu.classList.add("activo");
        btnFlotante.classList.add("activo");
      }
    }
  }
}