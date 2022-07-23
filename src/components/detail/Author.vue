<template>
   <div>
      <h4 class="text-sm text-gray-500">By {{ authors }}</h4>
   </div>
</template>

<script>
import axios from "axios";

export default {
   data() {
      return {
         authors: [],
      };
   },
   methods: {
      setAuthor(data) {
         this.authors = data;
      },
   },
   mounted() {
      axios
         .get("https://masak-apa-tomorisakura.vercel.app/api/recipe/" + this.$route.params.key)
         .then((response) => this.setAuthor(response.data.results.author.user))
         .catch((error) => console.log(error));
   },
};
</script>
