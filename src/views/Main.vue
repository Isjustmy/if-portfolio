<template>
  <div class="bg-black custom-gradient min-h-screen">

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
            <img src="../assets/ibnu-removebg-crop2.png" class="w-[90%] rounded-xl overflow-hidden relative z-10" />
          </div>
          <div class="w-1/2 text-left text-xl ml-10">
            <p>My name is Ibnu Fajar, and I am 17 years old. I am an experienced backend programmer proficient in
              various programming languages such as HTML, CSS, JavaScript, PHP, Python, and C++.</p>
            <p class="pt-5">Additionally, I am skilled in using various frameworks, particularly Laravel for backend
              development and Vue for frontend development. With this combination of knowledge, I am capable of building
              and managing efficient and scalable web applications.</p>

            <!-- button cv (Work in progress) -->
            <button class="btn bg-secondary-color-3 border-none mt-5">Download CV</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div id="skills" class="min-h-screen flex items-center justify-center">
      <div class="w-[85%] h-[500px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-4 font-bold">Skills Section</h1>
        <div class="w-[92%] h-[300px] text-center flex items-center justify-center">
          <div class="border border-white w-full">
            <p class="text-xl">Ini adalah beberapa stack teknologi yang saya kuasai.</p>
            <div class="flex border border-white w-[300px] items-center justify-center">
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
              <div class="flex flex-col">
                <img src="../assets/javascript.svg"
                  class="w-20 rounded-md overflow-hidden grayscale hover:grayscale-0 transition duration-150 ease-in-out" />
                <p class="font-semibold text-md">Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Project Section -->
    <div id="projects" class="min-h-screen flex items-center justify-center">
      <div>
        <h1 class="text-5xl font-bold">Projects Section</h1>
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
export default {
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
.custom-gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(38deg, rgba(0, 0, 0, 1) 80%, rgba(9, 121, 26, 1) 100%);
}

.font-dm-sans {
  font-family: 'DM Sans', sans-serif;
}

.text-secondary-color-4 {
  color: #58C25D;
  /* Adjust the color as per your theme */
}
</style>
