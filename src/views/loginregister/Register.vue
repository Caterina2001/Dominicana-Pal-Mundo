<template>
  <div id="app">
    <div class="login-page">
      <transition name="fade">
        <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card register">
              <h1>Registrate</h1>
              <form class="form-group">
                <input
                  v-model="user.model.name"
                  class="form-control"
                  placeholder="Nombre completo"
                  required
                />
                <input
                  v-model="user.model.countryOfResidence"
                  class="form-control"
                  placeholder="Pais de residencia"
                  required
                />
                <input
                  v-model="user.model.email"
                  type="email"
                  class="form-control"
                  placeholder="Correo"
                  required
                />
                <input
                  v-model="user.model.password"
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  required
                />
                <input
                  v-model="user.confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="Confirmar Contraseña"
                  required
                />
                <div class="form-group">
                  <select class="form-control" v-model="user.model.role">
                    <option hidden>Seleccione su rol</option>
                    <option selected value="Registered">Normal</option>
                    <option value="Admin">Administrador</option>
                  </select>
                </div>
                <input
                  v-if="user.model.role == 'Admin'"
                  v-model="secretCode"
                  type="password"
                  class="form-control"
                  placeholder="Código secreto"
                  required
                />
                <input
                  type="button"
                  value="Registrar"
                  class="btn btn-primary"
                  @click="signUp()"
                />
                <p>
                  Ya tienes una cuenta?
                  <router-link to="/login">Inicia Sesion</router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .wallpaper-login {
    background: url(https://wallpapercave.com/wp/wp2183743.jpg) no-repeat center
      center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}
.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>


<script>
import Vue from "vue";
import UserService from "../../core/services/user.service";
import { SignUpModel } from "../../core/models/user.model";
import store from "@/store/index";

export default Vue.extend({
  data() {
    return {
      user: {
        model: new SignUpModel(),
        confirmPassword: "",
      },
      secretCode: "",
      service: new UserService(),
    };
  },

  methods: {
    async signUp() {
      if (this.user.confirmPassword == this.user.model.password) {
        if (
          (this.user.model.role == "Admin" && this.secretCode == "TDS") ||
          this.user.model.role == "Registered"
        ) {
          const response = await this.service.signUp(this.user.model);
          if (localStorage.getItem("currentUser")) {
            localStorage.removeItem("currentUser");
          }

          localStorage.setItem("currentUser", JSON.stringify(response.data));
          store.state.user = response.data;

          if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
          }

          localStorage.setItem("token", JSON.stringify(response.token));
          store.state.token = response.token;
        }
      }
    },
  },
});
</script>


