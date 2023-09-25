<script setup lang="ts">
import LoginForm from './components/LoginForm.vue';
import TablaUsuarios from './components/TablaUsuarios.vue';
import axios from 'axios';
import { type User } from './types';
import swal from 'sweetalert2';
import UserForm from './components/UserForm.vue';
import { ref } from 'vue';
const editdialog = ref<HTMLDialogElement | null>(null)
const editform = ref<any>(null)
</script>

<template>
  <main>
    <LoginForm  v-if="loggedUser === null" @login="login"></LoginForm>
    <div class="logged-panel" v-if="loggedUser !== null">
      <button type="button" @click="addNewBtn"> {{ add_panel ? 'Cancelar' : 'Agregar nuevo'}}</button>
      <UserForm @data="addUser" @cancel="cancelAdd" v-if="add_panel"></UserForm>
      <TablaUsuarios @edit="editBtn" @delete="deleteUser" :usuarios="users_list"></TablaUsuarios>
    </div>
    <dialog ref="editdialog">
        <UserForm @data="editUser" ref="editform" @cancel="cancelEdit"></UserForm>
    </dialog>
  </main>
</template>

<script lang="ts">
export default {
  data() : ({
    loggedUser: User | null,
    users_list: User[],
    add_panel: boolean,
    editing_user: number,
  }) {
    return {
      loggedUser: null,
      users_list: [],
      add_panel: false,
      editing_user: -1,
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
    },
    addUser(user: User) {
      this.users_list.push(user);
      window.localStorage.setItem('users', JSON.stringify(this.users_list));
    },
    addNewBtn(){  
      this.add_panel = !this.add_panel;
    },
    editBtn({index, user}: {index: number, user: User}){
      this.editing_user = index;
      this.$refs.editform.name = user.name;
      this.$refs.editform.password = user.password;
      this.$refs.editform.email = user.email;
      this.$refs.editdialog?.showModal();
    },
    deleteUser({index, user}: {index: number, user: User}){
      swal.fire({
        icon: "warning",
        title: `Seguro de que desea eliminar el usuario ${user.name}`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, seguro",
      }).then(e => {
        if(e.value){
          this.users_list.splice(index, 1);
          window.localStorage.setItem('users', JSON.stringify(this.users_list));
        }
      })
    },
    cancelAdd(){
      this.add_panel = false;
    },
    editUser(data: User){
      this.users_list[this.editing_user].name = data.name;
      this.users_list[this.editing_user].password = data.password;
      this.users_list[this.editing_user].email = data.email;
      window.localStorage.setItem('users', JSON.stringify(this.users_list));
      this.$refs.editdialog?.close();
    },
    cancelEdit(){
      this.$refs.editdialog?.close();
      this.editing_user = -1;
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
.logged-panel{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
dialog[open] {
  display: block;
  margin: auto;
    position: fixed;
    inset-block-start: 0px;
    inset-block-end: 0px;
    max-width: calc((100% - 6px) - 2em);
    max-height: calc((100% - 6px) - 2em);
    user-select: text;
    visibility: visible;
    overflow: auto;
}
</style>
