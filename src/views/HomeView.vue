<template>
  <div class="relative">
    <img class="w-full " src="../assets/images/bg-image.svg" alt="">

    <button @click="isOpen = true" class="absolute top-4 right-5 bg-white text-red-400 flex items-center justify-center w-10 h-10 rounded-full" ><i class='bx bx-info-circle text-2xl'></i></button>
    <div
        v-show="isOpen"
        class="
          z-50
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
          h-screen
          max-w-md
          mx-auto
          px-5
          transition-all
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl transition-all">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-semibold">Tentang Aplikasi</h3>
          </div>
          <div class="mt-4">
            <p class="text-base text-gray-700">
              Lets Cook adalah Aplikasi berbasis website untuk kalian ingin mencoba resep resep masakan indonesia yang mudah dan menyenangkan.
            </p>
            <p class="text-sm text-gray-700 mt-4 "><span class="text-gray-500">Version</span> : 1.0.0</p>
            <p class="text-sm text-gray-700 mb-4"><span class="text-gray-500">Beta Release</span> : Minggu, 24 Juli 2022</p>
            <button
              @click="isOpen = false"
              class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 focus:scale-95 transition duration-100 ease-out"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>

    <div class="px-5 -mt-48">
      <h1 class="font-bold text-2xl text-white">Hi, Cooking Lovers!</h1>
      <h2 class="text-white text-base">Mau masak apa hari ini</h2>

      <router-link to="/search">
        <div class="
        flex items-center relative bg-white py-3 rounded-xl mt-5">
          <span class="px-3 text-base text-gray-400">Telor, Nasi Goreng, Daging</span>
        <i class='bx bx-search absolute right-3 text-gray-400 text-2xl'></i>
        </div>
      </router-link>
    </div>

    <div class="px-5 mt-14 min-h-screen">
      <h2 class="text-xl font-bold">Kategori</h2>
      <CategoryCard class="mt-4"/>
      <h2 class="text-xl font-bold mt-5">Resep Terbaru</h2>
      <div class="grid grid-cols-1 gap-4 mt-4 pb-20">
            <div v-for="recipe in recipes" :key="recipe.id">
                <RecipeCard :recipe="recipe"/>
            </div>
        </div>
    </div>

    <nav class="max-w-md mx-auto fixed inset-x-0 bottom-0 bg-white grid grid-cols-3 py-2">
        <router-link  to="/" class="nav-link" active-class="active-link">
            <i class="bx bx-home-alt text-2xl "></i>
            <span class="text-sm mt-1 ">Home</span>
        </router-link>
        <router-link  to="/recipe" class="nav-link" active-class="active-link">
            <i class="bx bx-food-menu text-2xl "></i>
            <span class="text-sm mt-1 ">Resep</span>
        </router-link>
        <router-link  to="/artikel" class="nav-link" active-class="active-link">
            <i class="bx bx-book text-2xl "></i>
            <span class="text-sm mt-1 ">Artikel</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import RecipeCard from '../components/RecipeCard.vue';
import CategoryCard from '../components/CategoryCard.vue';

export default {
  name: 'HomeView',
  components: {
    RecipeCard,CategoryCard
  },
  data() {
        return {
            search: "",
            recipes: [],
            isOpen: false
        };
    },

    methods: {
        setRecipes(data) {
            this.recipes = data;
        },
    },
    mounted() {
        axios 
             .get("https://masak-apa-tomorisakura.vercel.app/api/recipes")
                .then((response) => this.setRecipes(response.data.results))
                .catch((error) => console.log(error));
    }
}
</script>
