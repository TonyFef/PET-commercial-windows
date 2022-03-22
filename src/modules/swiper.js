export const swiper = (swiper1, swiper2) => {
    new Swiper(swiper1, {
        loop: true,
        breakpoints: {
            576: {
                slidesPerView: 1,
                // spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 100,
            },
        },
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
    });

    new Swiper(swiper2, {
        loop: true,
        breakpoints: {
            576: {
                slidesPerView: 1,
                // spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
    });
};
