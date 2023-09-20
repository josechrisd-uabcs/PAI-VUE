<script setup lang="ts">
import { type User } from '../types'

const props = defineProps<{
    usuarios: User[]
}>()
</script>

<template>
  <main>
    <table>
        <thead>
            <td>Nombre</td>
            <td>Email</td>
            <td>Contraseña</td>
        </thead>
        <tbody>
            <tr v-for="(user, i) in props.usuarios" :key="i">
                <td>
                    {{ user.name }}
                </td>
                <td>
                    {{ user.email }}
                </td>
                <td>
                    {{ user.password }}
                </td>
            </tr>
        </tbody>
    </table>
  </main>
</template>

<script lang="ts">
export default {
}
</script>

<style scoped>
main{
  display: grid;
  place-items: center;
  min-height: 100vh;
}
table{
    border-collapse: collapse;
}
td{
    border: 1px #000 solid;
}
</style>
