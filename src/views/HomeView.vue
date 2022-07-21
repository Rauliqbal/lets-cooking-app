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
