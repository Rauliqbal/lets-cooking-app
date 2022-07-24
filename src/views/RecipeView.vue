<template>
    <div class="px-5 min-h-screen">
        <div class="fixed inset-x-0 max-w-md mx-auto -mt-[130px]">
            <img class="h-[298px] w-full object-cover -mt-[162px]" src="../assets/images/bg-image.svg">

            <div class="grid grid-cols-3 items-center py-4 px-5 -mt-[111px]">
                <router-link
                    to="/"
                    class="w-10 h-10 flex items-center justify-center rounded-md bg-white"
                >
                    <i class="bx bx-chevron-left text-3xl text-[#FF9F95]"></i>
                </router-link>

                <h3 class="text-lg font-bold text-center text-white">Resep</h3>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-28 pb-20" v-if="recipes.length > 0">
            <div v-for="recipe in recipes" :key="recipe.id">
                <RecipeCard :recipe="recipe"/>
            </div>
        </div>

        <div v-else>
            <PageLoader/>
        </div>

        <nav
            class="max-w-md mx-auto fixed inset-x-0 bottom-0 bg-white grid grid-cols-3 py-2 z-50"
        >
            <router-link to="/" class="nav-link" active-class="active-link">
                <i class="bx bx-home-alt text-2xl"></i>
                <span class="text-sm mt-1">Home</span>
            </router-link>
            <router-link
                to="/recipe"
                class="nav-link"
                active-class="active-link"
            >
                <i class="bx bx-food-menu text-2xl"></i>
                <span class="text-sm mt-1">Resep</span>
            </router-link>
            <router-link
                to="/artikel"
                class="nav-link"
                active-class="active-link"
            >
                <i class="bx bx-book text-2xl"></i>
                <span class="text-sm mt-1">Artikel</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
import axios from "axios"
import RecipeCard from "../components/RecipeCard.vue";
import PageLoader from "../components/PageLoader.vue"

export default {
    components: { RecipeCard,PageLoader },

    data() {
        return {
            search: "",
            recipes: [],
        };
    },

    methods: {
        setRecipes(data) {
            this.recipes = data;
        },

        searchRecipe() {
            axios
                .get("https://masak-apa-tomorisakura.vercel.app/api/recipes?q=" + this.search)
                .then((response) => this.setRecipes(response.data.results))
                .catch((error) => console.log(error));
        },
    },
    mounted() {
        axios 
             .get("https://masak-apa-tomorisakura.vercel.app/api/recipes/1")
                .then((response) => this.setRecipes(response.data.results))
                .catch((error) => console.log(error));
    }
};
</script>

