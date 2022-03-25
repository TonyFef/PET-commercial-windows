export const swiper = (swiper1, swiper2) => {
    new Swiper(swiper1, {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 50,
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
        breakpoints: {
            576: {
                slidesPerView: 2,
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
