<template>
  <section class="about-us">
    <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>¡Planea tus vacaciones perfectas con nosotros!</h4>
                <h2>Mis Reservaciones</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <div id="accordion">
        <div
          class="card"
          v-for="(reservation, index) in reservations"
          :key="index"
        >
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btnn"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               Reservación {{ index + 1}}
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div class="columns is-multiline">
                <div class="column">
                  <h3>Hotel</h3>
                  <p class="pp">{{ reservation.hotel.name }}</p>
                </div>
                <div class="column">
                  <h3>Cantidad de Días</h3>
                  <p class="pp"> {{difference( reservation.endingDate,reservation.startDate)}} días</p>
                </div>
                <div class="column">
                  <h3>Desde</h3>
                  <p class="pp">{{ reservation.startDate.substring(0, 9) }}</p>
                </div>
              </div>
              <div class="columns is-multiline">
                <div class="column">
                  <h3>Hasta</h3>
                  <p class="pp">{{ reservation.endingDate.substring(0,9) }}</p>
                </div>
                <div class="column">
                  <h3>Precio total</h3>
                  <p class="pp">RD${{ reservation.totalPrice }}.00</p>
                </div>
                <div class="column">
                  <!-- <h3>Inicio</h3> -->
                  <!-- {{ reservation.starDate }} -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import Vue from "vue";
import reservationService from "../../core/services/reservation.service";
import store from "@/store/index";

export default Vue.extend({
  data() {
    return {
      service: new reservationService(),
      reservations: [],
    };
  },

  methods: {
     difference(endingDate, startDate) {
      let fecha1 = new Date(startDate);
      let fecha2 = new Date(endingDate);

      let resta = fecha2.getTime() - fecha1.getTime();
      return Math.round(resta / (1000 * 60 * 60 * 24));
    },
  },

  async beforeMount() {
    const response = await this.service.get(store.state.user._id);
    this.reservations = response;
  },
});
</script>


<style>
.btnn {
  color: #f48840;
  font-weight: bold;
  border: 0;
  background: transparent;
}

.container {
  padding-top: 30px;
}

.card-header {
  background-color: antiquewhite;
}
.pp {
  font-size: 30px;
  color: #f48840;
}

li {
  list-style-type: none;
  color: #f48840;
  font-size: 20px;
}
</style>
