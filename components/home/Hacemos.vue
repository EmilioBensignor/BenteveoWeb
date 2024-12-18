<template>
    <section class="w-full">
        <div class="pensamosHacemos column bgCover">
            <div class="gifContainer column">
                <img src="/images/home/gif-creatividad.gif" alt="Creatividad Benteveo">
            </div>
            <div class="hacemosContent column">
                <div class="column">
                    <p class="font-bold">SI LO PENSAMOS,</p>
                    <h2>LO HACEMOS</h2>
                </div>
                <p>
                    La creatividad es el origen de todo lo que hacemos. Pero no nos detenemos en las ideas; las hacemos realidad. Las convertimos en acciones innovadoras, útiles e inteligentes orientadas a lograr resultados.
                </p>
                <NuxtLink to="#" class="primaryButton">PASEN Y VEAN</NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .pensamosHacemos {
        background-image: url('/images/home/Grupo-Creativo-Benteveo.webp');
        padding: 0;
    }

    .gifContainer {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .gifContainer img {
        width: 100%;
        height: 19rem;
    }

    .hacemosContent {
        width: 100%;
        height: 100%;
        gap: 0.75rem;
        background: rgba(0, 0, 0, 0.7);
        padding: 1.25rem 1rem;
    }

    .hacemosContent div p {
        font-size: 1rem;
    }

    @media (width >= 660px) {
        .pensamosHacemos {
            align-items: flex-end;
            position: relative;
        }

        .hacemosContent {
            width: 60%;
            gap: 1.25rem;
            padding: 3rem 3rem 3rem 5rem;
        }

        .gifContainer {
            width: 12.5rem;
            height: auto;
            position: absolute;
            top: 50%;
            left: 16%;
            border: 10px solid var(--color-white);
            transform: translateY(-50%);
        }

        .gifContainer img {
            width: 100%;
            height: auto;
        }
    }
</style>