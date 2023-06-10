const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "cards",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

const swiperTwo = new Swiper(".secondSwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // },
    // when window width is >= 480px
    0: {
      slidesPerView: 1,
      //   spaceBetween: 30
    },
    // when window width is >= 640px
    576: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 2,
    }

  }
});



const data = [
  {
    name: 'burgers',
    img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg'
  },
  {
    name: 'pizzas',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l2d_jlbEtZK0n_Vk9sPpKcVtWIFjw3fUMg&usqp=CAU'
  },
  {
    name: 'drinks',
    img: 'https://c4.wallpaperflare.com/wallpaper/97/512/27/a-glass-of-beer-wallpaper-preview.jpg'
  },
  {
    name: 'COCKTAILS',
    img: 'https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/l-intro-1659025591.jpg'
  }
]


const swiperRender = (api) => {
  const sliderWrap = document.querySelector('.myWrapper')
  api.forEach(el => {
    const slide = document.createElement('div')
    const image = document.createElement('div')

    slide.className = 'swiper-slide'
    image.className = 'swiper-image'

    slide.style.backgroundImage = `url('${el.img}')`



    slide.append(image)
    sliderWrap.append(slide)
  })
}
swiperRender(data)