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
                <label for="name">Nombre</label>
                <input
                  class="form-control"
                  placeholder="Nombre Itinerario"
                  v-model="itinerary.name"
                  required
                />

                 <label for="name">Precio por día</label>
                <input type="number"
                  class="form-control"
                    v-model="itinerary.pricePerDay"
                  placeholder="Precio por dia dispuesto a pagar"
                  required
                />

 <label for="name">Cantidad de días</label>
                 <input type="number"
                  class="form-control"
                    v-model="itinerary.totalDays"
                  placeholder="Cantidad de días"
                  required
                />

                
                <div class="form-group">
                  <label for="">Categoría</label>
                  <select class="form-control"  v-model="categoryId">                      
                    <option hidden>Lugares interesados</option>
                    <option v-for="(categories, index) in categories" :key="index" :value="categories._id">
                      {{categories.name}}
                    </option>
                    <!-- <option value="admin">Zona norte</option>
                    <option value="Admin">Zona este</option>
                    <option value="Admin">Playa</option>
                    <option value="Admin">Montaña</option>
                    <option value="Admin">Natura</option> -->
                  </select>
                </div>
              </form>
            </div>
             <div class="form-group tm-form-element tm-form-element-2">
                <button type="button" @click="add()" class="btn btn-primary tm-btn-search" style="background: #f48840; border: #f48840">Crear Itinerario</button>
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

import Vue from "vue";
import ItineraryService from "../../core/services/itinerary.service";
import { ItineraryModel } from "../../core/models/itinerary.model";
import CategoryService from '../../core/services/category.service'
import store from "@/store/index";

export default Vue.extend({
  data() {
    return {
     service: new ItineraryService,
     itinerary: new ItineraryModel,
     categoryService: new CategoryService,
     categories: [],
     categoryId: ""
    };
  },

  methods:{
    async add(){
      const response = await this.service.postItinerary(this.itinerary, this.categoryId)
      console.log(response)

    }
  },

 async beforeMount(){
   const response = await this.categoryService.get()
   this.categories = response
  }
  
});
</script>


