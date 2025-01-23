<template>
    <section class="heroContainer bgCover" :style="heroImage ? { backgroundImage: `url('/images/${heroImage}.webp')` } : {}">
        <div class="hero heroPages column">
            <div class="column">
                <h1 :data-text="title">
                    {{ title }}
                </h1>
                <p>{{ description }}</p>
            </div>
            <DefaultSocialMedia />
            <DefaultScroll />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        heroImage: {
            type: String,
        }
    }
}
</script>