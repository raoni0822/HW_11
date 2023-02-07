new Swiper('.mainVisual .swiper', {
    loop: true,
    autoplay: true,
    speed: 5000,
    pagination: {
        el: ".swiper-dots",
        clickable: true,
    },
});

new fullpage('#fullpage', {
    //options here
    //autoScrolling: true,
    //scrollHorizontally: true
});

const TIT = ['Onshore', 'Offshore', 'CS BEARING', 'CS ENERGY']

new Swiper('.mainESG .swiper', {
    loop: true,
    autoplay: true,
    speed: 5000,
    pagination: {
        el: ".swiper-dots",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + TIT[index] + "</span>";
        },
    },
});