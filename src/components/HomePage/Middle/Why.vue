<template>
  <swiper id="swipertwo" :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :modules="modules" class="mySwiper">
    <swiper-slide>
        <div class="middle_div">
          <p>why
            weestep?</p>
          <p>долговечность и удобство</p>
          <p>обувь только из натуральной кожи</p>
        </div>

          <img class="swiper_img" src="./first_shoes.svg" alt="">
    </swiper-slide>
    <swiper-slide>
        <div class="middle_div">
          <p>why
            weestep?</p>
          <p>трендсет</p>
          <p>следим за трендами в мире взрослой моды и используем их в детской обуви</p>
        </div>

          <img class="swiper_img" src="./second_shoes.svg" alt="">
    </swiper-slide><swiper-slide>
        <div class="middle_div">
          <p>why
            weestep?</p>
          <p>индивидуальность</p>
          <p>помогаем ребенку найти свой стиль </p>
        </div>

          <img class="swiper_img" src="./third_shoes.svg" alt="">
    </swiper-slide>
    <swiper-slide>
        <div class="middle_div">
          <p>why
            weestep?</p>
          <p>точная специализация</p>
          <p>знаем, как создать идеальную детскую обувь</p>
        </div>

          <img class="swiper_img" src="./fourth_shoes.svg" alt="">
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Why.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style></style>