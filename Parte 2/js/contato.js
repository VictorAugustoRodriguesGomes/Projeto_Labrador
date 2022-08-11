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

    iconSearch.classList.toggle('active');
    iconSubMenu.classList.toggle('active2');
    subMenuSearch.classList.toggle('active');
    menuHeader.classList.toggle('subHeader2');
    
}