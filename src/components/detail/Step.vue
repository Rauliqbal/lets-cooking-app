<template>
   <div>
      <ul class="list-decimal">
         <li v-for="recipe in recipes" :key="recipe.id" class="text-base text-gray-500 py-2 marker:text-red-400 marker:text-xl marker:font-medium">{{ recipe.slice(1) }}</li>
      </ul>
   </div>
</template>

<script>
import axios from "axios";

export default {
   data() {
      return {
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
         .get("https://masak-apa-tomorisakura.vercel.app/api/recipe/" + this.$route.params.key)
         .then((response) => this.setRecipes(response.data.results.step))
         .catch((error) => console.log(error));
   },
};
</script>
