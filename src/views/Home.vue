<template>
<Header/>
<weestep/>
<why/>
<Videosection/>
<Collection/>
<WhereBuy/>


</template>
<script>
import Header from '@/components/HomePage/Header/Header.vue'
import Weestep from '@/components/HomePage/Weestep/Weestep.vue'
import Why from '@/components/HomePage/Middle/Why.vue'
import Videosection from '@/components/HomePage/Video/Videosection.vue'
import Collection from '@/components/HomePage/Collections/Collection.vue'
import WhereBuy from '@/components/HomePage/WhereBuy/WhereBuy.vue'



export default {
  components: { Header, Weestep, Why, Videosection, Collection, WhereBuy },


    
}
</script>
<style>
    
</style>