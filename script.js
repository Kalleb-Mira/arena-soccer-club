


document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {

            menu.classList.toggle('active');

        });
    }

    const whatsText = document.getElementById('whats-text');

    if (whatsText) {
        const mensagens = ['Agende seu Horário!', '(91) 99114-9679'];
        let index = 0;

        setInterval(() => {
            index = (index + 1) % mensagens.length;
            whatsText.textContent = mensagens[index];
        }, 2500);
    }

    // Swiper - seção SOBRE
    const sobreSwiper = new Swiper('.sobre-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.sobre-swiper .swiper-button-next',
            prevEl: '.sobre-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Swiper - seção CLIENTES
    const clientesSwiper = new Swiper('.clientes-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.clientes-swiper .swiper-button-next',
            prevEl: '.clientes-swiper .swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const nextBtn = document.querySelector('.lightbox-next');
    const prevBtn = document.querySelector('.lightbox-prev');

    let currentIndex = 0;
    let currentGroup = [];

    const sobreImages = Array.from(document.querySelectorAll('.sobre-swiper .swiper-slide img'));
    const clienteImages = Array.from(document.querySelectorAll('.clientes-swiper .swiper-slide img'));

    function showImage(index, group) {
        currentIndex = index;
        currentGroup = group;
        lightboxImg.src = group[index].src;
        lightboxImg.alt = group[index].alt;
        lightbox.style.display = 'block';
    }

    sobreImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index, sobreImages);
        });
    });

    clienteImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index, clienteImages);
        });
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentGroup.length;
        showImage(currentIndex, currentGroup);
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
        showImage(currentIndex, currentGroup);
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
