new Glider(document.querySelector('.destination__slider'), {
    slidesToShow: 3.5,
    slidesToScroll: 3,
    duration: 1.5,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.slider-prev',
        next: '.slider-next'
    },
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // {
        //     breakpoint: 500,
        //     settings: {
        //         itemWidth: 'auto'
        //     }
        // },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3.5,
            }
        }

    ]
})
