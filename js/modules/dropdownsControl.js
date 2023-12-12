export default () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    if(dropdowns.length > 0) {
        Array.from(dropdowns).forEach( dropdown => {
            dropdown.addEventListener("click", (e) => {
                if(e.target.closest('.dropdown__button')) {
                    dropdown.querySelector('.dropdown__button').classList.toggle('dropdown__button--active');
                }
            })
        })

        window.addEventListener('click', (e) => {
            if(!e.target.closest('.dropdown')) {
                Array.from(dropdowns).forEach( dropdown => {
                    dropdown.querySelector('.dropdown__button').classList.remove('dropdown__button--active');
                })
            }
        })
    }
}
