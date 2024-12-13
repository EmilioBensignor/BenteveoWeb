<template>
  <section>
    <div class="w-full projectsContainer">
      <article v-for="(project, index) in projects" :key="index" :ref="'tiltProject' + index"
        class="tiltProject">
        <div class="w-full h-full flex">
          <!-- :to="`/projects/${project.slug}`"
          :aria-label="`See more about ${project.title}`" -->
          <img :src="`/images/projects/${project.img}-Lime-Devs-Project.webp`" :alt="project.alt"
            class="w-full h-full" />
          <div class="projectInfo">
            <h3 class="text-center text-white">{{ project.title }}</h3>
            <p class="text-center text-white">{{ project.service }}</p>
            <!-- <p class="seeMore text-white underline">See more</p> -->
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  import { projects } from "~/shared/projects";

  export default {
    data() {
      return {
        projects: projects,
      };
    },
    mounted() {
      this.projects.forEach((_, index) => {
        const tiltElementDesktop = this.$refs[`tiltProject${index}`][0];
        if (this.$vanillaTilt) {
          this.$vanillaTilt(tiltElementDesktop, {
            max: 20,
            speed: 600,
          });
        }
      });
      const tiltNextProject = this.$refs[`tiltProject${6}`];
      if (this.$vanillaTilt) {
        this.$vanillaTilt(tiltNextProject, {
          max: 20,
          speed: 600,
        });
      }
    },
  };
</script>

<style scoped>
  .projects {
    gap: 1.25rem;
    padding: 2rem 0 2rem 1.5rem;
  }

  h2 {
    padding-right: 1rem;
  }

  .tiltProject {
    height: 100%;
    background-color: #39385ef2;
    border-radius: 18px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    /* cursor: pointer; */
  }

  .tiltProject img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .tiltProject:hover img {
    transform: scale(1.05);
  }

  .projectInfo {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem 0;
    background: #39385ef2;
  }

  .projectInfo h3 {
    font-size: 1.125rem;
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
  }

  .projectInfo p {
    font-size: 0.75rem;
    text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
  }

  .tiltProject .seeMore {
    opacity: 0;
    transition: all 0.3s ease;
  }

  .tiltProject:hover .seeMore {
    opacity: 1;
  }

  @media (width >= 700px) {
    .projects {
      gap: 2rem;
      padding: 2.75rem 0 2.75rem 3.75rem;
    }

    h2 {
      width: 100%;
      text-align: start;
      padding-right: 3.75rem;
    }

    .projectInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.375rem;
      padding: 0.875rem;
    }

    .projectInfo h3 {
      font-size: 1.25rem;
    }

    .projectInfo p {
      font-size: 0.875rem;
    }
  }

  @media (width >= 850px) {

    .projectInfo h3 {
      font-size: 1.375rem;
    }

    .projectInfo p {
      font-size: 1rem;
    }
  }

  @media (width >= 1080px) {
    .projects {
      gap: 0;
      padding: 3.75rem 5.625rem;
    }

    h2 {
      padding: 0;
    }

    .projectsContainer {
      width: 100%;
      height: 81rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      position: relative;
    }

    .projectsContainer article {
      width: 11rem;
      height: 16rem;
      position: absolute;
      border-radius: 12px;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      will-change: transform;
      overflow: visible;
    }

    .projectsContainer img {
      object-fit: cover;
      border-radius: 12px;
    }

    .projectsContainer article:nth-child(1) {
      top: 5.063rem;
      left: 0;
    }
    .projectsContainer article:nth-child(2) {
      top: 13.5rem;
      right: 0;
      left: 27%;
    }
    .projectsContainer article:nth-child(3) {
      top: 2.313rem;
      right: 27%;
    }
    .projectsContainer article:nth-child(4) {
      top: 8rem;
      right: 0;
    }
    .projectsContainer article:nth-child(5) {
      top: 26rem;
      left: 0;
    }
    .projectsContainer article:nth-child(6) {
      top: 34rem;
      left: 27%;
    }
    .projectsContainer article:nth-child(7) {
      top: 24rem;
      right: 27%;
    }
    .projectsContainer article:nth-child(8) {
      top: 30rem;
      right: 0;
    }
    .projectsContainer article:nth-child(9) {
      top: 48rem;
      left: 0;
    }
    .projectsContainer article:nth-child(10) {
      top: 56rem;
      left: 27%;
    }
    .projectsContainer article:nth-child(11) {
      top: 44rem;
      right: 27%;
    }
    .projectsContainer article:nth-child(12) {
      top: 52rem;
      right: 0;
    }

    .projectInfo {
      background-color: transparent;
    }

    .projectInfo {
      transform: translateZ(20px);
    }

    .projectInfo {
      height: 100%;
      align-items: flex-start;
      gap: 0.75rem;
      z-index: 1;
      top: 25%;
      left: 0;
    }

    .projectInfo h3 {
      max-width: 100%;
      text-align: start !important;
      position: relative;
      z-index: 2;
      font-size: 1.5rem;
      margin-left: -2.5rem;
    }

    .projectInfo p {
      text-align: start !important;
      font-size: 1rem;
    }
  }

  @media (width >= 1280px) {
    .projectsContainer {
      height: 94rem;
    }

    .projectsContainer article {
      width: 13rem;
      height: 18rem;
    }

    .projectsContainer article:nth-child(5) {
      top: 30rem;
    }
    .projectsContainer article:nth-child(6) {
      top: 38rem;
    }
    .projectsContainer article:nth-child(7) {
      top: 28rem;
    }
    .projectsContainer article:nth-child(8) {
      top: 34rem;
    }
    .projectsContainer article:nth-child(9) {
      top: 56rem;
    }
    .projectsContainer article:nth-child(10) {
      top: 64rem;
    }
    .projectsContainer article:nth-child(11) {
      top: 52rem;
    }
    .projectsContainer article:nth-child(12) {
      top: 60rem;
    }
  }

  @media (width >= 1440px) {
    .projectsContainer {
      height: 105rem;
    }

    .projectsContainer article {
      width: 15rem;
      height: 20rem;
    }

    .projectsContainer article:nth-child(5) {
      top: 34rem;
    }
    .projectsContainer article:nth-child(6) {
      top: 42rem;
    }
    .projectsContainer article:nth-child(7) {
      top: 32rem;
    }
    .projectsContainer article:nth-child(8) {
      top: 38rem;
    }
    .projectsContainer article:nth-child(9) {
      top: 64rem;
    }
    .projectsContainer article:nth-child(10) {
      top: 70rem;
    }
    .projectsContainer article:nth-child(11) {
      top: 58rem;
    }
    .projectsContainer article:nth-child(12) {
      top: 66rem;
    }
  }

  @media (width >= 1650px) {
    .projectsContainer {
      height: 110rem;
    }

    .projectsContainer article {
      width: 17rem;
      height: 22rem;
    }

    .projectsContainer article:nth-child(10) {
      top: 74rem;
    }

    .projectsContainer article:nth-child(11) {
      top: 60rem;
    }

    .projectsContainer article:nth-child(12) {
      top: 69rem;
    }
  }

  @media (width >= 1920px) {
    .projectsContainer {
      height: 122rem;
    }

    .projectsContainer article {
      width: 19rem;
      height: 24rem;
    }

    .projectsContainer article:nth-child(5) {
      top: 39rem;
    }
    .projectsContainer article:nth-child(6) {
      top: 46rem;
    }
    .projectsContainer article:nth-child(7) {
      top: 36rem;
    }
    .projectsContainer article:nth-child(8) {
      top: 42rem;
    }
    .projectsContainer article:nth-child(9) {
      top: 72rem;
    }
    .projectsContainer article:nth-child(10) {
      top: 81rem;
    }
    .projectsContainer article:nth-child(11) {
      top: 67rem;
    }
    .projectsContainer article:nth-child(12) {
      top: 76rem;
    }
  }
</style>
