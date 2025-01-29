<template>
    <main class="novedad">
        <section class="heroContainer bgCover">
            <!-- :style="{ backgroundImage: `url('/images/projects/${project.slug}.webp')` }" -->
            <div class="hero column">
                <NuxtImg :src="`/images/projects/${project.brand}.webp`" :alt="project.altBrand" />
                <div class="column">
                    <h1>{{ project.title.toUpperCase() }}</h1>
                    <p>{{ project.subtitle }}</p>
                </div>
                <DefaultSocialMedia />
                <DefaultScroll />
            </div>
        </section>
        <div class="parallaxContent">
            <section class="bg-white">
                <div>
                    <h2>Objetivo</h2>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { projects } from '~/shared/projects';

export default {
    data() {
        return {
            project: null
        }
    },
    created() {
        this.project = projects.find(p => p.slug === this.$route.params.slug);
    },
    mounted() {
        if (!this.project) {
            this.$router.push(ROUTE_NAMES.PROJECTS);
        }
    }
}
</script>
