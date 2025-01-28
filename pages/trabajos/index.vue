<template>
    <main>
        <PagesHero title="TRABAJOS" description="Completar" backgroundClass="heroSomos" />
        <div class="parallaxContent">
            <section class="bg-black">
                <div class="w-full projectsContainer columnAlignCenter">
                    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { projects } from "~/shared/projects";

export default {
    data() {
        return {
            projects: [],
        };
    },
    methods: {
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    },
    created() {
        this.projects = this.shuffleArray([...projects]);
    }
}
</script>

<style scoped>
.heroSomos {
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}
</style>