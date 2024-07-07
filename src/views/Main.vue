<template>
  <div class="bg-black custom-gradient1 min-h-screen">
    <!-- Hero Section! -->
    <div id="hero" class="hero w-full min-h-screen flex items-center justify-center">
      <div class="hero-content text-center">
        <div class="text-center">
          <h1 class="text-[70px] font-bold font-dm-sans">
            Hello, I'm
            <span class="text-secondary-color-4 pl-3 font-dm-sans inline">Ibnu Fajar</span>
          </h1>
          <h2 class="pt-3 pb-10 text-2xl">A Person who loves backend programming.</h2>
          <div class="w-full flex justify-center pt-2">
            <button @click="scrollToSection('about')"
              class="btn btn-primary flex flex-col w-[30%] h-[20%] items-center">
              <p class="pt-3 pb-1">Check More About Me</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                class="bi bi-arrow-down pb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div id="about" class="min-h-screen flex items-center justify-center font-dm-sans">
      <div class="text-center flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold">About Me</h1>
        <div class="flex mt-5 w-[90%] h-auto p-5 items-center justify-center">
          <div class="w-[300px] relative">
            <div class="bg-[#ACE1AF] absolute w-[280px] h-[333px] -ml-1.5 rounded-3xl"></div>
            <img src="../assets/ibnu-removebg-crop2.png" class="w-[90%] rounded-xl overflow-hidden relative z-5" />
          </div>
          <div class="w-1/2 text-left text-xl ml-10">
            <p>
              My name is Ibnu Fajar, and I am 17 years old. I am an experienced backend programmer
              proficient in various programming languages such as HTML, CSS, JavaScript, PHP,
              Python, and C++.
            </p>
            <p class="pt-5">
              Additionally, I am skilled in using various frameworks, particularly Laravel for
              backend development and Vue for frontend development. With this combination of
              knowledge, I am capable of building and managing efficient and scalable web
              applications.
            </p>

            <!-- button cv (Work in progress) -->
            <button class="btn bg-secondary-color-3 border-none mt-5">Download CV</button>
          </div>
        </div>
      </div>
    </div>


     <!-- Skills Section -->
     <div id="skills" class="min-h-screen flex items-center justify-center">
      <div class="w-[85%] h-[500px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-6 font-bold">Skills</h1>
        <div class="w-[92%] h-[300px]">
          <p class="text-xl text-center">Here are the programming languages and frameworks I am proficient in.</p>
          <div class="flex flex-col items-center justify-center">
            <div class="flex w-full items-center justify-center mt-7">
              <div v-for="skill in programmingSkills" :key="skill.name" class="flex flex-col text-center mx-6">
                <a :href="skill.link" target="_blank" class="skills-link">
                  <img :src="skill.logo" class="skills-logo" :class="skill.class_for_logo"  />
                  <p class="font-semibold text-md" :class="skill.class_for_name">{{ skill.name }}</p>
                </a>
              </div>
              <div class="border-white border-[4px] flex rounded-lg ml-4 p-2 relative">
                <div v-for="framework in frameworkSkills" :key="framework.name" class="flex flex-col text-center mx-5">
                  <a :href="framework.link" target="_blank" class="skills-link">
                    <img :src="framework.logo" class="skills-logo" :class="framework.class_for_logo" />
                    <p class="font-semibold text-md" :class="framework.class_for_name">{{ framework.name }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Project Section -->
    <div id="projects" class="min-h-screen items-center justify-center">
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold">Projects</h1>
        <p class="text-xl">Here's my project that I've worked on.</p>
      </div>
      <div class="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Taskminder</h2>
            <p>(deskripsi taskminder)</p>
            <div class="card-actions">
              <button class="btn bg-purple-900 border-none">Lihat Tutorial</button>
              <button class="btn bg-blue-700 border-none">Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Contact Me Section -->
    <div id="contact" class="min-h-screen flex items-center justify-center">
      <div>
        <h1 class="text-5xl font-bold">Contact Me Section</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { programming_languages, frameworks } from '../data/skills.js';

export default {
  data() {
    return {
      programming_languages,
      frameworks
    };
  },
  computed: {
    programmingSkills() {
      return this.programming_languages;
    },
    frameworkSkills() {
      return this.frameworks;
    }
  },
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

<style scoped>
.custom-gradient1 {
  background: rgb(0, 0, 0);
  background: linear-gradient(38deg, rgba(0, 0, 0, 1) 80%, rgba(9, 121, 26, 1) 100%);
}

.custom-gradient2 {
  background: rgb(0, 0, 0);
  background: linear-gradient(38deg, rgba(0, 0, 0, 1) 80%, rgba(9, 121, 26, 1) 100%);
}

.font-dm-sans {
  font-family: 'DM Sans', sans-serif;
}

.text-secondary-color-4 {
  color: #58c25d;
  /* Adjust the color as per your theme */
}

/* glowing effect in logos */
.skills-logo {
  width: 80px;
  /* ukuran default gambar logo */
  border-radius: 8px;
  /* sudut bulat untuk gambar */
  transition: filter 0.2s ease-in-out;
  /* transisi halus untuk efek drop-shadow */
}

.skills-logo:hover {
  filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.6));
  /* ganti rgba sesuai dengan warna logo */
}

/* Efek hover khusus untuk masing-masing logo */
.skills-logo.javascript:hover {
  filter: drop-shadow(0 0 15px rgba(240, 219, 79, 0.6));
  /* Warna kuning untuk JavaScript */
}

.skills-logo.php:hover {
  filter: drop-shadow(0 0 15px rgba(79, 93, 149, 0.6));
  /* Warna biru untuk PHP */
}

.skills-logo.python:hover {
  filter: drop-shadow(0 0 15px rgba(53, 114, 165, 0.6));
  /* Warna biru untuk Python */
}

.skills-logo.cplusplus:hover {
  filter: drop-shadow(0 0 15px rgba(75, 146, 219, 0.6));
  /* Warna biru untuk C++ */
}

.skills-logo.java:hover {
  filter: drop-shadow(0 0 15px rgba(0, 123, 255, 0.6));
  /* Blue color for Java, matching the cup color */
}

.skills-logo.laravel:hover {
  filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.6));
  /* Warna merah untuk Laravel */
}

.skills-logo.vue:hover {
  filter: drop-shadow(0 0 15px rgba(65, 184, 131, 0.6));
  /* Warna hijau untuk Vue */
}
/* end */

/* Untuk merapihkan gambar logo bahasa pemrograman dan framework */
.skills-logo.javascript {
  margin-top: 20px;
}

.skills-logo.php {
  width: 120px;
  margin-top: 30px;
}

.skills-logo.python {
  margin-top: 20px;
}

.skills-logo.cplusplus {
  margin-top: 15px;
}

/* framework */
.skills-logo.laravel {
  margin-top: 10px;
}

.skills-logo.vue {
  margin-top: 20px;
}
/* end */

/* Untuk merapihkan nama logo bahasa pemrograman dan framework */
.javascript-name {
  padding-top: 20px;
}

.php-name {
  padding-top: 30px;
}

.python-name {
  padding-top: 20px;
}

.cplusplus-name {
  padding-top: 22px;
}

.java-name {
  padding-top: 20px;
}

/* framework */
.laravel-name {
  padding-top: 20px;
}

.vue-name {
  padding-top: 20px;
}
/* end */
</style>
