<script setup lang="ts">
import LoginForm from './components/LoginForm.vue';
import TablaUsuarios from './components/TablaUsuarios.vue';
import axios from 'axios';
import { type User } from './types';
import swal from 'sweetalert2';

</script>

<template>
  <main>
    <LoginForm  v-if="loggedUser === null" @login="login"></LoginForm>
    <TablaUsuarios :usuarios="users_list" v-if="loggedUser !== null" ></TablaUsuarios>
  </main>
</template>

<script lang="ts">
export default {
  data() : ({
    loggedUser: User | null,
    users_list: User[],
  }) {
    return {
      loggedUser: null,
      users_list: [],
    };
  },
  methods: {
    getUsers() {
      return new Promise<User[]>((res, rej) => {
        try{
          const users = window.localStorage.getItem('users');
          if(users !== null) {
            res(JSON.parse(users));
            return;
          }
        }catch(e) {
          console.warn("Hubo un error al cargar los datos, usando los datos por defecto");
        }
        axios.get("/default_users.json").then(e => {
          window.localStorage.setItem('users', JSON.stringify(e.data));
          res(e.data)
        }).catch(rej);
      })
    },
    login(e: User) {
      swal.showLoading();
      this.getUsers().then(users_list => {
        swal.close();
        const user = users_list.find(m => e.email == m.email && m.password == e.password);
        if(user){
          this.loggedUser = user;
          this.users_list = users_list;
        }else{
          swal.fire({
            icon: "error",
            title: "El correo y/o contraseñas son incorrectos"
          })
        }
      }).catch(e => {
        swal.fire({
          icon: "error",
          title: "Ocurrió un error innesperado al cargar los datos",
        })
      });
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
</style>
