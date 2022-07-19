<template>
  <div>
    <img class="w-full " src="../assets/images/bg-image.svg" alt="">
    <div class="px-5 -mt-48">
      <h1 class="font-bold text-2xl text-white">Hi, Cooking Lovers!</h1>
      <h2 class="text-white text-base">Mau masak apa hari ini</h2>

      <router-link to="/search" class="flex items-center relative  mt-6">
        <input class="w-full py-3 pl-3 rounded-xl outline-none" type="search" placeholder="search recipe...">
        <i class='bx bx-search absolute right-3  text-2xl'></i>
      </router-link>
    </div>

    <div class="px-5 mt-14 min-h-screen">
      <h2 class="text-xl font-bold">Resep Terbaru</h2>
      <div class="grid grid-cols-1 gap-4 mt-4">
        <RecipeCard/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import RecipeCard from '../components/RecipeCard.vue';

export default {
  name: 'HomeView',
  components: {
    RecipeCard
  },

  
}
</script>
