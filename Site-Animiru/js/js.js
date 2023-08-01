///////////////////// DROPMENU /////////////////////
var dropdown = document.getElementsByClassName("drop");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropMenu = this.nextElementSibling;
    if (dropMenu.style.display === "block") {
      dropMenu.style.display = "none";
    } else {
      dropMenu.style.display = "block";
    }
  })
};
////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////// FUNÇÃO LOGIN ///////////////////
/**Tem condições separadas pois tentei usar a condição
 * anterior para passar variável para o index ao redirecionar,
 * e usar a variável para alterar o texto de "Entrar" para "Minha Conta".
 * Mas não funcionou...
 * */ 
let isLogged = false;
function logar() {
  var login = document.getElementById('usName').value;
  var senha = document.getElementById('senha').value;

  if (login === "admin" && senha === "admin") {
    //sessionStorage.setItem("loginCheck", true)
    isLogged = true;
  }
  if (isLogged == true) { 
    alert('Sucesso no login. Você será redirecionado.'); 
    location.href = "index.html";
  }
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////// FUNÇÃO MENU BURGER /////////////////
const menu = document.querySelector('.openMenu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('translate');
});
/////////////// FUNÇÃO MENU BURGER /////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//NÃO FUNCIONA//
// function checkLog() {
//   var text = document.getElementById("entrar-txt");

//   if(console.log(sessionStorage.getItem("loginCheck")) === true) {
//     text.innerHTML = "Minha Conta";
//   } else {
//     text.innerHTML = "Entrar";
//   }
// }