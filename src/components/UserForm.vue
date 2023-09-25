<script setup lang="ts">
</script>

<template>
  <section>
    <form @submit="data" method="post">
        <div class="form-control">
            <label for="full_name">Nombre completo: </label>
            <input type="text" name="full_name" id="full_name" v-model="name" required>
        </div>
        <div class="form-control">
            <label for="email">Correo electrónico: </label>
            <input type="email" name="email" id="email" v-model="email" required>
        </div>
        <div class="form-control">
            <label for="new_password">Contraseña: </label>
            <input type="password" name="new_password" id="new_password" v-model="password" required>
        </div>
        <div class="row">
            <button type="button" @click="cancel">Cancelar</button>
            <button>Guardar</button>
        </div>
    </form>
  </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        data(e: Event){
            e.preventDefault()
            this.$emit('data', {
                name: this.name,
                email: this.email,
                password: this.password
            })
        },
        cancel(e: Event){
            e.preventDefault()
            this.$emit('cancel', {})
        }
    }
}
</script>

<style scoped>
section, form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 480px;
}
.form-control{
    padding-bottom: .5em;;
    width: 100%;
}

.form-control > * {
    display: block;
    width: 100%;
}

.row{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
