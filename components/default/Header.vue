<template>
  <header class="rowSpaceBetweenCenter bg-dark-black">
    <div class="logoEmailUs rowCenter">
      <div>
        <NuxtLink :to="routes.HOME">
          <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
        </NuxtLink>
      </div>
      <div class="emailUs rowCenter">
        <p>Decí <a href="#" class="text-dark-gray">hola@benteveo.com</a></p>
      </div>
    </div>
    <div class="sandwichNav rowCenter">
      <p>MENU</p>
      <button class="allCenter">
        <Icon name="mingcute:menu-line" class="text-white" />
      </button>
    </div>
  </header>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
  data() {
    return {
      routes: ROUTE_NAMES
    }
  }
}
</script>

<style scoped>
header {
  padding: 1.25rem 1rem;
}

.logoEmailUs {
  gap: 1.875rem;
}

.emailUs {
  display: none;
}

.sandwichNav {
  gap: 0.625rem;
}

.sandwichNav p {
  font-family: "Fjalla One", sans-serif;
}

.sandwichNav button {
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: none;
  cursor: pointer;
}

.sandwichNav button span {
  font-size: 1.25rem !important;
}
</style>