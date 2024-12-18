<template>
  <section>
    <div class="hero column">
      <h1>
        Somos creadores de ideas
      </h1>
      <p>Las hacemos volar, con los pies en la tierra</p>
      <NuxtLink :to="routes.SOMOS" class="primaryButton">CONOCÉ MÁS</NuxtLink>
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

@media (width >=660px) {
  .hero {
    height: 55vh;
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
</style>