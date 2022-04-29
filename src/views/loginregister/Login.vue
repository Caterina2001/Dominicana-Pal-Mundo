<template>
  <div class="login-page">
    <transition name="fade">
      <div class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card login">
            <h1>Inicia Sesion</h1>
            <form class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Correo"
                required
                v-model="model.email"
              />
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                required
                v-model="model.password"
              />
              <input type="button" value="Entrar" class="btn btn-primary" @click="login()" />
              <p>
                No tienes cuenta?
                <router-link to="/register">Registrate aqui</router-link>
              </p>
              <p><a href="#">Olvidaste tu contraseña?</a></p>
            </form>
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

<script lang="ts">
import Vue from "vue";
import UserService from "../../core/services/user.service";
import { SignInModel } from "../../core/models/user.model";
import store from '@/store/index'

export default Vue.extend({
  data() {
    return {
      service: new UserService(),
      model: new SignInModel(),
    };
  },

  methods: {
    async login() {
      let response = await this.service.signIn(this.model);
      if(localStorage.getItem("currentUser"))
      {
         localStorage.removeItem("currentUser")
      }
  
      localStorage.setItem("currentUser", JSON.stringify(response.user))
      store.state.user = response.user
    },
  },
});
</script>


