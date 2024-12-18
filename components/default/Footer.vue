<template>
  <footer class="bg-dark-black">
    <div class="columnAlignCenter">
      <NuxtImg class="logo" src="/images/headerFooter/Logo-Benteveo.webp" alt="Logo Benteveo" />
      <div class="footerUpper columnAlignCenter">
        <h2 class="column text-center">Tu proyecto merece el mejor equipo.<span>¡Hablemos!</span></h2>
        <div class="emailUs rowCenter">
          <p>Decí <a href="#" class="text-white">hola@benteveo.com</a></p>
        </div>
      </div>
      <address class="addressFooter">
        <div>
          <p>Guatemala 5582 Piso 2</p>
          <p>Buenos Aires, Argentina</p>
          <p>+54 11 5254 7363</p>
        </div>
        <div>
          <p>152 Southwest 14th Avenue</p>
          <p>Miami, Florida, United States</p>
          <p>+1 305 900 4934</p>
        </div>
        <div>
          <p>Amunategui 86 Of. 801</p>
          <p>Santiago, Chile</p>
        </div>
        <div>
          <p>Int. Suarez 161</p>
          <p>Colonia, Uruguay</p>
        </div>
      </address>
      <DefaultSocialMedia />
      <div class="rights">
        <p class="text-center">© {{ new Date().getFullYear() }} Benteveo | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer>div {
  gap: 1.25rem;
  background: url("/videos/headerFooter/Benteveo-Footer.gif") no-repeat center center;
  background-size: contain;
  padding: 1.25rem 1rem;
}

.footerUpper {
  gap: 0.75rem;
}

.emailUs p,
.emailUs a {
  font-size: 0.625rem;
}

.addressFooter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 0.625rem;
  padding-bottom: 1.25rem;
}

.addressFooter div {
  width: 40%;
}

.addressFooter div p, .rights p {
  text-align: center;
  font-size: 0.5rem;
}

@media (width >=660px) {
  footer>div {
    gap: 1.5rem;
    padding: 2.5rem 1.875rem;
  }

  .emailUs p,
  .emailUs a {
    font-size: 0.875rem;
  }

  .addressFooter {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }

  .addressFooter div {
    width: 23%;
  }

  .addressFooter div p, .rights p {
    font-size: 0.625rem;
  }
}

@media (width >=800px) {
  .addressFooter {
    justify-content: center;
  }

  .addressFooter div p, .rights p {
    font-size: 0.75rem;
  }
}
</style>