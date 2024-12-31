<template>
    <main>
        <PagesHero :title="blog.title"
            description="We work in an integral manner and address projects in the following dimensions." />
        <div class="parallaxContent">
            <article v-if="blog" class="blogContent columnAlignCenter">
                <h1>{{ blog.title }}</h1>
                <div class="authorInfo rowCenter">
                    <NuxtImg :src="`/images/blogs/${blog.authorImg}.png`" :alt="blog.author" />
                    <p>by <span>{{ blog.author }}</span></p>
                    <time>{{ blog.date }}</time>
                </div>
                <NuxtImg :src="`/images/blogs/${blog.img}.png`" :alt="blog.alt" class="mainImage" />
                <div class="content">{{ blog.summary }}</div>
            </article>
        </div>
    </main>
</template>

<script setup>
import { blogs } from '~/shared/blogs';

const route = useRoute();
const blog = ref(blogs.find(b => b.slug === route.params.slug));

onMounted(() => {
    if (!blog.value) {
        navigateTo('/novedades');
    }
});
</script>

<style scoped>
.blogContent {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    gap: 2rem;
}

.authorInfo {
    gap: 1rem;
}

.mainImage {
    width: 100%;
    height: auto;
}

.content {
    line-height: 1.6;
}
</style>