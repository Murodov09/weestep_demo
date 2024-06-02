<template>
 <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><p class="first_text">hi,
we are weestep!</p></swiper-slide>
    <swiper-slide><div class="info"><p class="info_text">Обувь для детей, как для взрослых. 
Дети носят обувь не так долго, как их родители. Должна ли она быть стильной и качественной? 
Мы уверены, что да. 
</p>
    <button class="info_btn btn btn-ghost">Больше о нас</button></div></swiper-slide>
   
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import './Weestep.css';

  // import required modules
  import { Autoplay, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, ],
      };
    },
  };
</script>
<style>
    
</style>