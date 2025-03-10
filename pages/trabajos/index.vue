<template>
    <main>
        <PagesHero title="LO QUE HACEMOS HABLA POR NOSOTROS"
            description="Descubrí las campañas que creamos con pasión, estrategia e innovación."
            backgroundClass="heroSomos" />
        <div class="parallaxContent">
            <section class="bg-black">
                <div class="w-full projectsContainer columnAlignCenter">
                    <ProjectCard v-for="(project, index) in regularProjects" :key="index" :project="project" />
                </div>
            </section>
            <section v-if="eventProjects.length > 0" class="bg-black">
                <div>
                    <h2 class="subtitle text-center">Eventos</h2>
                    <div class="w-full projectsContainer columnAlignCenter">
                        <ProjectCard v-for="(event, index) in eventProjects" :key="index" :project="event" />
                    </div>
                </div>
            </section>
            <section v-if="tutorialProjects.length > 0" class="bg-black">
                <div>
                    <h2 class="subtitle text-center">Tutoriales</h2>
                    <div class="w-full projectsContainer columnAlignCenter">
                        <ProjectCard v-for="(tutorial, index) in tutorialProjects" :key="index" :project="tutorial" />
                    </div>
                </div>
            </section>
            <section v-if="endomarketingProjects.length > 0" class="bg-black">
                <div>
                    <h2 class="subtitle text-center">Endomarketing</h2>
                    <div class="w-full projectsContainer columnAlignCenter">
                        <ProjectCard v-for="(endomarketing, index) in endomarketingProjects" :key="index"
                            :project="endomarketing" />
                    </div>
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
            regularProjects: [],
            eventProjects: [],
            tutorialProjects: [],
            endomarketingProjects: []
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
        const allProjects = [...projects];

        this.eventProjects = this.shuffleArray(allProjects.filter(project => project.event === true));
        this.tutorialProjects = this.shuffleArray(allProjects.filter(project => project.tutorial === true));
        this.endomarketingProjects = this.shuffleArray(allProjects.filter(project => project.endomarketing === true));

        this.regularProjects = this.shuffleArray(allProjects.filter(project =>
            project.event !== true &&
            project.tutorial !== true &&
            project.endomarketing !== true
        ));
    }
}
</script>

<style scoped>
.heroSomos {
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}

.subtitle {
    margin-bottom: 2rem;
}

@media (width >=660px) {
    .subtitle {
        margin-bottom: 3.5rem;
    }
}
</style>