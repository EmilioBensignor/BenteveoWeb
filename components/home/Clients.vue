<template>
    <section class="w-full bg-white">
        <div class="clientsContainer">
            <ClientOnly>
                <Carousel 
                    :value="logosClientes" 
                    :numVisible="5"
                    :numScroll="1"
                    :circular="true"
                    :autoplayInterval="3000"
                >
                    <template #item="slotProps">
                        <div class="clientItem">
                            <img :src="`/images/clients/${slotProps.data.img}`" :alt="slotProps.data.alt" />
                            <p class="text-black">{{ slotProps.data.nombre }}</p>
                        </div>
                    </template>
                </Carousel>
            </ClientOnly>
        </div>
    </section>
</template>

<script>
import { logosClientes } from '~/shared/logos';

export default {
    data() {
        return {
            logosClientes: logosClientes,
        }
    }
}
</script>

<style scoped>

.clientsContainer {
    max-width: 1200px;
    overflow: hidden;
}

.clientItem {
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
}

.clientItem img {
    height: 4.5rem;
    object-fit: contain;
    transition: all 0.5s ease;
    max-width: 150px;
}

.clientItem:hover img {
    opacity: 0;
    transform: scale(1.1);
}

.clientItem p {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 50%;
    text-align: center;
    line-height: 20px;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s ease;
}

.clientItem:hover p {
    opacity: 1;
    margin-top: -10px;
}
</style>