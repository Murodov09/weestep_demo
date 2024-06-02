<script>
import Navbar from "./components/Navbar/Navbar.vue";

import FooterVue from "./components/Footer/Footer.vue";
export default {

  components: { Navbar,FooterVue }
}

  </script>

<template>

<div class="container">
<Navbar/>
<FooterVue/>

</div>



</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
max-width: 1600px;
height: 100%;
margin: auto;
padding: 0;
padding-bottom: 80px;

}
</style>
