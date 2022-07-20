<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="16"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    
  >
    <swiper-slide v-for="category in categorys" :key="category.id" style="width:100px;">
        <router-link :to="'/category/recipes/' + category.key" class="flex items-center justify-center h-12 text-gray-400 bg-white hover:bg-[#FFAAA0] hover:text-white rounded-xl px-4 transition duration-300 ease-out">
            <h5 class=" text-[10px] font-semibold text-center">{{category.category}}</h5>
        </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import axios from 'axios'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../index.css";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data(){
    return {
        categorys:[]
    }
  },
  methods: {
    setCategorys(data) {
        this.categorys = data;
    }
  },
  mounted() {
    axios
    .get('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
    .then((response) => this.setCategorys(response.data.results))
    .catch((error) => console.log(error))
  }
};
</script>
