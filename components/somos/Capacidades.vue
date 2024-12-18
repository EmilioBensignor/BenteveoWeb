<template>
    <section>
        <div class="bg-white">
            <div class="columnAlignCenter">
                <h2>NUESTRAS CAPACIDADES</h2>
                <p class="text-center">
                    La creatividad puesta al servicio de una estrategia.
                </p>
            </div>
            <div class="columnAlignCenter">
                <article v-for="(capacidad, index) in capacidades" :key="index">
                    <img src="" alt="">
                    <h3></h3>
                    <p></p>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            capacidades: [
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
                {
                    img: "",
                    alt: "",
                    title: "",
                    text: "",
                },
            ],
        }
    }
}
</script>

<style scoped>
section > div > div:first-of-type {
    gap: 0.5rem;
}
</style>