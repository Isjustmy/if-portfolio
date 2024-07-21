<template>
  <div>
    <Navbar class="z-10 fixed top-0 w-full" />
    <div>
      <router-view />
    </div>
    <Fuuter />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Fuuter from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Fuuter
  }
}
</script>

<style>
</style>