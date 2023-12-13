export default () => {
    const workCards = document.querySelectorAll('.work-card');

    if(workCards.length < 1) return;

    Array.from(workCards).forEach(workCard => {
        let mainSwiperBox = workCard.querySelector('.work-card__main-swiper');
        let thumbsSwiperBox = workCard.querySelector('.work-card__thumbs-swiper');
        const count = workCard.querySelector('.work-card__pagination-count');
        const total = workCard.querySelector('.work-card__pagination-total');

        if(mainSwiperBox && thumbsSwiperBox) {
            const thumbsSwiper = new Swiper(thumbsSwiperBox, {
                slidesPerView: 3,
                spaceBetween: 6,
                watchSlidesProgress: true,
            })

            const mainSwiper = new Swiper(mainSwiperBox, {
                slidesPerView: 1,

                thumbs: {
                    swiper: thumbsSwiper,
                },

                navigation: {
                    nextEl: workCard.querySelector('.work-card__navigation-next'),
                    prevEl: workCard.querySelector('.work-card__navigation-prev'),
                },

                breakpoints: {
                    1024: {
                        allowTouchMove: false,
                        grabCursor: false,
                    }
                },

                on: {
                    init: function () {
                        count.textContent = "01";
                        if(this.slides.length < 10) {
                            total.textContent = '0' + this.slides.length;
                        } else {
                            total.textContent = this.slides.length;
                        }
                    },

                    activeIndexChange: function () {
                        count.textContent = this.activeIndex + 1;

                        if((this.activeIndex + 1) < 10) {
                            count.textContent = '0' + (this.activeIndex + 1);
                        } else {
                            count.textContent = (this.activeIndex + 1);
                        }
                    }
                }
            })
        }
    })
}
