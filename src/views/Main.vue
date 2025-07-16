<template>
  <div class="bg-black custom-gradient1 min-h-screen">
    <!-- Hero Section! -->
    <div id="hero" class="hero w-full min-h-screen flex items-center justify-center">
      <div class="hero-content text-center">
        <div class="text-center">
          <h1 class="text-[70px] font-bold font-dm-sans">
            {{ $t('welcomeMessage1') }}
            <span class="text-secondary-color-4 pl-3 font-dm-sans inline">{{ $t('nameInWelcomeMessage1') }}</span>
          </h1>
          <h2 class="pt-3 pb-10 text-2xl poppins-regular">{{ $t('shortDescription') }}</h2>
          <div class="w-full flex justify-center pt-2">
            <button @click="scrollToSection('about')"
              class="btn btn-primary flex flex-col w-[30%] h-[20%] items-center font-dm-sans ">
              <p class="pt-3 pb-1">{{ $t('textInButtonOnWelcome') }}</p>
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
        <h1 class="text-5xl font-bold">{{ $t('aboutMeTitle') }}</h1>
        <div class="flex mt-5 w-[90%] h-auto p-5 items-center justify-center">
          <div class="w-[300px] relative">
            <div class="bg-[#ACE1AF] absolute w-[280px] h-[333px] -ml-1.5 rounded-3xl"></div>
            <img src="../assets/ibnu-copy3.png" class="w-[90%] rounded-xl overflow-hidden relative z-5 mt-1" />
          </div>
          <div class="w-1/2 text-left text-xl ml-10">
            <p>
              {{ $t('descriptionAboutMe1') }}
            </p>
            <p class="pt-5">
              {{ $t('descriptionAboutMe2') }}
            </p>

            <!-- button cv (Work in progress) -->
            <button @click="downloadCV" class="btn bg-secondary-color-3 border-none mt-5">{{ $t('downloadTextButton')
            }}</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Skills Section -->
    <div id="skills" class="min-h-screen flex items-center justify-center font-dm-sans">
      <div class="w-[85%] h-[500px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-4 font-bold">{{ $t('skillsTitle') }}</h1>
        <div class="w-[95%] h-[300px]">
          <p class="text-[21px] text-center">{{ $t('skillsDescription') }}</p>
          <div class="flex flex-col items-center justify-center">
            <div class="flex w-full items-center justify-center mt-9">
              <div v-for="skill in programmingSkills" :key="skill.name" class="flex flex-col text-center mx-6">
                <a :href="skill.link" target="_blank" class="skills-link">
                  <img :src="skill.logo" class="skills-logo" :class="skill.class_for_logo" />
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
    <div id="projects" class="h-[190vh] flex items-center justify-center font-dm-sans">
      <div class="w-[90%] h-[550px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-6 font-bold">{{ $t('projectTitle') }}</h1>
        <p class="text-[21px] text-center">{{ $t('projectDescription') }}</p>
        <div class="flex induk-kartu items-center justify-center w-[100%] h-5/6 mt-8">

          <div class="card mr-8 w-[300px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <figure class="px-3 pt-3">
              <img src="../assets/kostkita_website_screenshot.png" alt="KostKita.id Landing Page Image"
                class="rounded-md" />
            </figure>
            <div class="h-[200px] mt-5 items-center text-center">
              <div class="h-[75%]">
                <h2 class="text-[20px] font-semibold pb-2 font-poppins">KostKita.id</h2>
                <p class="poppins-regular text-[14px] w-[80%] mx-auto text-center">{{
                  truncateDescription($t('kostkitaDescription')) }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank" href="https://kostkita.id"
                  class="btn bg-blue-700 hover:bg-blue-500 border-none ml-2">Website</a>
              </div>
            </div>
          </div>

          <div class="card ml-8 mr-8 w-[300px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <figure class="px-3 pt-3">
              <img src="../assets/landing page twinkypplg3.png" alt="Twinky PPLG 3 Landing Page Image"
                class="rounded-md" />
            </figure>
            <div class="h-[200px] mt-5 items-center text-center">
              <div class="h-[75%]">
                <h2 class="text-[20px] font-semibold pb-2 font-poppins">{{ $t('classWebsiteProjectTitle') }}</h2>
                <p class="poppins-regular text-[14px] w-[80%] mx-auto text-center">{{
                  truncateDescription($t('classWebsiteProjectDescription')) }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank" href="https://twinkyxipplgthree.pages.dev/"
                  class="btn bg-blue-700 hover:bg-blue-500 border-none ml-2">Website</a>
              </div>
            </div>
          </div>

          <div class="card ml-8 w-[300px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <figure class="px-3 pt-3">
              <img src="../assets/if portofolio.png" alt="IF Portofolio Image" class="rounded-md" />
            </figure>
            <div class="h-[200px] mt-5 items-center text-center">
              <div class="h-[75%]">
                <h2 class="text-[20px] font-semibold pb-2 font-poppins">IF Portofolio</h2>
                <p class="poppins-regular text-[14px] w-[80%] mx-auto text-center">{{ $t('ifPortofolioDescription') }}
                </p>
              </div>
              <div class="mt-2">
                <a target="_blank" href="https://ifportofolio.pages.dev/"
                  class="btn bg-blue-700 hover:bg-blue-500 border-none ml-2">Website</a>
              </div>
            </div>
          </div>

        </div>

        <div class="flex items-center justify-center w-[100%] h-5/6 mt-10">

          <div class="card mr-8 w-[300px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <figure class="px-3 pt-3">
              <img src="../assets/landing page ecommerce.png" alt="SMKCoding Ecommerce Image" class="rounded-md" />
            </figure>
            <div class="h-[200px] mt-5 items-center text-center">
              <div class="h-[75%]">
                <h2 class="text-[20px] font-semibold pb-2 font-poppins">SMKCoding Ecommerce</h2>
                <p class="poppins-regular text-[14px] w-[80%] mx-auto text-center">{{ $t('smkcodingProjectDescription')
                }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank" href="https://ecommerce-smkcoding.vercel.app/"
                  class="btn bg-blue-700 hover:bg-blue-500 border-none ml-2">Website</a>
              </div>
            </div>
          </div>

          <div class="card ml-8 w-[300px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <figure class="px-3 pt-3">
              <img src="../assets/landing page taskminder.png" alt="Taskminder Landing Page Image" class="rounded-md" />
            </figure>
            <div class="h-[200px] mt-5 items-center text-center">
              <div class="h-[75%]">
                <h2 class="text-[20px] font-semibold pb-2 font-poppins">Taskminder</h2>
                <p class="poppins-regular text-[14px] w-[80%] mx-auto text-center">{{ $t('taskminderDescription') }}</p>
              </div>
              <div class="mt-2">
                <button @click="openVideoModal" class="btn bg-purple-900 hover:bg-purple-600 border-none mr-2">{{
                  $t('taskminderTutorialButtonText') }}</button>
                <a target="_blank" href="https://taskminder.pplgsmkn1ciomas.my.id/"
                  class="btn bg-blue-700 hover:bg-blue-500 border-none ml-2">Website</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    <!-- Certificate Section -->
    <div id="certificates" class="h-[155vh] flex items-center justify-center font-dm-sans">
      <div class="w-[90%] h-[550px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-6 font-bold">{{ $t('certificateTitle') }}</h1>
        <p class="text-[21px] text-center">{{ $t('certificateDescription') }}</p>
        <div class="flex induk-kartu items-center justify-center w-[100%] h-5/6 mt-8">

          <div class="card mr-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[16px] font-semibold font-poppins">{{ $t('certificate_dicoding_javascript_title1') }}
                </h2>
                <h2 class="text-[18px] font-semibold pb-3 font-poppins w-[90%] content-center">{{
                  $t('certificate_dicoding_javascript_title2') }}</h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_dicoding_javascript_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1C3os093NQBwRDqW00oFa9vML5-LQOnOM/view?usp=sharing"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{
                    $t('certificate_dicoding_javascript_textButton') }}</a>
              </div>
            </div>
          </div>

          <div class="card mr-4 ml-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[16px] font-semibold font-poppins">{{ $t('certificate_dicoding_backend_title1') }}</h2>
                <h2 class="text-[18px] font-semibold pb-3  font-poppins">{{ $t('certificate_dicoding_backend_title2') }}
                </h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_dicoding_backend_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1uRZXRaOGNMcx0wy2Tk2GJVRe4Jf19Ltv/view?usp=sharing"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{
                    $t('certificate_dicoding_backend_textButton') }}</a>
              </div>
            </div>
          </div>

          <div class="card mr-4 ml-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[15px] font-semibold font-poppins">{{ $t('certificate_dicoding_logic_title1') }}</h2>
                <h2 class="text-[17px] font-semibold pb-3 font-poppins">{{ $t('certificate_dicoding_logic_title2') }}
                </h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_dicoding_logic_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/13t737HyeHhW_FGZYtpYr0RnN0ODwEmyl/view?usp=drive_link"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{ $t('certificate_dicoding_logic_textButton')
                  }}</a>
              </div>
            </div>
          </div>

          <div class="card ml-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[15px] font-semibold font-poppins">{{ $t('certificate_dicoding_basic_title1') }}</h2>
                <h2 class="text-[17px] font-semibold pb-3 font-poppins">{{ $t('certificate_dicoding_basic_title2') }}
                </h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_dicoding_basic_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1wt0UB4g4YUym3RjVofG89DHb-qzUY95z/view?usp=drive_link"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{ $t('certificate_dicoding_basic_textButton')
                  }}</a>
              </div>
            </div>
          </div>


        </div>

        <div class="flex items-center justify-center w-[100%] h-5/6 mt-8">

          <div class="card mr-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[16px] font-semibold font-poppins">{{ $t('certificate_dicoding_visualdata_title1') }}
                </h2>
                <h2 class="text-[18px] font-semibold pb-3  w-[90%] content-center font-poppins">{{
                  $t('certificate_dicoding_visualdata_title2') }}</h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_dicoding_visualdata_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1gEe2djXVphQ-rlppHvd5E62TJspl4clG/view?usp=drive_link"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{
                    $t('certificate_dicoding_visualdata_textButton') }}</a>
              </div>
            </div>
          </div>

          <div class="card mr-4 ml-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[16px] font-semibold font-poppins"></h2>
                <h2 class="text-[18px] font-semibold pb-3 w-[90%] content-center font-poppins h-[40%]">{{
                  $t('certificate_smkcoding_report_title') }}</h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_smkcoding_report_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1YDeqbbMPOtuOrHy8K4TI9Zqb4aWdwwY1/view?usp=drive_link"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{
                    $t('certificate_smkcoding_report_textButton') }}</a>
              </div>
            </div>
          </div>
          <div class="card ml-4 w-[250px] h-[300px] bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-xl">
            <div class="h-[200px] my-5 items-center text-center">
              <div class="h-[100%] flex flex-col items-center text-center">
                <h2 class="text-[16px] font-semibold font-poppins"></h2>
                <h2 class="text-[18px] font-semibold pb-3 w-[90%] content-center font-poppins h-[40%]">{{
                  $t('certificate_smkcoding_title') }}</h2>
                <p class="poppins-regular text-[14px] w-[90%] h-[50%] mx-auto text-center">{{
                  $t('certificate_smkcoding_description') }}</p>
              </div>
              <div class="mt-2">
                <a target="_blank"
                  href="https://drive.google.com/file/d/1NqZsfWeT5TlWiiHrIjMcqkM2j3WfF3-Y/view?usp=drive_link"
                  class="btn bg-green-700 hover:bg-green-500 border-none">{{ $t('certificate_smkcoding_textButton')
                  }}</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    <!-- Contact Me Section -->
    <div id="contact" class="h-[120vh] flex items-center justify-center font-dm-sans">
      <div class="w-[90%] h-[550px] flex flex-col items-center justify-center">
        <h1 class="text-5xl mb-6 font-bold">{{ $t('contactMeTitle') }}</h1>
        <p class="text-[23px] text-center">{{ $t('contactMeDescription') }}</p>
        <div class="flex items-center justify-center w-[100%] h-[60%]">
          <div class="w-[60%] h-[90%] bg-[#064C10] rounded-lg flex">
            <div class="w-1/2 flex">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <p class="mb-2 text-lg">{{ $t('contactMeMessage') }}</p>
                <textarea v-model="userMessage" :placeholder="$t('contactMeMessagePlaceholder')"
                  class="text-black p-2 w-[90%] h-[80%] border-none hover:border hover:border-black rounded-xl bg-white shadow-xl"></textarea>
              </div>
            </div>
            <div class="w-1/2">
              <div class="h-full w-full">
                <div class="ml-6 mt-12 w-full h-full">
                  <div class="">
                    <p class="pl-1 pb-1">{{ $t('contactMeName') }}</p>
                    <input v-model="userName" :placeholder="$t('contactMeNamePlaceholder')"
                      class="w-[80%] h-[40px] text-black pl-2 rounded-lg bg-white shadow-xl border-none hover:border" />
                  </div>
                  <div class="mt-5">
                    <p class="pl-1 pb-1">{{ $t('contactMeEmail') }}</p>
                    <input v-model="userEmail" :placeholder="$t('contactMeEmailPlaceholder')"
                      class="w-[80%] h-[40px] text-black pl-2 rounded-lg bg-white shadow-xl border-none hover:border" />
                  </div>
                  <button @click="sendEmail" v-if="!isLoading" :disabled="isLoading"
                    class="btn mt-5 bg-blue-700 border-none hover:bg-blue-800">{{
                      $t('contactMeButtonText') }}</button>
                  <button v-if="isLoading" disabled class="btn mt-5 bg-blue-700 border-none hover:bg-blue-800">
                    <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"></path>
                    </svg>
                    {{ $t('loadingText') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Pop up video tutorial -->
    <dialog id="video-modal" class="modal">
      <div style="max-width: 40%;" class="modal-box bg-[#115a1c] flex items-center justify-center">
        <span style="font-size: 14px; cursor: pointer; position: absolute; top: 10px; right: 10px">
          <button @click="openVideoInNewTab"
            class="close btn bg-blue-700 hover:bg-blue-900 border-none mr-4 text-white">
            {{ $t('taskminderPopupCheckMoreButtonText') }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
          <button @click="closeVideoModal" class="btn bg-red-600 hover:bg-red-800 border-none text-white">{{
            $t('taskminderPopupCloseButtonText') }}</button>
        </span>
        <iframe class="mt-14" alt="Taskminder Tutorial" width="560" height="315" :src="videoUrl"
          title="Taskminder Tutorial Video" frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </dialog>

  </div>
</template>

<script>
import { programming_languages, frameworks } from '../data/skills.js';
import Cookies from 'js-cookie';
import { useToast } from "vue-toastification";
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      programming_languages,
      frameworks,
      videoUrl: '',
      // untuk data pada contact
      userName: '',
      userEmail: '',
      userMessage: '',
      toast: useToast(),
      isLoading: false,
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
    downloadCV() {
      // Mendapatkan nilai cookies menggunakan js-cookie
      const language = Cookies.get('language');

      // Menentukan jalur file yang akan diunduh
      let filePath;
      if (language === 'id') {
        filePath = '/cv/CV_Ibnu Fajar (Bahasa Indonesia.pdf';
      } else if (language === 'en') {
        filePath = '/cv/CV_Ibnu Fajar (english version).pdf';
      } else {
        // Jika tidak ada cookies atau nilai cookies tidak sesuai
        console.error('Unexpected error happen.');
        return;
      }

      // Membuat elemen link untuk mengunduh file
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filePath.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    sendEmail() {
      this.isLoading = true
      const templateParams = {
        name_from: this.userName,
        email_from: this.userEmail,
        message: this.userMessage,
      };
      emailjs.send('service_j2w0stk', 'template_rfawbzv', templateParams, {
        publicKey: 'CAjdSnGzLjdY5Ns04',
      })
        .then(
          () => {
            this.isLoading = false
            this.userName = ''
            this.userEmail = ''
            this.userMessage = ''
            this.toast.success(this.$t('contactMeAlertSuccess'), {
              position: "top-center",
              timeout: 2500,
              hideProgressBar: false,
            });
          },
          (error) => {
            this.isLoading = false
            this.userName = ''
            this.userEmail = ''
            this.userMessage = ''
            console.log(error)
            this.toast.error(this.$t('contactMeAlertError'), {
              position: "top-center",
              timeout: 2500,
              hideProgressBar: false,
            });
          },
        );
    },
    truncateDescription(description) {
      const maxChars = 110;
      if (description.length <= maxChars) return description;

      // Potong di batas karakter, lalu cari spasi terakhir
      let truncated = description.slice(0, maxChars);
      const lastSpace = truncated.lastIndexOf(' ');
      if (lastSpace > 0) {
        truncated = truncated.slice(0, lastSpace);
      }
      return truncated.trim() + '...';
    },
    openVideoModal() {
      this.videoUrl = 'https://www.youtube.com/embed/UW-HV1Ik7Uw?si=c1SdLYQCVNKvtorD';
      const modal = document.getElementById('video-modal');
      if (modal) {
        modal.showModal();
      }
    },
    closeVideoModal() {
      const modal = document.getElementById('video-modal');
      if (modal) {
        modal.close();
      }
      this.videoUrl = '';  // Stop the video
    },
    openVideoInNewTab() {
      window.open('https://youtu.be/UW-HV1Ik7Uw?si=5AGMw6va6qikP2q7', '_blank');
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

<style scoped>
@import '../assets/font.css';
@import '../assets/responsive.css';

.custom-gradient1 {
  background: rgb(0, 0, 0);
  background: linear-gradient(38deg, rgba(0, 0, 0, 1) 80%, rgba(9, 121, 26, 1) 100%);
}

.custom-gradient2 {
  background: rgb(0, 0, 0);
  background: linear-gradient(38deg, rgba(0, 0, 0, 1) 80%, rgba(9, 121, 26, 1) 100%);
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

.skills-logo.nuxt:hover {
  filter: drop-shadow(0 0 15px rgba(39, 174, 96, 0.6));
  /* Green color for Nuxt.js */
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

.skills-logo.nuxt {
  width: 100px;
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

.nuxt-name {
  padding-top: 23px;
}

/* end */
</style>
