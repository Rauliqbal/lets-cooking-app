<template>
   <div>
      <ul class="list-disc">
         <li v-for="recipe in recipes" :key="recipe.id" class="text-base text-gray-500 py-1 marker:text-red-400 marker:text-xl">{{ recipe }}</li>
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
         .then((response) => this.setRecipes(response.data.results.ingredient))
         .catch((error) => console.log(error));
   },
};
</script>
