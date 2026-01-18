new WOW().init();


document.addEventListener("DOMContentLoaded", function () {
      // Текстовый слайдер
      const textSwiper = new Swiper(".text-swiper", {
        allowTouchMove: false, // нельзя листать вручную
        effect: "fade",        // плавное появление текста
        fadeEffect: { crossFade: true },
      });

      // Фото-слайдер с эффектом карточек
      const photoSwiper = new Swiper(".photo-swiper", {
        effect: "cards",
        grabCursor: true,
        cardsEffect: {
          slideShadows: false, // отключаем тень
          // slideOffset регулирует смещение следующей карточки
    slideOffset: 50, // по умолчанию ~20, увеличь для большего расстояния
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true, // 🔹 зацикливание
        on: {
          slideChange: function () {
            textSwiper.slideTo(this.realIndex);
          },
        },
      });
      // Инициализация: синхронизируем начальные индексы
  textSwiper.slideTo(photoSwiper.realIndex, 0);
    });

   