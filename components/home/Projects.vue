<template>
  <section>
    <div class="w-full projectsContainer columnAlignCenter">
      <article v-for="(project, index) in projects" :key="index" :ref="'tiltProject' + index"
        class="tiltProject wow animate__animated animate__fadeInUp">
        <div class="w-full h-full flex">
          <!-- :to="`/projects/${project.slug}`"
          :aria-label="`See more about ${project.title}`" -->
          <img :src="`/images/projects/${project.brand}-proyecto-Benteveo.webp`" :alt="`${project.altBrand}`"
            class="brandImg" />
          <img :src="`/images/projects/${project.img}-proyecto-Benteveo.webp`"
            :alt="`${project.altImg} Proyecto Benteveo`" class="w-full h-full projectImg" />
          <div class="projectInfo">
            <h3 class="text-center text-white">{{ project.title }}</h3>
            <p class="text-center text-white">{{ project.text }}</p>
            <NuxtLink to="#" class="seeMore text-white">CONOCÉ MÁS</NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { projects } from "~/shared/projects";
import VanillaTilt from 'vanilla-tilt';

export default {
  data() {
    return {
      projects: projects,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.projects.forEach((_, index) => {
        const tiltElement = this.$refs[`tiltProject${index}`][0];
        if (tiltElement) {
          VanillaTilt.init(tiltElement, {
            max: 20,
            speed: 600,
            glare: true,
            "max-glare": 0.2,
          });
        }
      });
    });
  },
  beforeDestroy() {
    this.projects.forEach((_, index) => {
      const tiltElement = this.$refs[`tiltProject${index}`][0];
      if (tiltElement && tiltElement.vanillaTilt) {
        tiltElement.vanillaTilt.destroy();
      }
    });
  },
};
</script>

<style scoped>
.projectsContainer {
  gap: 3.5rem;
}

.tiltProject {
  width: 15rem;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  will-change: transform;
  overflow: visible;
  transition: all 0.3s;
  /* cursor: pointer; */
}

.tiltProject .projectImg {
  object-fit: cover;
}

.brandImg {
  height: 1.875rem;
  position: absolute;
  top: -1rem;
  left: 1rem;
  z-index: 2;
  object-fit: contain;
  opacity: 0;
  transition: all 0.3s;
}

.projectInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 0;
  transform: translateZ(20px);
  margin-left: 0.5rem;
  padding: 0 1rem 1rem 1rem;
}

.projectInfo h3 {
  max-width: 100%;
  position: relative;
  z-index: 2;
  text-align: start !important;
  font-size: 1.75rem;
  margin-left: -2.5rem;
  transition: all 0.3s;
}

.projectInfo p {
  text-align: start !important;
}

.tiltProject .seeMore {
  opacity: 0;
  border-bottom: 1px solid var(--color-white);
  font-family: "Fjalla One", sans-serif;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 2px;
  transition: all 0.3s;
}

.tiltProject:hover .seeMore,
.tiltProject:hover .brandImg {
  opacity: 1;
}

.tiltProject:hover h3 {
  text-shadow: 2px 10px 10px rgba(0, 0, 0, 0.85);
}

@media (width >=660px) {
  .projectsContainer {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 6rem;
    padding-bottom: 5rem;
  }

  .tiltProject {
    width: 45%;
  }

  .projectsContainer .tiltProject:nth-child(1n) {
    margin-top: 6rem;
  }

  .projectsContainer .tiltProject:nth-child(2n) {
    margin-top: -8rem;
  }

  .projectsContainer .tiltProject:last-of-type {
    margin-top: 0;
  }

  .projectInfo {
    top: 30%;
  }
}

@media (width >=992px) {
  .projectsContainer {
    justify-content: space-between;
  }

  section .projectsContainer .tiltProject {
    width: 28%;
  }

  .projectsContainer .tiltProject:nth-child(1n),
  .projectsContainer .tiltProject:nth-child(2n) {
    margin-top: 0;
  }

}

@media (width >=1440px) {
  .projectsContainer {
    padding-bottom: 8rem;
  }

  .tiltProject h3 {
    font-size: 2rem;
  }
}
</style>