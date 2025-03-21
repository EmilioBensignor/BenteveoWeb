<template>
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
            <button type="submit" :disabled="isLoading">
                <span v-if="isLoading" class="loader"></span>
                <span v-else>ENVIAR</span>
            </button>
        </div>
        <Dialog v-model:visible="showSuccessDialog" :modal="true" :closable="true" :closeOnEscape="true"
            :dismissableMask="true" @hide="closeDialog">
            <div class="dialogContent column">
                <p class="text-center">¡Tus datos se enviaron correctamente!</p>
                <p class="text-center font-semibold">Nos pondremos en contacto con vos en la brevedad.</p>
            </div>
        </Dialog>
    </form>
</template>

<script>
export default {
    data() {
        return {
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
            isLoading: false,
            showSuccessDialog: false,
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
        async handleSubmit() {
            Object.keys(this.errors).forEach(key => this.errors[key] = '')
            this.isValid = false

            const nombreValid = this.validateNombre()
            const empresaValid = this.validateEmpresa()
            const emailValid = this.validateEmail()

            if (nombreValid && empresaValid && emailValid) {
                this.isValid = true
                this.isLoading = true
                try {
                    // Llamar a la API para enviar el email
                    const response = await fetch('/api/sendEmail', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.formData)
                    });

                    const result = await response.json();

                    if (!response.ok) {
                        throw new Error(result.message || 'Error al enviar el formulario');
                    }

                    this.showSuccessDialog = true;

                    Object.keys(this.formData).forEach(key => this.formData[key] = '');
                } catch (error) {
                    console.error('Error:', error);
                    alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
                } finally {
                    this.isLoading = false;
                }
            }
        },
        closeDialog() {
            this.showSuccessDialog = false
        }
    }
}
</script>

<style scoped>
.formConversemos>div {
    gap: 1.5rem;
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
    min-width: 120px;
    position: relative;
    background: none;
    border: 2px solid var(--color-black);
    font-size: 0.75rem;
    padding: 0.85rem;
    transition: all 0.3s;
    cursor: pointer;
}

.formConversemos button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.formConversemos button:hover {
    background: var(--color-black);
    color: var(--color-white);
}

.loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    vertical-align: middle;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
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

    .formConversemos button {
        font-size: 0.875rem;
    }
}

@media (width >=1080px) {
    form {
        width: 48% !important;
    }
}
</style>