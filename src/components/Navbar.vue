<template>
  <div class="navbar w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 fixed top-0 left-0 z-10">
    <div class="flex-1">
      <a href="/" class="text-xl btn btn-ghost">Ibnu <p class="text-secondary-color-4">F.</p></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li class="btn btn-neutral border-transparent px-1"><a @click="scrollToSection('hero')">Home</a></li>
        <li class="btn btn-neutral border-transparent px-1"><a @click="scrollToSection('about')">About</a></li>
        <li class="btn btn-neutral border-transparent px-1"><a @click="scrollToSection('skills')">Skills</a></li>
        <li class="btn btn-neutral border-transparent px-1"><a @click="scrollToSection('projects')">Project</a></li>
        <li class="btn btn-neutral border-transparent px-1"><a @click="scrollToSection('contact')">Contact Me</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style>
</style>
