$(document).ready(function () {
    $('.slide-container').slideWiz(
        {
            auto: true,
            speed: 5000,
            type: 'box3D',
            row: 9,
            file: [
                {
                    src: {
                        main: "public/img/img_slide3.jpg",
                        cover: "public/img/img_slide3.jpg"
                    },
                    title: 'Cabinet de prestation en hotellerie',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium i\n' +
                        '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium interdum arcu eu porta. Maecenas p',
                    button: {
                        text: 'Plus',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "public/img/img_slide1.jpg",
                        cover: "public/img/img_slide1.jpg"
                    },
                    title: 'Cabinet de prestation en hotellerie',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium i\n' +
                        '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium interdum arcu eu porta. Maecenas p',
                    button: {
                        text: 'Goal.com',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "public/img/img_slide4.jpg",
                        cover: "public/img/img_slide4.jpg"
                    },
                    title: 'Cabinet de prestation en hotellerie',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium i\n' +
                        '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium interdum arcu eu porta. Maecenas p',
                    button: {
                        text: 'Plus',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "public/img/img_slide2.jpg",
                        cover: "public/img/img_slide2.jpg"
                    },
                    title: 'Cabinet de prestation en hotellerie',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium i\n' +
                        '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium interdum arcu eu porta. Maecenas p',
                    button: {
                        text: 'Plus',
                        url: false,
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                }
            ]

        }
    );
});
