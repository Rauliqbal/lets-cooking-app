<template>
    <div class="min-h-screen">
        <img class="h-[298px] w-full object-cover -mt-[107px]" src="../assets/images/bg-image.svg">

        <div class="grid grid-cols-3 items-center py-4 px-5 -mt-[184px]">
            <router-link
                to="/"
                class="w-10 h-10 flex items-center justify-center rounded-md bg-white"
            >
                <i class="bx bx-chevron-left text-3xl text-[#FF9F95]"></i>
            </router-link>

            <h3 class="text-lg font-bold text-center text-white">Resep</h3>
        </div>

        <div class="px-5">
            <form class="flex items-center relative mt-2" @submit.prevent="getData">
                <input
                class="w-full py-3 pl-3 pr-8 rounded-xl outline-none"
                type="text"
                v-model="query"
                @keyup="searcRecipe"
                placeholder="Telor, Nasi Goreng, Daging"
                />
                <i class="bx bx-search absolute right-3 text-2xl text-gray-400"></i>
            </form>

            <div>
                <div class="grid grid-cols-1 gap-4 mt-16 pb-20" v-if="data.length > 0">
                    <router-link :to="'/recipe/' + recipe.key"  v-for="recipe in data" :key="recipe.id" >
                        <div class="p-3 bg-[#f1f1f1] rounded-xl flex items-center">
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
                                        <span class="text-[10px]">{{
                                            recipe.times
                                        }}</span>
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

                <div v-else class="text-center">
                    <img class="w-80 mx-auto mt-16 mb-2" src="../assets/images/search.png" alt="">
                    <span class="text-lg">Temukan resep masakan disini</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            query: null,
            data: [],
        };
    },

    methods: {
        async getData() {
            await axios
                .get(
                    `https://masak-apa-tomorisakura.vercel.app/api/search/?q=${this.query}`
                )
                .then((response) => {
                    this.data = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
