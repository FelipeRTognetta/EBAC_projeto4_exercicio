document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const Sbuttons = document.querySelectorAll('[data-season-button]');

    // programacao das abas principais
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('tab--active');
            removeActiveButton();
            botao.target.classList.add('tabs__nav__button--active');
        })
    }

    //programacao das abas de temporada
    for (let i = 0; i < Sbuttons.length; i++) {
        Sbuttons[i].addEventListener('click', function (botao) {
            const seasonAlvo = botao.target.dataset.seasonButton;
            const abaS = document.querySelector(`[data-season-id=${seasonAlvo}]`);
            escondeTodasSeasons();
            abaS.classList.add('episodes--active');
            removeActiveSeason();
            botao.target.classList.add('season__button--active');
        })
    }

    //programacao scroll escurece pagina
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < 60) {
            regularBG();
        } else {
            darkenBG();
        }
    })

    //programacao scroll escurece header
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < 60) {
            regularHeader();
        } else {
            darkenHeader();
        }
    })
})

function darkenBG () {
    const color = document.querySelector('.bg__img');
    color.classList.add('bg__img--darkend');
}

function regularBG () {
    const color = document.querySelector('.bg__img');
    color.classList.remove('bg__img--darkend');
}

function darkenHeader () {
    const color = document.querySelector('.header');
    color.classList.add('header--darkend');
}

function regularHeader () {
    const color = document.querySelector('.header');
    color.classList.remove('header--darkend');
}

//aba principal
function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('tabs__nav__button--active');
    }
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('tab--active');
    }
}

//abas de season
function removeActiveSeason() {
    const Sbuttons = document.querySelectorAll('[data-season-button]');

    for (let i = 0; i < Sbuttons.length; i++) {
        Sbuttons[i].classList.remove('season__button--active');
    }
}

function escondeTodasSeasons () {
    const StabsContainer = document.querySelectorAll('[data-season-id]');

    for (let i = 0; i < StabsContainer.length; i++) {
        StabsContainer[i].classList.remove('episodes--active');
    }
}