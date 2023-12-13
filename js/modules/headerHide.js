export default () => {
    const header = document.querySelector('.header');

    if(!header) return;

    let strHeader = ScrollTrigger.create({
        trigger: "#scroll-trigger",
        start: "top bottom",

        onEnter: () => {
            header.classList.add('header--hidden');
        },

        onLeaveBack: () => {
            header.classList.remove('header--hidden');
        },
    });
}
