<template>
    <section class="bg-white">
        <div class="column">
            <div class="column">
                <h2 class="column">IDEAS QUE VUELAN,<span>QUE CONECTAN CON LA GENTE</span></h2>
                <p>
                    Creamos beneficios para nuestros clientes. Estrategias transformadoras que generen experiencias
                    memorables, conectando a las marcas con los deseos de sus consumidores.
                </p>
            </div>
            <div class="servicesContainer column">
                <div v-for="(service, index) in services" :key="index" class="service column">
                    <div class="rowCenter">
                        <img :src="`/images/services/${service.img}-Benteveo.svg`" :alt="`${service.alt} Benteveo`">
                        <h3>{{ service.title }}</h3>
                    </div>
                    <p class="text-dark-gray">{{ service.description }}</p>
                    <NuxtLink to="#">CONOCÉ MÁS</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { services } from '~/shared/services';
export default {
    data() {
        return {
            services: services,
        }
    }
}
</script>

<style scoped>
section > div {
    gap: 2rem;
}

section > div > div:first-of-type {
    gap: 0.25rem;
}

.servicesContainer {
    gap: 1.25rem;
}

.service, .service > div:first-of-type {
    gap: 0.625rem;
}

.service img {
    width: 1.875rem;
}

.service h3 {
    font-weight: 400;
}

.service a {
    width: max-content;
    display: inline-block;
    position: relative;
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;
}

.service a::before {
    content: '';
    width: 0;
    height: 2px;
    background: var(--color-primary);
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.25s ease-in-out;
}

.service a:hover {
    text-decoration: none;
}

.service a:hover:before {
    width: 100%;
}
</style>