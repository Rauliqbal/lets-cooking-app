<template>
   <div>
      <div class="p-3 relative">
         <img class="w-full h-80 object-cover rounded-xl" :src="recipe.thumb" :alt="'photo ' + recipe.title" />

         <router-link to="/" class="w-10 h-10 flex items-center justify-center rounded-md bg-white absolute -mt-[19rem] ml-3">
            <i class="bx bx-chevron-left text-3xl text-[#FF9F95]"></i>
         </router-link>
      </div>

      <div class="px-5 pb-6">
         <h2 class="recipe_title h-[50px]">{{ recipe.title }}</h2>
         <Author class="mt-1"/>
         <div class="flex items-center justify-around gap-4 mt-4">
            <div class="flex-col flex items-center justify-evenly bg-green-100 w-20 h-20 rounded-xl">
               <i class="bx bx-time-five text-green-500 text-3xl"></i>
               <span class="text-[12px] text-green-500 font-semibold">{{ recipe.times }}</span>
            </div>

            <div class="flex-col flex items-center justify-evenly bg-blue-100 w-20 h-20 rounded-xl">
               <i class="bx bx-food-menu text-blue-500 text-3xl"></i>
               <span class="text-[12px] text-blue-500 font-semibold">{{ recipe.dificulty }}</span>
            </div>

            <div class="flex-col flex items-center justify-evenly bg-orange-100 w-20 h-20 rounded-xl">
               <i class="bx bx-bowl-rice text-orange-500 text-3xl"></i>
               <span class="text-[12px] text-orange-500 font-semibold">{{ recipe.servings }}</span>
            </div>
         </div>

         <h3 class="text-xl font-bold mt-4 mb-2">Bahan - bahan :</h3>
         <Ingredient class="px-4"/>
         <h3 class="text-xl font-bold mt-8 mb-2">Cara membuat :</h3>
         <Step class="px-4"/>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import PageLoader from "../components/PageLoader.vue";
import Ingredient from "../components/detail/Ingredient.vue";
import Step from "../components/detail/Step.vue";
import Author from "../components/detail/Author.vue";

export default {
   components: { PageLoader, Ingredient, Step, Author },
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
         .get("https://masak-apa-tomorisakura.vercel.app/api/recipe/" + this.$route.params.key)
         .then((response) => this.setRecipe(response.data.results))
         .catch((error) => console.log(error));
   },
};
</script>
