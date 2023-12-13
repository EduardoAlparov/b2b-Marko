export default () => {
    const body = document.body;
    const btnMenu = document.getElementsByClassName("btn-menu");

    for (let i = 0; i < btnMenu.length; i++) {
        btnMenu[i].addEventListener('click', function () {
            body.classList.toggle('menu-open');

            setTimeout(() => {
                if(!body.classList.contains('menu-open')) {
                    document.querySelector('.modal__close-btn--menu').click();
                }
            }, 200);
        });
    }
}
