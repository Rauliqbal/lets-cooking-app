<template>
    <div class="px-5 min-h-screen">
        <div class="grid grid-cols-3 items-center py-4">
            <router-link
                to="/"
                class="w-10 h-10 flex items-center justify-center rounded-md bg-white"
            >
                <i class="bx bx-chevron-left text-3xl text-[#FF9F95]"></i>
            </router-link>

            <h3 class="text-lg font-bold text-center text-gray-900">Kategori </h3>
        </div>

        <CategoryCard @click="reloadPage" class="mt-2"/>

        <div class="grid grid-cols-1 gap-4 mt-4 pb-4">
            <router-link
            :to="'/recipe/' + recipe.key"
            class="bg-[#f1f1f1] rounded-xl"
            v-for="recipe in recipes"
            :key="recipe.id"
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
                            <i
                                class="bx bx-time-five text-green-500 text-lg"
                            ></i>
                            <span class="text-[10px]">{{ recipe.times }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i
                                class="bx bx-food-menu text-orange-400 text-lg"
                            ></i>
                            <span class="text-[10px]">{{
                                recipe.dificulty
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CategoryCard from '../components/CategoryCard.vue'

export default {
    components: {CategoryCard},
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        setRecipes(data) {
            this.recipes = data;
        },
        reloadPage() {
           window.setTimeout(function(){location.reload()},300)
        },
    },
    mounted() {
        axios
            .get(
                "https://masak-apa-tomorisakura.vercel.app/api/category/recipes/" +
                    this.$route.params.key
            )
            .then((response) => this.setRecipes(response.data.results))
            .catch((error) => console.log(error));
    },
};
</script>
