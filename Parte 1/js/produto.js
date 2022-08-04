let selected = document.querySelectorAll(".Arrow");
for (var i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", (e) => {
        let selected1 = e.target.parentElement;
        let selected2 = e.target.parentElement.parentElement.parentElement;
        selected1.classList.toggle("active");
        selected2.classList.toggle("active");
    });
}

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    var iconSubMenu = document.querySelector('.iconSubMenu');
    var iconSearch = document.querySelector('.iconSearch');
    var subMenu = document.querySelector('.subMenu');
    var menuHeader = document.querySelector('header');

    iconSubMenu.classList.toggle('active');
    subMenu.classList.toggle('active');
    menuHeader.classList.toggle('subHeader');
}

function toggleSearch() {
    var iconSearch = document.querySelector('.iconSearch');
    var iconSubMenu = document.querySelector('.iconSubMenu');
    var subMenuSearch = document.querySelector('.subMenuSearch');
    var menuHeader = document.querySelector('header');
    var subMenuFilter = document.querySelector('.subMenuFilter');
    var iconFilter = document.querySelector('.iconFilter');

    iconSearch.classList.toggle('active');
    iconSubMenu.classList.toggle('active2');
    subMenuSearch.classList.toggle('active');
    menuHeader.classList.toggle('subHeader2');
    subMenuFilter.classList.toggle('active');
    iconFilter.classList.toggle('active');
}