<template>
    <section class="heroSomos bgCover">
        <div class="hero column">
            <div class="column">
                <h1 data-text="UN EQUIPO, UNA VISIÓN">
                    UN EQUIPO, UNA VISIÓN
                </h1>
                <p>La creatividad como herramienta para construir conexiones potentes.</p>
            </div>
            <DefaultSocialMedia />
            <DefaultScroll />
        </div>
    </section>
</template>

<style scoped>
.heroSomos {
    background-image: url("/images/somos/Equipo-Benteveo.webp");
}

.hero {
    height: 60vh;
    justify-content: center;
    gap: 1.25rem;
    position: relative;
}

.hero>div {
    justify-content: center;
    gap: 1.25rem;
}

h1 {
    position: relative;
}

h1::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -2px;
    text-shadow: 1px 0 blue;
    color: var(--color-white);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
}

h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 2px;
    text-shadow: -1px 0 red;
    color: var(--color-white);
    overflow: hidden;
    clip: rect(0, xw00px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim {
    0% {
        clip: rect(61px, 9999px, 101px, 0);
    }

    5% {
        clip: rect(7px, 9999px, 65px, 0);
    }

    10% {
        clip: rect(118px, 9999px, 116px, 0);
    }

    15% {
        clip: rect(71px, 9999px, 128px, 0);
    }

    20% {
        clip: rect(30px, 9999px, 12px, 0);
    }

    25% {
        clip: rect(43px, 9999px, 105px, 0);
    }

    30% {
        clip: rect(1px, 9999px, 101px, 0);
    }

    35% {
        clip: rect(36px, 9999px, 48px, 0);
    }

    40% {
        clip: rect(125px, 9999px, 56px, 0);
    }

    45% {
        clip: rect(45px, 9999px, 57px, 0);
    }

    50% {
        clip: rect(30px, 9999px, 3px, 0);
    }

    55% {
        clip: rect(35px, 9999px, 35px, 0);
    }

    60% {
        clip: rect(96px, 9999px, 97px, 0);
    }

    65% {
        clip: rect(51px, 9999px, 56px, 0);
    }

    70% {
        clip: rect(81px, 9999px, 29px, 0);
    }

    75% {
        clip: rect(127px, 9999px, 100px, 0);
    }

    80% {
        clip: rect(81px, 9999px, 36px, 0);
    }

    85% {
        clip: rect(99px, 9999px, 1px, 0);
    }

    90% {
        clip: rect(89px, 9999px, 53px, 0);
    }

    95% {
        clip: rect(109px, 9999px, 64px, 0);
    }

    100% {
        clip: rect(5px, 9999px, 117px, 0);
    }
}

@keyframes noise-anim-2 {
    0% {
        clip: rect(48px, 9999px, 57px, 0);
    }

    5% {
        clip: rect(107px, 9999px, 17px, 0);
    }

    10% {
        clip: rect(41px, 9999px, 37px, 0);
    }

    15% {
        clip: rect(79px, 9999px, 128px, 0);
    }

    20% {
        clip: rect(101px, 9999px, 108px, 0);
    }

    25% {
        clip: rect(71px, 9999px, 89px, 0);
    }

    30% {
        clip: rect(43px, 9999px, 37px, 0);
    }

    35% {
        clip: rect(118px, 9999px, 80px, 0);
    }

    40% {
        clip: rect(95px, 9999px, 2px, 0);
    }

    45% {
        clip: rect(120px, 9999px, 69px, 0);
    }

    50% {
        clip: rect(81px, 9999px, 101px, 0);
    }

    55% {
        clip: rect(17px, 9999px, 106px, 0);
    }

    60% {
        clip: rect(23px, 9999px, 117px, 0);
    }

    65% {
        clip: rect(24px, 9999px, 5px, 0);
    }

    70% {
        clip: rect(37px, 9999px, 64px, 0);
    }

    75% {
        clip: rect(19px, 9999px, 129px, 0);
    }

    80% {
        clip: rect(83px, 9999px, 48px, 0);
    }

    85% {
        clip: rect(9px, 9999px, 10px, 0);
    }

    90% {
        clip: rect(66px, 9999px, 127px, 0);
    }

    95% {
        clip: rect(12px, 9999px, 51px, 0);
    }

    100% {
        clip: rect(81px, 9999px, 114px, 0);
    }
}

@media (width >=660px) {
    .hero {
        height: 55vh;
        gap: 1.5rem;
    }

    .hero>div {
        gap: 1.5rem;
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