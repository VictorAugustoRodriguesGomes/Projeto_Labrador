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

var IntroTitle = document.getElementById('IntroTitle');
var IntroDescription = document.getElementById('IntroDescription');
var IntroIMG = document.getElementById('IntroIMG');

const brandPoint = document.getElementById('brandPoint');
const marca = brandPoint.getElementsByTagName('div');

var intro = [];
let it1 = {
    title: 'JBL Boombox 2',
    description: 'Obtenha o som mais potente, exclusivo e profissional da JBL no alto-falante portátil mais poderoso, o JBL Boombox 2. O JBL Boombox 2 produz graves potentes e profundos, assim como o som JBL profissional para festas. A diversão não precisa parar, equipado com uma incrível duração de bateria de 24 horas, o JBL Boombox 2 permite que você se divirta o dia todo e a noite toda.',
    img: 'intro/jbl.png'
};

let it2 = {
    title: 'XIAOMI Redmi Note 8',
    description: 'O Redmi Note 8 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.3 polegadas com uma resolução de 2340x1080 pixels. As funcionalidades oferecidas pelo Redmi Note 8 são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de Dice e excelente navegação na internet. Enfatizamos a excelente memória interna de 64 GB com a possibilidade de expansão. O Redmi Note 8 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 48 megapixels que permite ao Redmi Note 8 tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 8.4 milímetros, o que torna o Redmi Note 8 realmente interessante.',
    img: 'intro/note8.png'
};

let it3 = {
    title: 'Smart Speaker Echo Dot 3ª com Alexa',
    description: 'Deixe a sua vida mais fácil! Com o Smart Speaker Amazon Echo Dot 3ª Geração Alexa você usa sua voz para criar timers, adicionar itens a listas e criar eventos e lembretes. Ouça notícias e confira a previsão do tempo. Peça resultados de jogos de futebol ou informações de personalidades históricas. Controle vários dispositivos compatíveis com um único comando de voz, como trancar as portas e desligar as luzes à noite. O Echo Dot com Alexa é compatível com diversos dispositivos de casa inteligente, incluindo lâmpadas, plugues inteligentes, câmeras e muito mais. Os dispositivos, Alexa e Echo Dot são desenvolvidos com múltiplas camadas de privacidade. ',
    img: 'intro/alexa.png'
};

intro.push(it1);
intro.push(it2);
intro.push(it3);

IntroTitle.innerText = intro[0].title;
IntroDescription.innerText = intro[0].description;
IntroIMG.src = "img/" + intro[0].img + " ";

var index = 0;
let tempo = 1;
setInterval(function run() {
    if (tempo != 100) {

    } else {
        tempo = 0;
        marca[index].classList.remove('active');
        index = (index + 1) % intro.length;
        IntroTitle.innerText = intro[index].title;
        IntroDescription.innerText = intro[index].description;
        IntroIMG.src = "img/" + intro[index].img + " ";
        marca[index].classList.add('active');
    }
    tempo++
}, 100);

function intro0() {
    marca[index].classList.remove('active');
    index = 0;
    IntroTitle.innerText = intro[index].title;
    IntroDescription.innerText = intro[index].description;
    IntroIMG.src = "img/" + intro[index].img + " ";
    marca[index].classList.add('active');
}

function intro1() {
    marca[index].classList.remove('active');
    index = 1;
    IntroTitle.innerText = intro[index].title;
    IntroDescription.innerText = intro[index].description;
    IntroIMG.src = "img/" + intro[index].img + " ";
    marca[index].classList.add('active');
}

function intro2() {
    marca[index].classList.remove('active');
    index = 2;
    IntroTitle.innerText = intro[index].title;
    IntroDescription.innerText = intro[index].description;
    IntroIMG.src = "img/" + intro[index].img + " ";
    marca[index].classList.add('active');
}