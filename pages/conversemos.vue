<template>
    <main>
        <PagesHero title="HABLEMOS DE TU PRÓXIMO GRÁN PROYECTO"
            description="Trabajemos para hacerlo único, relevante y memorable."
            backgroundClass="heroSomos" />
        <div class="parallaxContent">
            <section class="column bg-white">
                <div class="w-full column">
                    <h2 class="column">¡Queremos construir juntos! <span>Dejanos tus datos de contacto.</span></h2>
                    <div class="datosContacto column">
                        <div>
                            <a href="mailto:hola@benteveo.com" class="rowCenter text-black no-underline">
                                <Icon name="mingcute:mail-line" class="text-primary" />
                                hola@benteveo.com
                            </a>
                        </div>
                        <div class="addressFooter column">
                            <div v-for="(location, index) in locations" :key="index" class="flex">
                                <Icon name="mingcute:location-line" class="text-primary" />
                                <div>
                                    <p v-for="(line, lineIndex) in location.lines" :key="lineIndex">
                                        {{ line }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <form id="formConversemos" @submit.prevent="handleSubmit" class="w-full formConversemos">
                    <div class="column">
                        <div class="formGroup">
                            <label for="nombre">Tu nombre</label>
                            <input type="text" id="nombre" v-model="formData.nombre" />
                            <span class="error" v-if="errors.nombre">
                                <Icon name="mingcute:alert-octagon-line" />
                                {{ errors.nombre }}
                            </span>
                        </div>
                        <div class="formGroup">
                            <label for="empresa">Tu empresa</label>
                            <input type="text" id="empresa" v-model="formData.empresa" />
                            <span class="error" v-if="errors.empresa">
                                <Icon name="mingcute:alert-octagon-line" />
                                {{ errors.empresa }}
                            </span>
                        </div>
                        <div class="formGroup">
                            <label for="email">Tu correo electrónico</label>
                            <input type="email" id="email" v-model="formData.email" autocomplete="email" />
                            <span class="error" v-if="errors.email">
                                <Icon name="mingcute:alert-octagon-line" />
                                {{ errors.email }}
                            </span>
                        </div>
                        <div class="formGroup">
                            <label for="mensaje">Tu mensaje</label>
                            <textarea rows="5" id="mensaje" v-model="formData.mensaje"></textarea>
                        </div>
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
            </section>
        </div>
        <Dialog v-model:visible="showSuccessDialog" :modal="true" :closable="true" :closeOnEscape="true"
            :dismissableMask="true" @hide="closeDialog">
            <div class="dialogContent column">
                <p class="text-center">¡Tus datos se enviaron correctamente!</p>
                <p class="text-center font-semibold">Nos pondremos en contacto con vos en la brevedad.</p>
            </div>
        </Dialog>
    </main>
</template>

<script>
export default {
    data() {
        return {
            locations: [
                {
                    lines: [
                        'Guatemala 5582 Piso 2',
                        'Buenos Aires, Argentina',
                        '+54 11 5254 7363'
                    ]
                },
                {
                    lines: [
                        '152 Southwest 14th Avenue',
                        'Miami, Florida, United States',
                        '+1 305 900 4934'
                    ]
                },
                {
                    lines: [
                        'Amunategui 86 Of. 801',
                        'Santiago, Chile'
                    ]
                },
                {
                    lines: [
                        'Int. Suarez 161',
                        'Colonia, Uruguay'
                    ]
                }
            ],
            formData: {
                nombre: '',
                empresa: '',
                email: '',
                mensaje: ''
            },
            errors: {
                nombre: '',
                empresa: '',
                email: ''
            },
            isValid: false,
            showSuccessDialog: false
        }
    },
    methods: {
        validateNombre() {
            if (!this.formData.nombre) {
                this.errors.nombre = 'Debes ingresar un nombre'
                return false
            }
            if (this.formData.nombre.length < 2) {
                this.errors.nombre = 'El nombre debe tener al menos 2 caracteres'
                return false
            }
            if (this.formData.nombre.length > 20) {
                this.errors.nombre = 'El nombre no puede superar los 20 caracteres'
                return false
            }
            return true
        },
        validateEmpresa() {
            if (!this.formData.empresa) {
                this.errors.empresa = 'Debes ingresar el nombre de tu empresa'
                return false
            }
            if (this.formData.empresa.length < 2) {
                this.errors.empresa = 'El nombre de la empresa debe tener al menos 2 caracteres'
                return false
            }
            if (this.formData.empresa.length > 40) {
                this.errors.empresa = 'El nombre de la empresa no puede superar los 40 caracteres'
                return false
            }
            return true
        },
        validateEmail() {
            if (!this.formData.email) {
                this.errors.email = 'Debes ingresar un email'
                return false
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(this.formData.email)) {
                this.errors.email = 'El correo electrónico debe incluir un @ y . (punto)'
                return false
            }
            return true
        },
        handleSubmit() {
            Object.keys(this.errors).forEach(key => this.errors[key] = '')
            this.isValid = false

            const nombreValid = this.validateNombre()
            const empresaValid = this.validateEmpresa()
            const emailValid = this.validateEmail()

            if (nombreValid && empresaValid && emailValid) {
                this.isValid = true
                console.log('Formulario válido:', this.formData)

                this.showSuccessDialog = true

                Object.keys(this.formData).forEach(key => this.formData[key] = '')
                document.getElementById('formConversemos').reset()
            }
        },
        closeDialog() {
            this.showSuccessDialog = false
        }
    }
}
</script>

<style>
.p-overlay-mask {
    background: rgba(0, 0, 0, 0.4);
}

.p-dialog {
    width: 100%;
    max-width: 264px;
    position: relative;
    background: var(--color-white) !important;
    border: 2px solid var(--color-primary) !important;
    color: var(--color-black) !important;
    padding: 1.25rem;
}

.p-dialog-header {
    justify-content: flex-end !important;
    position: absolute;
    top: 0.875rem;
    right: 0.875rem;
}

.p-dialog-header .p-icon {
    color: var(--color-primary);
}

.dialogContent {
    gap: 0.5rem;
}

.closeButton {
    background: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    align-self: center;
}

.closeButton:hover {
    opacity: 0.9;
}

@media (width >=660px) {
    .p-dialog {
        max-width: 484px;
        padding: 1.75rem;
    }

    .p-dialog-header {
        top: 1rem;
        right: 1rem;
    }

    .p-dialog-header .p-icon {
        width: 1rem;
        height: 1rem;
    }

    .dialogContent {
        gap: 1rem;
    }

    .dialogContent p {
        font-size: 1rem;
    }
}

@media (width >=1080px) {
    .p-dialog {
        max-width: 615px;
        padding: 2.25rem;
    }

    .p-dialog-header {
        top: 1.25rem;
        right: 1.25rem;
    }

    .p-dialog-header .p-icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .dialogContent {
        gap: 1.5rem;
    }

    .dialogContent p {
        font-size: 1.25rem;
    }
}
</style>

<style scoped>
section,
section>div,
section>div>div,
.addressFooter,
.formConversemos>div {
    gap: 1.5rem;
}

.datosContacto a,
.datosContacto .addressFooter div {
    gap: 0.625rem;
}

.datosContacto a,
.datosContacto .addressFooter p {
    font-family: "Fjalla One", sans-serif;
}

.formConversemos>div {
    border: 1px solid var(--color-primary);
    padding: 1rem;
}

.formGroup {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-dark-gray);
}

.formGroup input,
.formGroup textarea {
    padding: 0.5rem;
    border: 1px solid var(--color-gray);
    resize: none;
}

.formGroup input:focus-visible,
.formGroup textarea:focus-visible {
    outline: 1px solid var(--color-primary);
}

.formConversemos button {
    background: none;
    border: 2px solid var(--color-black);
    font-size: 0.75rem;
    padding: 0.85rem;
    transition: all 0.3s;
    cursor: pointer;
}

.formConversemos button:hover {
    background: var(--color-black);
    color: var(--color-white);
}

.error {
    color: var(--color-red);
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.error span {
    width: 5%;
    font-size: 0.75rem !important;
}

@media (width >=660px) {
    section {
        flex-direction: row;
        gap: 0;
    }

    section>div,
    section>div>div,
    .addressFooter {
        gap: 2rem;
    }

    .formConversemos button {
        font-size: 0.875rem;
    }
}

@media (width >=1080px) {

    section>div,
    section>div>div {
        gap: 2.75rem;
    }

    .parallaxContent section>div {
        width: 52% !important;
    }

    section>form {
        width: 48% !important;
    }

    .addressFooter {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2.5rem;
    }

    .addressFooter>div {
        width: 45%;
    }
}
</style>