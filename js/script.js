/*-------------Burger-------------*/

const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        body.classList.toggle('_lock')

    })
}
/*-------------/Burger-------------*/

/*-------------Filter-------------*/
const filter = document.querySelector('.filter')

if(filter) {
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active')
            item.querySelector('.block-filter__icon').classList.toggle('_active')

            if(event.target.classList.contains('block-filter__item')) { //эта часть выводит в фильтр выбранное наечение
                item.querySelector('.block-filter__value').textContent = event.target.textContent
            }
        })
    });
}

/*-------------/Filter-------------*/

/*-------------Swiper-------------*/

const popularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20, // отстпы слайдов
    slidesPerView: 3, // кол-во слайдов на экране
    //loop:true, бесконечный слайдер

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  const sliderReviews = new Swiper('.slider-reviews', {
    spaceBetween: 20, // отстпы слайдов
    slidesPerView: 1, // кол-во слайдов на экране
    loop:true, //бесконечный слайдер
    autoHeight: true, // автоматически пдстройка стрелочек под размер слайда


    navigation: {
      nextEl: '.slider-reviews-prew',
      prevEl: '.slider-reviews-next',
    },

  });
/*-------------/Swiper-------------*/

/*-------------Gallery-------------*/
const galleryItems = document.querySelectorAll('.gallery__item')

if(galleryItems.length>0) {
  galleryItems.forEach(item =>{
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
    })
  })
}
/*-------------/Gallery-------------*/
