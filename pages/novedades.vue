<template>
    <main>
        <PagesHero title="NEWS"
            description="We work in an integral manner and address projects in the following dimensions." />
        <div class="parallaxContent">
            <section class="blogsContainer wrapCenter bg-white">
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

@media (width >=1080px) {
    .blogsContainer article {
        max-width: 100%;
        width: 46%;
    }
}
</style>