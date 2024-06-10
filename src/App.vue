<template>
  <div>
    <Navbar class="z-10 fixed top-0 w-full" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>