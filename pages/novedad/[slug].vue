<template>
    <main>
        <PagesHero :title="blog.title" :heroImage="`blogs/${blog.imgGradient}`" />
        <div class="parallaxContent">
            <section class="bg-white">
                <div class="blogContainer">
                    <article v-if="blog" class="blogContent columnAlignCenter">
                        <div class="w-full author column">
                            <div class="rowCenter">
                                <NuxtImg :src="`/images/blogs/${blog.authorImg}.webp`" :alt="blog.author" />
                                <p>by <span>{{ blog.author }}</span></p>
                            </div>
                            <time>{{ blog.date }}</time>
                        </div>
                        <div>{{ blog.content }}</div>
                    </article>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { blogs } from '~/shared/blogs';

export default {
    data() {
        return {
            blog: null
        }
    },
    created() {
        this.blog = blogs.find(b => b.slug === this.$route.params.slug);
    },
    mounted() {
        if (!this.blog) {
            this.$router.push('/novedades');
        }
    }
}
</script>

<style scoped>
.blogContainer {
    height: 100vh;
}

.blogContent {
    gap: 2rem;
}

.author,
.author div {
    gap: 0.5rem;
}

.author img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}
</style>