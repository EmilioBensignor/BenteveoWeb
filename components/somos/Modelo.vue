<template>
    <section>
        <div class="modeloContainer column bg-white">
            <div class="modelo column">
                <div>
                    <h2 class="column">Modelo <span>AGENCIA - PRODUCTORA</span></h2>
                    <p class="text-dark-gray">
                        Lo pensamos, les metemos estrategia, corazón y convertimos las ideas en algo real...
                    </p>
                </div>
                <div class="column">
                    <p>
                        Nosotros nos encargamos. Abarcamos todo lo que una marca necesita para la comunicación de sus
                        productos o servicios.
                    </p>
                    <p class="text-dark-gray">
                        Integramos las áreas del marketing y la producción; desde la estrategia y la creatividad hasta
                        la
                        ejecución. Simplificando el proceso y brindando una solución integral.
                    </p>
                </div>
            </div>
            <div>
                // Swiper
            </div>
        </div>
    </section>
</template>

<style scoped>
.modeloContainer {
    gap: 3rem;
}

.modelo {
    gap: 2rem;
}

.modelo>div {
    gap: 0.5rem;
}

.modelo>div:last-of-type>p:first-child {
    font-weight: 500;
    font-size: 0.875rem;
}

@media (width >=660px) {
    .modelo {
        flex-direction: row;
        justify-content: space-between;
    }

    .modelo>div:first-of-type {
        width: 55%;
    }

    .modelo>div:last-of-type {
        width: 50%;
    }

    .modelo>div:first-of-type>p {
        max-width: 335px;
    }


    .modelo>div:last-of-type>p:first-child {
        font-size: 1rem;
    }
}

@media (width >=992px) {
    .modelo>div:last-of-type {
        width: 60%;
    }

    .modelo>div:first-of-type>p {
        max-width: 380px;
    }

    .modelo>div:last-of-type>p:first-child {
        font-size: 1.125rem;
    }
}

@media (width >=1440px) {
    .modelo>div:first-of-type>p {
        max-width: 590px;
    }
}
</style>