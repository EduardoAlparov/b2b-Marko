export default () => {
    const trigger = document.getElementById('scroll-trigger');

    if(!trigger) return;

    let strAnimation = ScrollTrigger.create({
        trigger: "#scroll-trigger",
        start: "top center",

        onToggle: () => {
            if(document.querySelector('.advantages')) {
                document.querySelector('.advantages').classList.remove('animate-trigger');
            }
        },
    });


}
