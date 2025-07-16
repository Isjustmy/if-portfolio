<template>
  <footer class="footer footer-center bg-[#188829] text-base-content p-4 font-dm-sans">
    <aside>
      <p class="text-lg">Made with hard work by IF.</p>
      <p class="text-md">{{ $t('note1') }}</p>
      <p class="text-md">{{ $t('note2') }}</p>
      <div class="flex">
        <a class="mr-2" href="https://www.instagram.com/if_insta205" target="_blank">
          <img id="instagramIcon" type="image/svg+xml" src="../assets/instagram.svg" />
        </a>
        <a class="ml-2" href="https://youtube.com/@if_inyoutube205" target="_blank">
          <img id="youtubeIcon" type="image/svg+xml" src="../assets/youtube.svg" />
        </a>
        <a class="ml-4" href="https://linkedin.com/in/ibnu-fajar-isjustmy" target="_blank">
          <img id="linkedinIcon" type="image/svg+xml" src="../assets/linkedin-icon.svg" />
        </a>
        <a class="ml-4" href="https://github.com/Isjustmy" target="_blank">
          <img id="githubIcon" type="image/svg+xml" src="../assets/github-icon.svg" />
        </a>
      </div>
    </aside>
  </footer>
</template>

<script>
export default {
  name: 'Fuuter'
}
</script>

<style>
.font-dm-sans {
  font-family: 'DM Sans', sans-serif;
}

#instagramIcon {
  filter: invert(1);
}

#youtubeIcon {
  filter: invert(1);
}

#linkedinIcon {
  filter: brightness(0) invert(1);
  width: 22px;
}

#githubIcon {
  filter: invert(1);
  width: 22px;
}

.icon-normalize {
  width: 32px;
  height: 32px;
}
</style>