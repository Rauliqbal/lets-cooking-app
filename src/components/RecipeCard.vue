<template>
  <router-link
    :to="'/recipe/' + recipe.key"
    class="bg-white rounded-xl"
    v-for="recipe in recipes"
    :key="recipe.id"
  >
    <div class="p-3 flex items-center">
      <img
        class="rounded-lg w-28 h-28 object-cover"
        :src="recipe.thumb"
        :alt="'photo ' + recipe.title"
      />
      <div class="py-2 px-3">
        <h2 class="recipe_title">{{ recipe.title }}</h2>
        <div class="flex mt-4">
          <div class="w-[98px] flex item-center gap-1">
            <i class="bx bx-time-five text-green-500 text-lg"></i>
            <span class="text-xs">{{ recipe.times }}</span>
          </div>
          <div class="flex item-center gap-1">
            <i class="bx bx-food-menu text-orange-400 text-lg"></i>
            <span class="text-xs">{{ recipe.dificulty }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
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
      .get("https://masak-apa-tomorisakura.vercel.app/api/recipes")
      .then((response) => this.setRecipes(response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>
