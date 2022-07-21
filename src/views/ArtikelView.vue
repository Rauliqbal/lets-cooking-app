<template>
    <div>
        <div
            class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"
        >
            <h1 class="text-9xl font-extrabold text-white tracking-widest">
                404
            </h1>
            <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
                <a
                    class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span
                        class="relative block px-8 py-3 bg-[#1A2238] border border-current"
                    >
                        <router-link to="/">Go Home</router-link>
                    </span>
                </a>
            </button>
        </div>

        <nav
            class="max-w-md mx-auto fixed inset-x-0 bottom-0 bg-white grid grid-cols-3 py-2"
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
export default {};
</script>

<style></style>
