<template>
  <div
    class="navbar w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 fixed top-0 left-0 z-10">
    <div class="flex-1 font-dm-sans">
      <a href="/" class="text-xl btn btn-ghost">Ibnu <p class="text-secondary-color-4">F.</p></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('hero')">{{ $t('navbarHomeButtonText') }}</a></li>
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('about')">{{ $t('navbarAboutButtonText') }}</a></li>
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('skills')">{{ $t('navbarSkillsButtonText') }}</a></li>
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('projects')">{{ $t('navbarProjectsButtonText') }}</a></li>
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('certificates')">{{ $t('navbarCertificatesButtonText') }}</a></li>
        <li class="btn btn-neutral border-transparent px-1 text-[14px] poppins-medium"><a
            @click="scrollToSection('contact')">{{ $t('navbarContactButtonText') }}</a></li>
        <div class="flex items-center justify-center">
          <p class="text-sm mr-2">ID</p>
          <input type="checkbox" class="toggle border-slate-700 bg-green-700 [--tglbg:white] hover:bg-blue-700" :checked="isEnglish" @change="toggleLanguage" />
          <p class="text-sm ml-2">EN</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Navbar',
  data() {
    return {
      isEnglish: this.$i18n.locale === 'en',
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
      Cookies.set('language', lang);
      this.isEnglish = lang === 'en';
    },
    toggleLanguage() {
      const newLang = this.isEnglish ? 'id' : 'en';
      this.setLanguage(newLang);
    },
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
@import '../assets/font.css';
</style>
