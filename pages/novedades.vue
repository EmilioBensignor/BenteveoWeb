<template>
    <main>
        <PagesHero title="NEWS"
            description="We work in an integral manner and address projects in the following dimensions." />
        <div class="parallaxContent">
            <section class="blogsContainer columnAlignCenter bg-white">
                <NovedadesBlogPost v-for="(post, index) in blogs" :key="index" :post="post" />
            </section>
        </div>
    </main>
</template>

<script setup>
import { blogs } from '~/shared/blogs';
</script>

<style scoped>
.blogsContainer {
    gap: 4.5rem;
}
</style>