<template> 
    <div class="bg-[#f1f1f1] rounded-xl">
        <div class="p-4">
            <img class="object-cover w-full h-56  rounded-lg" :src="recipe.thumb" alt="">
        </div>
        <div class="px-5 pb-5 py-2 relative z-10">
            <span class="text-red-400 text-[12px] bg-red-200 py-1 px-3 inline-flex rounded-full absolute -mt-[38px] ml-3 font-semibold">{{recipe.category}}</span>
            <h2 class="recipe_title text-lg">{{recipe.title}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:['recipe']
}
</script>