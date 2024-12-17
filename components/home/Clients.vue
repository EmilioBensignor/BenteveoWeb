<template>
    <section class="w-full bg-white">
        <div class="clientsContainer">
            <ClientOnly>
                <swiper-container class="swiperLogos" ref="containerRef" :init="false">
                    <swiper-slide v-for="(logo, index) in slides" :key="index">
                        <div class="clientItem allCenter">
                            <img :src="`/images/clients/${logo.img}`" :alt="logo.alt">
                        </div>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup>
import { logosClientes } from '~/shared/logos'

const containerRef = ref(null);
const slides = ref(logosClientes);
const swiper = useSwiper(containerRef, {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    spaceBetween: 16,
    allowTouchMove: false,
    breakpoints: {
        480: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
        992: {
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 6,
        },
    }
});
</script>

<style scoped>
.clientsContainer {
    max-width: 100vw;
    overflow: hidden;
    position: relative;
    padding: 1.25rem 1rem;
}

.swiperLogos .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.swiperLogos img {
    height: 3rem;
    object-fit: contain;
}
</style>