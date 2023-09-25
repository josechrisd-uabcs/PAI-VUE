<script setup lang="ts">
import { type User } from '../types'

const props = defineProps<{
    usuarios: User[]
}>()
</script>

<template>
    <table>
        <thead>
            <td>Nombre</td>
            <td>Email</td>
            <td>Contraseña</td>
            <td>Acciones</td>
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
                <td>
                    <button @click="(e) => editUser(e, i)">Editar</button>
                    <button @click="(e) => deleteUser(e, i)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
export default {
    methods: {
        editUser(e: Event, i: number){
            e.preventDefault()
            this.$emit('edit', {
                index: i,
                user: this.usuarios[i]
            })
        },
        deleteUser(e: Event, i: number){
            e.preventDefault()
            this.$emit('delete', {
                index: i,
                user: this.usuarios[i]
            })
        }
    }
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
