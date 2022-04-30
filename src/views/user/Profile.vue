<template>
  <body>
    <div class="tm-section-2">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="tm-section-title" style="text-transform:capitalize !important">Mi Perfil</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-section tm-position-relative">
      <template>
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title"></p>
        </div>
        <b-notification
          type="is-success"
          has-icon
          aria-close-label="Close notification"
          :class="{ 'show-success': success }"
        >
          ¡Información actualizada correctamente!
        </b-notification>
        <b-notification
          type="is-danger"
          has-icon
          :class="{ 'show-danger': error }"
          aria-close-label="Close notification"
        >
          No se pudo completar la operación.
        </b-notification>
      </template>
      <div class="body">
        <div class="profile-icon">
<i class="fa fa-user" aria-hidden="true"></i>          <p class="tm-section-subtitle">{{ user.role }}</p>
        </div>
        <div class="card-content">
          <div class="content">
            <div class="columns is-multiline">
              <div class="column">
                <h3>Nombre</h3>
                <p :class="{ view: view }" class="view-info">{{ user.name }}</p>
                <input
                  type="text"
                  class="form-control edit"
                  :class="{ showEdit: editing }"
                  v-model="user.name"
                  required
                />
              </div>

              <div class="column">
                <h3>Correo</h3>
                <p :class="{ view: view }" class="view-info">
                  {{ user.email }}
                </p>
                <input
                  type="email"
                  class="form-control edit"
                  :class="{ showEdit: editing }"
                  v-model="user.email"
                  required
                />
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column">
                <h3>País de residencia</h3>
                <p :class="{ view: view }" class="view-info">
                  {{ user.countryOfResidence }}
                </p>
                <input
                  type="text"
                  class="form-control edit"
                  :class="{ showEdit: editing }"
                  required
                  v-model="user.countryOfResidence"
                />
              </div>

              <div class="column">
                <h3 :class="{ view: view }" class="view-info">
                  Fecha de registro
                </h3>
                <p :class="{ view: view }" class="view-info">
                  {{ user.registrationDate }}
                </p>
                <h3 class="edit" :class="{ showEdit: editing }">Contraseña</h3>
                <input
                  type="password"
                  class="form-control edit"
                  :class="{ showEdit: editing }"
                  required
                  v-model="user.password"
                />
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column">
                <div class="buttons view-info" :class="{ view: view }">
                  <b-button type="is-danger" @click="confirmUserDelete()">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    Delete
                  </b-button>
                </div>
              </div>
              <div class="column">
                <div class="buttons view-info" :class="{ view: view }">
                  <b-button type="is-success" @click="edit()">
                    <i class="fa fa-pencil" aria-hidden="true"></i> Editar
                  </b-button>
                </div>
                <div class="buttons edit" :class="{ showEdit: editing }">
                  <b-button type="is-info" @click="save()">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import Vue from "vue";
import {
  DialogProgrammatic as Dialog,
  ToastProgrammatic as Toast,
} from "buefy";
import store from "@/store/index";
import UserService from "../../core/services/user.service";

export default Vue.extend({
  data() {
    return {
      isComponentModalActive: true,
      editing: false,
      view: false,
      service: new UserService(),
      error: false,
      success: false
    };
  },

  methods: {
    confirmUserDelete() {
      Dialog.confirm({
        title: "Confirmación",
        message: "<b>¿Está seguro de querer eliminar la cuenta?</b>",
        confirmText: "Si",
        cancelText: "No",
        type: "is-danger",

        onConfirm: () => {
          Toast.open({
            indefinite: true,
            message: `I won't close until you explicitly close me!`,
            type: "is-warning",
          });
        },
      });
    },

    delay: function delay(n: any){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    })},

    edit() {
      this.editing = true;
      this.view = false;
    },

    async save() {
      this.editing = false;
      this.view = true;

      const response = await this.service.put(this.user._id, this.user);
      if (localStorage.getItem("currentUser")) {
        localStorage.removeItem("currentUser");
      }

      localStorage.setItem("currentUser", JSON.stringify(response.Data));
      store.state.user = response.Data;
      console.log(response)

      if(response.status != 200){
        this.success = false
        this.error = true
      }
      else{
        console.log("first")
        this.success = true
        this.error = false

      }
    },
  },

  computed: {
    user: function () {
      return store.state.user;
    },
  },

  beforeMount() {
    this.view = true;
    this.editing = false;
  },
});
</script>
<style scoped>
h2 {
  margin-top: -30px;
}

.card-header {
  height: 0px;
}

.body {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 70px;
}
.card-content {
  width: 50%;
  text-align: justify;
}

.profile-icon {
  text-align: center;
  width: 50%;
  margin-top: 35px;
}

.profile-icon .fa {
  font-size: 174px;
}

.toast.is-warning.is-top {
  display: block !important;
}

.edit {
  display: none;
}

.showEdit {
  display: block;
}

.view-info {
  display: none !important;
}

.view {
  display: block !important;
}

.content h3:not(:first-child) {
  margin-top: 0;
}

article.notification.is-success,
article.notification.is-danger {
  width: 466px;
  right: 0;
  z-index: 99;
  position: absolute;
  height: 64px;
  display: none;
}

.show-success, .show-danger {
  display: block !important;
}

h3{
  text-transform:capitalize !important
}

.tm-section{
  padding: 0 !important;
}
</style>