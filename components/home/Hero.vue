<template>
  <section>
    <div class="hero column">
      <div class="column">
        <h1>
        Somos creadores de ideas
      </h1>
      <p>Las hacemos volar, con los pies en la tierra</p>
      <NuxtLink :to="routes.SOMOS" class="primaryButton">CONOCÉ MÁS</NuxtLink>
      </div>
      <DefaultSocialMedia />
    </div>
  </section>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
  data() {
    return {
      routes: ROUTE_NAMES
    };
  }
}
</script>

<style scoped>
.hero {
  height: 60vh;
  justify-content: center;
  gap: 1.25rem;
}

.hero > div {
  justify-content: center;
  gap: 1.25rem;
}

@media (width >=660px) {
  .hero {
    height: 55vh;
    gap: 1.5rem;
  }

  .hero > div {
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

@media (width >= 992px) {
  .hero {
    height: 85vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .socialMedia {
    flex-direction: column;
  }
}

@media (width >= 1280px) {
  .hero p {
    font-size: 1.5rem;
  }
}

@media (width >= 1440px) {
  .hero > div {
    gap: 2rem;
  }

  .hero p {
    font-size: 1.75rem;
  }
}
</style>