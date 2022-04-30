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
              <h1 style="font-size:28px; color: #f48840">Crea tu propio itinerario</h1>
              <form class="form-group">
                <input
                  class="form-control"
                  placeholder="Nombre Itinerario"
                  required
                />
                <input type="number"
                  class="form-control"
                  placeholder="Precio por dia dispuesto a pagar"
                  required
                />


                <div class="form-group">
                  <select class="form-control"  >                      
                    <option hidden>Dias deseados</option>
                    <option value="admin">1</option>
                    <option value="Admin">2</option>
                    <option value="Admin">3</option>
                    <option value="Admin">4</option>
                    <option value="Admin">5</option>
                    <option value="Admin">6</option>
                    <option value="Admin">7</option>
                  </select>
                </div>

                <div class="form-group">
                  <select class="form-control"  >                      
                    <option hidden>Lugares interesados</option>
                    <option value="admin">Zona norte</option>
                    <option value="Admin">Zona este</option>
                    <option value="Admin">Playa</option>
                    <option value="Admin">Montaña</option>
                    <option value="Admin">Natura</option>
                  </select>
                </div>
              </form>
            </div>
             <div class="form-group tm-form-element tm-form-element-2">
                <button type="submit" class="btn btn-primary tm-btn-search" style="background: #f48840; border: #f48840">Crear Itinerario</button>
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
    background: url(https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/09/Lugares-para-viajar-solo.jpg?resize=1280%2C640&ssl=1) no-repeat center
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

// aqui lo deje igualito, habria que cambiar este script
// aqui lo deje igualito, habria que cambiar este script
// aqui lo deje igualito, habria que cambiar este script
// aqui lo deje igualito, habria que cambiar este script


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
          console.log(response);
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


