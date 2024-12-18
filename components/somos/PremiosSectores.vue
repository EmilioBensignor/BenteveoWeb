<template>
    <section>
        <div class="premiosSectores column">
            <div class="column">
                <h3>Premios</h3>
                <ul class="column">
                    <li v-for="premio in premios" :key="premio" class="text-gray">{{ premio }}</li>
                </ul>
            </div>
            <div class="column">
                <h3>Sectores</h3>
                <ul class="column">
                    <li v-for="sector in sectores" :key="sector" class="text-gray">{{ sector }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            premios: ["2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards", "2019 Hunger Boss - Awwwwards"],
            sectores: ["Consumo masivo: Alimentos y Bebidas", "Construcción y Herramientas", "Entretenimiento y Medios", "Tecnología", "Retail y Comercio", "Turismo", "Farmacéutica", "E-commerce y ventas en línea"],
        }
    }
}
</script>

<style scoped>
.premiosSectores {
    gap: 2rem;
}

.premiosSectores>div {
    gap: 0.75rem;
}

.premiosSectores>div>ul {
    gap: 0.5rem;
}
</style>