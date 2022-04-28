<template>
<div id="app">

   <div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-register"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">


               <div class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Registrate</h1>
                  <form class="form-group">
                     <input v-model="nameReg" class="form-control" placeholder="Nombre completo" required>
                     <input v-model="countryReg" class="form-control" placeholder="Pais de residencia" required>
                     <input v-model="emailReg" type="email" class="form-control" placeholder="Correo" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Contraseña" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirmar Contraseña" required>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Ya tienes una cuenta? <router-link to="/login" >Inicia Sesion</router-link>
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


   
   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   .wallpaper-register {
      background: url(https://free4kwallpapers.com/uploads/originals/2020/05/16/beach-ocean-wallpaper.jpg)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
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
export default {

  methods: {
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        alert("You are now logged in");
      }
    },
  }




}
</script>


<script>
export default {



    data: {
        registerActive: false,
        emailLogin: "",
        passwordLogin: "",
        emailReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false },


        methods: {
            doLogin() {
                if (this.emailLogin === "" || this.passwordLogin === "") {
                    this.emptyFields = true;
                } else {
                    alert("You are now logged in");
                }
            },

            doRegister() {
                if (
                this.emailReg === "" ||
                this.passwordReg === "" ||
                this.confirmReg === "")
                {
                    this.emptyFields = true;
                } else {
                    alert("You are now registered");
                }
            } 
        
        }



}

</script>