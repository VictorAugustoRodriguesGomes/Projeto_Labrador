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

var field1 = document.getElementById('field1');
var field2 = document.getElementById('field2');
var field3 = document.getElementById('field3');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.addEventListener("click", function () {
    field1.style.display = 'none';
    field2.style.display = 'block';
    field3.style.display = 'none';
});

btn2.addEventListener("click", function () {
    field1.style.display = 'block';
    field2.style.display = 'none';
    field3.style.display = 'none';
});

btn3.addEventListener("click", function () {
    field1.style.display = 'none';
    field2.style.display = 'none';
    field3.style.display = 'block';
});

btn4.addEventListener("click", function () {
    field1.style.display = 'none';
    field2.style.display = 'block';
    field3.style.display = 'none';
});