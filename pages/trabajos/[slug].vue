<template>
    <main class="novedad">
        <section class="heroContainer bgCover">
            <!-- :style="{ backgroundImage: `url('/images/projects/${project.slug}.webp')` }" -->
            <div class="hero column">
                <!-- <NuxtImg :src="`/images/projects/${project.brand}.webp`" :alt="project.altBrand" /> -->
                <div class="column">
                    <h1>{{ project.title.toUpperCase() }}</h1>
                    <p>{{ project.subtitle }}</p>
                </div>
                <DefaultSocialMedia />
                <DefaultScroll />
            </div>
        </section>
        <div class="parallaxContent">
            <section class="projectContent bg-white">
                <nav>
                    <ul class="rowCenter">
                        <li>
                            <a href="#objective">Objetivo</a>
                        </li>
                        <li>
                            <a href="#campain">Campaña</a>
                        </li>
                        <li>
                            <a href="#results">Resultados</a>
                        </li>
                        <li>
                            <a href="#awards">Premios</a>
                        </li>
                    </ul>
                </nav>
                <div class="column">
                    <div id="objective" class="w-full column">
                        <h2>Objetivo</h2>
                        <p>{{ project.objective }}</p>
                    </div>
                    <div id="campain" class="w-full column">
                        <h2>Campaña</h2>
                        <p v-for="(item, index) in project.campain" :key="index">{{ item }}</p>
                    </div>
                    <div id="results" class="w-full column">
                        <h2>Resultados</h2>
                        <p v-for="(item, index) in project.results.texts" :key="index">{{ item }}</p>
                        <div class="videos">
                            <div v-for="(video, index) in project.results.videos" :key="index"
                                style="padding:56.25% 0 0 0;position:relative;">
                                <iframe
                                    :src="`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`"
                                    frameborder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    :title="video.title"></iframe>
                            </div>
                        </div>
                    </div>
                    <div v-if="project.awards" id="awards" class="w-full column">
                        <h2>Premios</h2>
                        <div>
                            <p v-for="(item, index) in project.awards.texts" :key="index">{{ item }}</p>
                        </div>
                        <a :href="item.link" v-for="(item, index) in project.awards.press" :key="index" target="_blank"
                            class="award">{{
                                item.name }}</a>
                    </div>
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

<style scoped>
.projectContent {
    position: relative;
}

.projectContent nav {
    position: sticky;
    top: 4.875rem;
    z-index: 1;
    background: var(--color-white);
    overflow-x: scroll;
    padding: 1.5rem 1rem;
}

nav ul {
    min-width: max-content;
    gap: 3.25rem;
}

nav ul li a {
    color: var(--color-black);
    font-weight: 500;
    text-decoration: none;
}

.projectContent>div {
    max-width: 1440px;
    gap: 3.75rem;
}

.projectContent>div>div {
    gap: 0.75rem;
}

.projectContent>div>div p,
.award {
    color: var(--color-dark-gray);
}

.videos {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.videos div {
    width: 100%;
    max-width: 350px;
    padding: 6rem 0 !important;
}

@media (width >=480px) {
    .projectContent nav {
        display: flex;
        justify-content: center;
    }
}

@media (width >=660px) {
    .projectContent nav {
        top: 5.5rem;
    }

    nav ul li a {
        font-size: 1rem;
    }

    .projectContent>div>div {
        gap: 1rem;
    }
}

@media (width >=850px) {
    .projectContent nav {
        top: 6rem;
    }
}

@media (width >=992px) {
    .hero p {
        margin-right: 4rem;
    }

    .projectContent nav {
        top: 6.25rem;
    }
}

@media (width >=1080px) {
    .projectContent nav {
        top: 6.75rem;
        padding: 2rem;
    }

    nav ul li a {
        font-size: 1.25rem;
    }

    .projectContent>div {
        gap: 5rem;
    }

    .projectContent>div>div {
        gap: 1.25rem;
    }

    .videos {
        flex-direction: row;
        gap: 2.75rem;
    }

    .videos div {
        max-width: 470px;
        padding: 8rem 0 !important;
    }
}

@media (width >=1440px) {
    .hero p {
        margin-right: 8rem;
    }
}
</style>