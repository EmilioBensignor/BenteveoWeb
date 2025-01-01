<template>
    <article class="column wow animate__animated animate__fadeInUp">
        <NuxtImg :src="`/images/blogs/${post.img}.webp`" :alt="post.alt" class="w-full" />
        <div class="author rowCenter">
            <NuxtImg :src="`/images/blogs/${post.authorImg}.webp`" :alt="post.author" />
            <p class="text-dark-gray">by <span class="font-medium">{{ post.author }}</span></p>
        </div>
        <h2>{{ post.title }}</h2>
        <p class="font-semibold">{{ post.date }}</p>
        <p class="text-dark-gray">{{ post.summary }}</p>
        <NuxtLink :to="`/novedad/${post.slug}`">LEER MÁS</NuxtLink>
    </article>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
article {
    width: 100%;
    max-width: 500px;
    gap: 1.25rem;
}

article a {
    width: max-content;
    display: inline-block;
    position: relative;
    font-weight: bold;
    color: var(--color-primary);
    text-decoration: none;
}

article a::before {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: var(--color-primary);
    transition: 0.25s ease-in-out;
}

article a:hover {
    text-decoration: none;
}

article a:hover::before {
    width: 100%;
}

.author {
    gap: 0.5rem;
}

.author img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}
</style>