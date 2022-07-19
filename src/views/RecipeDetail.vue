<template>
  <div>
    <div class="p-3 relative">
      <img
        class="w-full h-80 object-cover rounded-xl"
        :src="recipe.thumb"
        :alt="'photo ' + recipe.title"
      />

      <router-link
        to="/"
        class="w-10 h-10 flex items-center justify-center rounded-md bg-white absolute -mt-[19rem] ml-3"
      >
        <i class="bx bx-chevron-left text-3xl text-[#FF9F95]"></i>
      </router-link>
    </div>

    <div class="px-5">
      <h2 class="recipe_title h-[50px]">{{ recipe.title }}</h2>
      <h3>{{}}</h3>
      <div class="flex items-center justify-center gap-6 mt-4">
        <div
          class="flex-col flex items-center justify-center bg-green-100 w-24 h-24 rounded-xl"
        >
          <i class="bx bx-time-five text-green-500 text-5xl"></i>
          <span class="text-sm text-green-500 mt-1 font-semibold">{{
            recipe.times
          }}</span>
        </div>

        <div
          class="flex-col flex items-center justify-center bg-blue-100 w-24 h-24 rounded-xl"
        >
          <i class="bx bx-food-menu text-blue-500 text-5xl"></i>
          <span class="text-sm text-blue-500 mt-1 font-semibold">{{
            recipe.dificulty
          }}</span>
        </div>

        <div
          class="flex-col flex items-center justify-center bg-orange-100 w-24 h-24 rounded-xl"
        >
          <i class="bx bx-bowl-rice text-orange-500 text-5xl"></i>
          <span class="text-sm text-orange-500 mt-1 font-semibold">{{
            recipe.servings
          }}</span>
        </div>
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">Bahan - Bahan :</h3>      
      <Ingredient/>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageLoader from "../components/PageLoader.vue";
import Ingredient from "../components/detail/Ingredient.vue";

export default {
  components: { PageLoader, Ingredient },
  data() {
    return {
      recipe: [],
    };
  },
  methods: {
    setRecipe(data) {
      this.recipe = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://masak-apa-tomorisakura.vercel.app/api/recipe/" +
          this.$route.params.key
      )
      .then((response) => this.setRecipe(response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>
