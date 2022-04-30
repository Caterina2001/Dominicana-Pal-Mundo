<template>
  <body>
    <b-notification
      type="is-success"
      has-icon
      aria-close-label="Close notification"
      :class="{ 'show-success': success }"
    >
      ¡Hotel registrado correctamente!
    </b-notification>
    <b-notification
      type="is-danger"
      has-icon
      :class="{ 'show-danger': error }"
      aria-close-label="Close notification"
    >
      No se pudo completar la operación.
    </b-notification>
    <div class="tm-section tm-bg-img" id="tm-section-1">
      <div class="tm-bg-white ie-container-width-fix-2">
        <div class="container ie-h-align-center-fix">
          <div class="row">
            <div class="col-xs-12 ml-auto mr-auto ie-container-width-fix">
              <form
                action="index.html"
                method="get"
                class="tm-search-form tm-section-pad-2"
              >
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      name="check-in"
                      type="text"
                      class="form-control"
                      v-model="model.name"
                      placeholder="Nombre"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      name="check-out"
                      type="text"
                      class="form-control"
                      v-model="model.location"
                      placeholder="Ubicación"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      name="check-out"
                      type="Number"
                      class="form-control"
                      v-model="model.rooms"
                      placeholder="Habitaciones"
                    />
                  </div>
                </div>
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-50">
                    <input
                      name="check-out"
                      type="Number"
                      class="form-control"
                      v-model="model.pricePerDay"
                      placeholder="Precio por día"
                    />
                  </div>

                  <div class="form-group tm-form-element tm-form-element-2">
                    <button
                      type="button"
                      @click="add()"
                      class="btn btn-primary tm-btn-search"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
                <div class="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                  <p class="tm-margin-b-0">Complete todos los campos.</p>
                  <a
                    href="#"
                    class="
                      ie-10-ml-auto
                      ml-auto
                      mt-1
                      tm-font-semibold tm-color-primary
                    "
                    >Necesita ayuda?</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tm-section-2">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="tm-section-title">
              Invertir en viajar es invertir en uno mismo
            </h2>
            <!-- <p class="tm-color-white tm-section-subtitle">SDominicana Pal Mundo</p> -->
            <a
              href="https://web.powerva.microsoft.com/environments/Default-9156d3bf-d39d-42cb-abf6-b7deca4a0892/bots/c5867426-cbda-47a0-8f7e-1478ff90d5b7/canvas"
              class="tm-color-white tm-btn-white-bordered"
              >Accede a nuestro CHATBOT</a
            >
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.btn-primary {
  background-color: #f48840;
  border-color: #f48840;
  height: 50px;
}

.form-control {
  height: 50px;
  border: 1px solid #f48840;
}

.form-group.tm-form-element.tm-form-element-2 {
  position: absolute;
  right: 51px;
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
</style>
<script lang="ts">
import Vue from "vue";
import { HotelModel } from "../../core/models/hotel.model";
import HotelService from "../../core/services/hotel.service";

export default Vue.extend({
  data() {
    return {
      service: new HotelService(),
      model: new HotelModel(),
      error: false,
      success: false,
    };
  },

  methods: {
    async add() {
      this.model.registrationDate = new Date();
      this.model.availableRooms = this.model.rooms;
      this.model.occupiedRooms = 0;
      const response = await this.service.post(this.model);
      if (response.status != 200) {
        this.success = false;
        this.error = true;
      } else {
        this.success = true;
        this.error = false;
      }
    },
  },
});
</script>