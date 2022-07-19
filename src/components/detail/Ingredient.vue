<template>
    <div>
      <ul>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[0]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[1]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[2]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[3]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[4]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[5]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[6]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[7]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[8]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[9]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[10]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[11]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[12]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[13]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[14]}}</li>
        <li class="text-sm text-gray-500 py-[2px]">{{recipe[15]}}</li>
      </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
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
      .then((response) => this.setRecipe(response.data.results.ingredient))
      .catch((error) => console.log(error));
  },
}
</script>