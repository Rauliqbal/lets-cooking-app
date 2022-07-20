<template>
  <div class="max-w-md bg-[#f1f1f1] mx-auto">
    <nav class="fixed inset-x-0 bottom-0 bg-white grid grid-cols-3 py-2">
        <router-link  to="/" class="nav-link" active-class="active-link">
            <i class="bx bx-home-alt text-2xl "></i>
            <span class="text-sm mt-1 ">Home</span>
        </router-link>
        <router-link  to="/recipe" class="nav-link" active-class="active-link">
            <i class="bx bx-food-menu text-2xl "></i>
            <span class="text-sm mt-1 ">Resep</span>
        </router-link>
        <router-link  to="/artikel" class="nav-link" active-class="active-link">
            <i class="bx bx-book text-2xl "></i>
            <span class="text-sm mt-1 ">Artikel</span>
        </router-link>
    </nav>

    <PageLoader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import PageLoader from "../src/components/PageLoader.vue";
export default {
  components: { PageLoader },
};
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
