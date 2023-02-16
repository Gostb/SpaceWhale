function burgerMenu() {
    const burger = document.querySelector('.js-burger')
    const menu = document.querySelector('.js-menu')
    const body = document.querySelector('body')

    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu();


function submenuToggleClasses() {
    const triggers = document.querySelectorAll('.js-submenu-trigger');

    triggers.forEach(el => el.addEventListener('click', (e) => {
        const parent = el.parentNode
        
        if (parent.classList.contains('menu__item--open')) {
            parent.classList.remove('menu__item--open')
        } else {
            document
                .querySelectorAll('.menu__item')
                .forEach(child => child.classList.remove('menu__item--open'))   
            parent.classList.add('menu__item--open')
        }

        if (!e.target) {
            console.log('asd');
          }
    }));
}
submenuToggleClasses()
