<template>
  <div class="bg-[#f1f1f1] rounded-xl">
    <router-link
    :to="'/recipe/' + recipe.key"
    
  >
    <div class="p-3 flex items-center">
      <img
        class="rounded-lg w-24 h-28 object-cover"
        :src="recipe.thumb"
        :alt="'photo ' + recipe.title"
      />
      <div class="py-2 pl-3">
        <h2 class="recipe_title">{{ recipe.title }}</h2>
        <div class="flex mt-4">
          <div class="w-[86px] flex items-center gap-1">
            <i class="bx bx-time-five text-green-500 text-lg"></i>
            <span class="text-[10px]">{{ recipe.times }}</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="bx bx-food-menu text-orange-400 text-lg"></i>
            <span class="text-[10px]">{{ recipe.dificulty }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
  </div>
</template>

<script>

export default {
  props: ['recipe']
};
</script>
