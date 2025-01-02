<template>
    <section class="w-full pensamosHacemos bgCover">
        <div class="column">
            <div class="gifContainer column">
                <img src="/images/home/gif-creatividad.gif" alt="Creatividad Benteveo">
            </div>
            <div class="hacemosContent column">
                <div class="column wow animate__animated animate__fadeInUp">
                    <p class="font-bold">SI LO PENSAMOS,</p>
                    <h2>LO HACEMOS</h2>
                </div>
                <p class="maxParagraph wow animate__animated animate__fadeInUp">
                    La creatividad es el origen de todo lo que hacemos. Pero no nos detenemos en las ideas; las hacemos
                    realidad. Las convertimos en acciones innovadoras, útiles e inteligentes orientadas a lograr
                    resultados.
                </p>
                <NuxtLink to="#" class="primaryButton wow animate__animated animate__fadeInUp">PASEN Y VEAN</NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pensamosHacemos {
    background-image: url('/images/home/Grupo-Creativo-Benteveo.webp');
}

.pensamosHacemos>div {
    max-width: 100%;
    align-items: flex-end;
    padding: 0;
}

.gifContainer {
    width: 100%;
    height: 100%;
    display: none;
}

.gifContainer img {
    width: 100%;
    height: 19rem;
    object-fit: cover;
}

.hacemosContent {
    width: 100%;
    height: 100%;
    gap: 0.75rem;
    background: rgba(0, 0, 0, 0.7);
    padding: 3rem 1rem;
}

.hacemosContent div p {
    font-size: 1rem;
}

@media (width >=660px) {
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
        display: block;
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

@media (width >=750px) {
    .gifContainer {
        left: 20%;
    }
}

@media (width >=850px) {
    .hacemosContent {
        gap: 1.5rem;
    }

    .gifContainer {
        left: 22.5%;
    }

    .hacemosContent div p {
        font-size: 1.25rem;
    }
}

@media (width >=992px) {
    .hacemosContent {
        padding: 4rem 4rem 4rem 6rem;
    }

    .hacemosContent div p {
        font-size: 1.5rem;
    }

    .gifContainer {
        width: 15rem;
    }
}

@media (width >=1280px) {
    .hacemosContent {
        gap: 2rem;
        padding: 5rem 5rem 5rem 9rem;
    }

    .gifContainer {
        width: 19rem;
        left: 24%;
    }
}

@media (width >=1440px) {
    .hacemosContent {
        padding: 6rem 6rem 6rem 11rem;
    }

    .hacemosContent div p {
        font-size: 1.625rem;
    }

    .gifContainer {
        width: 22rem;
    }
}

@media (width >=1920px) {
    .pensamosHacemos {
        padding: 0;
    }

    .pensamosHacemos>div {
        justify-content: flex-end;
        flex-direction: row;
    }

    .hacemosContent {
        padding: 8rem 6rem 8rem 11rem;
    }

    .gifContainer {
        position: static;
        transform: translateY(-28%);
        margin-right: -6rem;
    }
}
</style>