<template>
    <main class="novedad">
        <section class="heroContainer bgCover">
            <!-- :style="{ backgroundImage: `url('/images/projects/${project.slug}.webp')` }" -->
            <div class="hero column">
                <div class="column">
                    <NuxtImg :src="`/images/brands/${project.brand}_logo.webp`" :alt="project.altBrand" class="brand" />
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
                        <li v-for="section in filteredSections" :key="section.id">
                            <a @click.prevent="scrollToSection(section.id)" :href="`#${section.id}`">{{ section.name
                                }}</a>
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
                        <div v-if="project.results.texts" class="columnGap column">
                            <p v-for="(item, index) in project.results.texts" :key="index">{{ item }}</p>
                        </div>
                        <div v-if="project.results.videos" class="videos">
                            <div v-for="(video, index) in project.results.videos" :key="index"
                                style="padding:56.25% 0 0 0;position:relative;">
                                <iframe :src="`https://www.youtube.com/embed/${video.id}`"
                                    style="position:absolute;top:0;left:0;width:100%;height:100%;" :title="video.title"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div v-if="project.awards" id="awards" class="w-full column">
                        <h2>Premios</h2>
                        <div v-if="project.awards.texts">
                            <p v-for="(item, index) in project.awards.texts" :key="index">{{ item }}</p>
                        </div>
                        <div v-if="project.awards.press" class="columnGap column">
                            <a :href="item.link" v-for="(item, index) in project.awards.press" :key="index"
                                target="_blank" class="award">{{
                                    item.name }}</a>
                        </div>
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
            project: null,
            sections: [
                { id: 'objective', name: 'Objetivo' },
                { id: 'campain', name: 'Campaña' },
                { id: 'results', name: 'Resultados' },
                { id: 'awards', name: 'Premios' }
            ]
        }
    },
    created() {
        this.project = projects.find(p => p.slug === this.$route.params.slug);
    },
    mounted() {
        if (!this.project) {
            this.$router.push(ROUTE_NAMES.PROJECTS);
        }
    },
    computed: {
        filteredSections() {
            return this.sections.filter(section =>
                section.id !== 'awards' || this.project?.awards
            );
        }
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerHeight = 78;
                const navHeight = 72;
                let offset = headerHeight + navHeight;

                if (window.innerWidth >= 660) offset = 88 + navHeight;
                if (window.innerWidth >= 850) offset = 96 + navHeight;
                if (window.innerWidth >= 992) offset = 96 + navHeight;
                if (window.innerWidth >= 1080) offset = 96 + 100;

                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        }
    }
}
</script>

<style scoped>
.brand {
    width: 5.313rem;
}

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
    cursor: pointer;
    /* Agregar cursor pointer */
}

.projectContent>div {
    max-width: 1440px;
    gap: 3.75rem;
}

.projectContent>div>div,
.columnGap {
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
        overflow-x: hidden;
    }
}

@media (width >=660px) {
    .brand {
        width: 8rem;
    }

    .projectContent nav {
        top: 5.5rem;
    }

    nav ul li a {
        font-size: 1rem;
    }

    .projectContent>div>div,
    .columnGap {
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
    .brand {
        width: 10.625rem;
    }

    .projectContent nav {
        top: 6.25rem;
        padding: 2rem;
    }

    nav ul li a {
        font-size: 1.25rem;
        transition: all 0.3s;
    }

    nav ul li a:hover {
        color: var(--color-primary);
    }

    .projectContent>div {
        gap: 5rem;
    }

    .projectContent>div>div,
    .columnGap {
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