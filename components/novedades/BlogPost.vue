<template>
    <article class="column wow animate__animated animate__fadeInUp">
        <NuxtImg :src="`/images/blogs/${post.img}.png`" :alt="post.alt" />
        <div class="rowCenter">
            <NuxtImg :src="`/images/blogs/${post.authorImg}.png`" :alt="post.author" />
            <p>by <span>{{ post.author }}</span></p>
        </div>
        <h2>{{ post.title }}</h2>
        <time>{{ post.date }}</time>
        <p>{{ post.summary }}</p>
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
    max-width: 400px;
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
</style>