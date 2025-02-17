<template>
  <section class="heroContainer">
    <video autoplay muted loop playsinline class="bgVideo">
      <source src="/videos/home/Benteveo-Agencia-Publicitaria.mp4" type="video/mp4">
    </video>
    <div class="hero column">
      <div class="column">
        <h1>
        Somos creadores de ideas
      </h1>
      <p>Las hacemos volar, con los pies en la tierra</p>
      <NuxtLink :to="routes.SOMOS" class="primaryButton">CONOCÉ MÁS</NuxtLink>
      </div>
      <DefaultSocialMedia />
      <DefaultScroll />
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
.bgVideo {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  filter: brightness(0.5);
}
</style>