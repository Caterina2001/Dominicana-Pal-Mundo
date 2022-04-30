<template>
  <body>
    <b-notification
      type="is-success"
      has-icon
      aria-close-label="Close notification"
      :class="{ 'show-success': success }"
    >
      ¡Reservación registrada correctamente!
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
                  <div class="form-group tm-form-element tm-form-element-100">
                    <select
                      name="city"
                      class="form-control tm-select"
                      id="inputCity"
                      v-model="reservation.hotel"
                      placeholder="Hoteles"
                    >
                      <option
                        v-for="(hotel, index) in hotels"
                        :key="index"
                        :value="hotel._id"
                      >
                        {{ hotel.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    Desde
                    <input
                      name="check-in"
                      type="date"
                      class="form-control"
                      id="inputCheckIn"
                      placeholder="Entrada"
                      v-model="reservation.startDate"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-50">
                    Hasta
                    <input
                      name="check-out"
                      type="date"
                      class="form-control"
                      id="inputCheckOut"
                      placeholder="Salida"
                      v-model="reservation.endingDate"
                    />
                  </div>
                </div>
                <div class="form-row tm-search-form-row">
                  <div class="form-group tm-form-element tm-form-element-2">
                    <select
                      name="adult"
                      class="form-control tm-select"
                      id="adult"
                    >
                      <option value="">Personas</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="form-group tm-form-element tm-form-element-2">
                    <input
                      name="check-out"
                      type="Number"
                      class="form-control"
                      id="inputCheckOut"
                      placeholder="Días"
                      v-model="days"
                      min="1"
                      pattern="^[0-9]+"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-2">
                    <input
                      name="check-out"
                      type="Number"
                      class="form-control"
                      id="inputCheckOut"
                      placeholder="Habitaciones"
                      min="1"
                      pattern="^[0-9]+"
                      v-model="reservation.roomsQty"
                    />
                  </div>
                  <div class="form-group tm-form-element tm-form-element-2">
                    <button
                      type="button"
                      @click="add()"
                      class="btn btn-primary tm-btn-search"
                    >
                      Reservar
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

.form-group.tm-form-element.tm-form-element-50 {
  display: flex;
  gap: 5px;
  align-items: center;
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

.show-success,
.show-danger {
  display: block !important;
}
</style>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { HotelModel } from "../../core/models/hotel.model";
import { ReservationModel } from "../../core/models/reservation.model";
import HotelService from "../../core/services/hotel.service";
import ReservationService from "../../core/services/reservation.service";

export default Vue.extend({
  data() {
    return {
      hotels: [] as any,
      hotelService: new HotelService(),
      reservationService: new ReservationService(),
      reservation: new ReservationModel(),
      days: 0,
      hotel: new HotelModel(),
      error: false,
      success: false,
    };
  },

  methods: {
    async add() {
      this.hotel = this.hotels.find(
        (item: any) => item._id == this.reservation.hotel
      );
      this.days = this.difference(
        this.reservation.endingDate,
        this.reservation.startDate
      );

      if (this.days > 0 && this.hotel.availableRooms >= this.reservation.roomsQty) { 
        this.reservation.totalPrice = this.days * this.hotel.pricePerDay;
        this.reservation.user = store.state.user._id;

        const responseReservation = await this.reservationService.post(
          this.reservation
        );

        this.hotel.availableRooms -= this.reservation.roomsQty
        this.hotel.occupiedRooms += this.reservation.roomsQty
        const responseHotel = await this.hotelService.put(this.reservation.hotel.toString(),this.hotel)
        if (responseReservation.status != 200) {
          this.success = false;
          this.error = true;
        } else {
          this.success = true;
          this.error = false;
        }
      }
      else{
         this.error = true
      }
    },

    difference(endingDate: any, startDate: any) {
      let fecha1 = new Date(startDate);
      let fecha2 = new Date(endingDate);

      let resta = fecha2.getTime() - fecha1.getTime();
      return Math.round(resta / (1000 * 60 * 60 * 24));
    },
  },

  async beforeMount() {
    this.hotels = await this.hotelService.get();
  },
});
</script>