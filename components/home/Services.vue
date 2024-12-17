<template>
    <section class="bg-white">
        <div>
            <div>
                <h2 class="column">IDEAS QUE VUELAN,<span>QUE CONECTAN CON LA GENTE</span></h2>
                <p>
                    Creamos beneficios para nuestros clientes. Estrategias transformadoras que generen experiencias
                    memorables, conectando a las marcas con los deseos de sus consumidores.
                </p>
            </div>
            <div>
                <div v-for="(service, index) in services" :key="index">
                    <div>
                        <!-- <img :src="`/images/services/${service.img}`" :alt="service.alt"> -->
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                    </div>
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