<template>
    <section>
        <div class="column bg-white">
            <div class="columnAlignCenter">
                <h2 class="text-center">NUESTRAS CAPACIDADES</h2>
                <p class="text-center">
                    La creatividad puesta al servicio de una estrategia.
                </p>
            </div>
            <div class="capacidadesContainer columnAlignCenter">
                <article v-for="(capacidad, index) in capacidades" :key="index" class="capacidad columnAlignCenter">
                    <img :src="`/images/capacidades/${capacidad.img}.webp`" :alt="capacidad.alt">
                    <h3>{{ capacidad.title }}</h3>
                    <p class="text-center text-dark-gray">{{ capacidad.text }}</p>
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
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "COMUNICACIÓN",
                    text: "Creación de ideas transformadoras que impulsan ventas y construyen marcas cercanas a sus consumidores.",
                },
                {
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "CONVERSIÓN",
                    text: "Conectamos con mensajes precisos y relevantes, transformando el interés en acciones efectivas.",
                },
                {
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "ENTRETENIMIENTO",
                    text: "Fusionamos la marca con el entretenimiento para generar contenido atractivo que capture la atención y el interés.",
                },
                {
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "EXPERIENCIA",
                    text: "Diseñamos experiencias singulares que despiertan la imaginación y el interés, tanto en el mundo digital como en el real.",
                },
                {
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "SERVICIO",
                    text: "Implementamos estrategias de CRM basadas en datos sólidos para fomentar relaciones duraderas y significativas.",
                },
                {
                    img: "imgCapacidad",
                    alt: "imgCapacidad",
                    title: "TRANSFORMACIÓN",
                    text: "Elaboramos acciones innovadoras para acelerar el crecimiento y garantizar la evolución continua de los negocios.",
                },
            ],
        }
    }
}
</script>

<style scoped>
section>div {
    gap: 2rem;
}

section>div>div:first-of-type {
    gap: 0.5rem;
}

.capacidadesContainer {
    gap: 2rem;
}

.capacidad {
    gap: 0.75rem;
}

.capacidad h3 {
    font-weight: 500;
}

.capacidad p {
    max-width: 410px;
}

@media (width >=660px) {
    .capacidadesContainer {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .capacidad {
        width: 40%;
        height: 13rem;
    }

    .capacidad p {
        max-width: 100%;
    }
}

@media (width >=992px) {
    .capacidad {
        width: 30%;
        height: 16rem;
        gap: 1rem;
    }

    .capacidad h3 {
        font-weight: 400;
    }

    .capacidad p {
        max-width: 100%;
    }
}
</style>