<template>
  <div class="navbar w-full target-blur">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Ibnu <p class="text-secondary-color-4">F.</p></a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Skills</a></li>
      <li><a>Contact Me</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
.target-blur {
  background: transparent;
  backdrop-filter: blur(10px);
}
</style>