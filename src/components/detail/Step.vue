<template>
    <div class="px-5">
      <ul v-for="recipe in recipes" :key="recipe.id">
        <li class="text-sm text-gray-500 py-[2px]">{{recipe}}</li>
        
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
      .get(
        "https://masak-apa-tomorisakura.vercel.app/api/recipe/" +
          this.$route.params.key
      )
      .then((response) => this.setRecipes(response.data.results.step))
      .catch((error) => console.log(error));
  },
}
</script>