<template>
  <div class="max-w-md bg-[#f1f1f1] mx-auto">
    <nav class="fixed inset-x-0 bottom-0 bg-white">
      <router-link to="/">Home</router-link>
      <router-link to="/recipe">About</router-link>
      <router-link to="/artikel">artikel</router-link>
    </nav>

  <PageLoader/>
   <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
   </router-view>
  </div>
</template>

<script>
import PageLoader from '../src/components/PageLoader.vue'
export default {
  components: {PageLoader}
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all .3 ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all .3s ease-in;
}
</style>