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
                    title: "COMUNICACIÓN",
                    text: "Creación de ideas transformadoras que impulsan ventas y construyen marcas cercanas a sus consumidores.",
                },
                {
                    img: "",
                    alt: "",
                    title: "CONVERSIÓN",
                    text: "Conectamos con mensajes precisos y relevantes, transformando el interés en acciones efectivas.",
                },
                {
                    img: "",
                    alt: "",
                    title: "ENTRETENIMIENTO",
                    text: "Fusionamos la marca con el entretenimiento para generar contenido atractivo que capture la atención y el interés.",
                },
                {
                    img: "",
                    alt: "",
                    title: "EXPERIENCIA",
                    text: "Diseñamos experiencias singulares que despiertan la imaginación y el interés, tanto en el mundo digital como en el real.",
                },
                {
                    img: "",
                    alt: "",
                    title: "SERVICIO",
                    text: "Implementamos estrategias de CRM basadas en datos sólidos para fomentar relaciones duraderas y significativas.",
                },
                {
                    img: "",
                    alt: "",
                    title: "TRANSFORMACIÓN",
                    text: "Elaboramos acciones innovadoras para acelerar el crecimiento y garantizar la evolución continua de los negocios.",
                },
            ],
        }
    }
}
</script>

<style scoped>
section>div>div:first-of-type {
    gap: 0.5rem;
}
</style>