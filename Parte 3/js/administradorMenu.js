let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("menuS");
    });
}
function MenuSideFunction() {
    var menuL = document.querySelector('.menuL');
    var menuL2 = document.querySelector('.menuBar');
    var menuMain = document.querySelector('.main');
    var menutitleMain = document.querySelector('.titleMain');
    menuL.classList.toggle('close');
    menuMain.classList.toggle('ativo');
}