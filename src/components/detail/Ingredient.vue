<template>
    <div>
      <ul>
        <li>{{recipe[0]}}</li>
        <li>{{recipe[1]}}</li>
        <li>{{recipe[2]}}</li>
        <li>{{recipe[3]}}</li>
        <li>{{recipe[4]}}</li>
        <li>{{recipe[5]}}</li>
        <li>{{recipe[6]}}</li>
        <li>{{recipe[7]}}</li>
        <li>{{recipe[8]}}</li>
        <li>{{recipe[9]}}</li>
        <li>{{recipe[10]}}</li>
        <li>{{recipe[11]}}</li>
        <li>{{recipe[12]}}</li>
        <li>{{recipe[13]}}</li>
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