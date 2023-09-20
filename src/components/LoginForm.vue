<script setup lang="ts">
</script>

<template>
  <section>
    <form @submit="login" method="post">
        <h2>Por favor, inicie sesión para continuar</h2>
        <div class="form-control">
            <label for="email">Correo electrónico: </label>
            <input type="email" name="email" id="email" v-model="email" required>
        </div>
        <div class="form-control">
            <label for="password">Contraseña: </label>
            <input type="password" name="password" id="password" v-model="password" required>
        </div>
        <button >Iniciar sesión</button>
    </form>
  </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login(e: Event){
            e.preventDefault()
            this.$emit('login', {
                email: this.email,
                password: this.password
            })
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

.form-control > *, button {
    display: block;
    width: 100%;
}
</style>
