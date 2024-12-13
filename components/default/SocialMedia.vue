<template>
  <ul class="socialMedia rowCenter">
    <li v-for="(media, index) in socialMedia" :key="index">
      <a :href="media.link" target="_blank">
        <Icon :name="`mdi:${media.icon}`" class="text-white" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          link: "https://www.facebook.com/BenteveoCoworkers/",
          icon: "facebook",
        },
        {
          link: "https://www.instagram.com/benteveo_coworkers/",
          icon: "instagram",
        },
        {
          link: "https://vimeo.com/benteveo",
          icon: "vimeo",
        },
        {
          link: "https://www.linkedin.com/company/benteveo/",
          icon: "linkedin",
        },
      ],
    }
  }
}
</script>

<style scoped>
.socialMedia {
  gap: 0.625rem;
}
</style>