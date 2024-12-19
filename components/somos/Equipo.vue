<template>
    <section>
        <div class="equipo">
            <video autoplay muted loop class="backgroundVideo">
                <source src="/videos/somos/video-nuestro-adn.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="equipoContent column">
                <div class="adnContainer column">
                    <div>
                        <p>NUESTRO ADN</p>
                        <h2>EL TRABAJO EN EQUIPO</h2>
                    </div>
                    <p>
                        Somos una agencia que trabaja junto al cliente como equipo para hacer que las grandes ideas se
                        hagan realidad. <span class="font-bold">JUNTOS podemos todo.</span>
                    </p>
                </div>
                <NuxtLink to="#" class="primaryButton">PENSEMOS EN EQUIPO</NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.equipo {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 0;
}

.backgroundVideo {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
}

.equipoContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    color: var(--color-white);
    padding: 1.25rem 1rem;
}

.adnContainer {
    gap: 0.25rem;
}
</style>