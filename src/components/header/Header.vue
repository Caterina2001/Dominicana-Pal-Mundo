

<template>
  <section class="header">
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link to="/" class="navbar-brand"
            ><h2>Dominicana pal mundo<em>.</em></h2></router-link
          >

          <link
            rel="assets/images/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
            href="assets/images/favicon-32x32.png"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
                <span class="sr-only">(current)</span>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Nosotros</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/dominican" class="nav-link"
                  >Cultura</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/reservas" class="nav-link"
                  >Reservas</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contacto</router-link
                >
              </li>
              <div class="user-section">
                <li class="nav-item login" v-if="user.name == ''">
                  <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <div class="navbar-menu" v-else>
                  <div class="navbar-end">
                    <b-dropdown
                      position="is-bottom-left"
                      append-to-body
                      aria-role="menu"
                    >
                      <template #trigger>
                        <a class="navbar-item" role="button" style="margin-top: -6px; margin-right: -53px;">
                          <!-- <i
                            class="fa fa-user-circle-o user-icon"
                         
                          ></i> -->
                         <b-button type="is-dark">Mi sesión</b-button>
                          <b-icon icon="menu-down"></b-icon>
                        </a>
                      </template>

                      <hr class="dropdown-divider" />

                      <b-dropdown-item value="home" aria-role="menuitem">
                        <b-icon icon="home"></b-icon>
                        <strong>
                          {{ user.name }}
                        </strong>
                      </b-dropdown-item>
                      <b-dropdown-item value="products" aria-role="menuitem">
                        <router-link to="profile">
                          <b-icon icon="cart"></b-icon>
                          Ver mi perfil
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item value="products" aria-role="menuitem">
                        <router-link to="itineraries">
                          <b-icon icon="cart"></b-icon>
                          Mis itinerarios
                        </router-link>
                      </b-dropdown-item>
                      <b-dropdown-item value="products" aria-role="menuitem">
                        <router-link to="reservations">
                          <b-icon icon="cart"></b-icon>
                          Mis reservaciones
                        </router-link>
                      </b-dropdown-item>

                      <hr class="dropdown-divider" aria-role="menuitem" />
                      <b-dropdown-item
                        value="logout"
                        aria-role="menuitem"
                        @click="logout()"
                      >
                        <b-icon icon="logout"></b-icon>
                        Cerrar sesión
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store/index";
import { SignUpModel } from "../../core/models/user.model";

export default Vue.extend({
  methods: {
    logout() {
      this.user.name = ""
      localStorage.removeItem("currentUser");
      localStorage.setItem("currentUser", JSON.stringify(new SignUpModel()));
      this.user = JSON.parse(localStorage.getItem("currentUser")!);
      store.state.user = this.user;
    },
  },
  

  computed: {
    user: {
      get: function () {
        return store.state.user;
      },

      set: function () {
        return store.state.user;
      },
    },
  },
});
</script>

<style scoped>
.container {
  margin: 0 0 0 47px !important;
}

.user-section {
  position: absolute;
  right: -106px;
  display: flex;
}

.user-icon {
  font-size: 43px;
}
</style>