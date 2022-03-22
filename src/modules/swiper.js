
    new Swiper(".benefits-inner", {
        centeredSlides: true,
        centeredSlides: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
        },
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
    });
