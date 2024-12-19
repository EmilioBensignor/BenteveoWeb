<template>
    <section>
        <div class="hero column bgCover">
            <div class="column">
                <h1>
                    UN EQUIPO, UNA VISIÓN
                </h1>
                <p>La creatividad como herramienta para construir conexiones potentes.</p>
            </div>
            <DefaultSocialMedia />
        </div>
    </section>
</template>

<style scoped>
.hero {
    height: 60vh;
    justify-content: center;
    gap: 1.25rem;
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}

.hero>div {
    justify-content: center;
    gap: 1.25rem;
}

@media (width >=660px) {
    .hero {
        height: 55vh;
        gap: 1.875rem;
    }

    .hero>div {
        gap: 1.875rem;
    }

    .hero p {
        font-size: 1rem;
    }
}

@media (width >=850px) {
    .hero {
        height: 50vh;
    }

    .hero p {
        font-size: 1.25rem;
    }
}

@media (width >=992px) {
    .hero {
        height: 85vh;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }

    .socialMedia {
        flex-direction: column;
    }
}

@media (width >=1280px) {
    .hero p {
        font-size: 1.5rem;
    }
}

@media (width >=1440px) {
    .hero>div {
        gap: 2rem;
    }

    .hero p {
        font-size: 1.75rem;
    }
}
</style>