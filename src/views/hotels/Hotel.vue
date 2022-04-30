<template>
  <div class="wrapper row2">
    <div class="hoc container clear">
      <div class="sectiontitle">
        <p class="heading underline font-x2">
<<<<<<< HEAD
          Hoteles en la República Dominicana
        </p>
        <router-link
          to="/addhotel"
          class="tm-btn-white-bordered add-hotel"
          v-if="user.role == 'Admin'"
=======
          Hoteles cercanos 
        </p>
        <br>
        <router-link to="/addhotel" class="tm-btn-white-bordered add-hotel"
>>>>>>> bfc4bed7979ed13b185b234c416fa66987a2b3b9
          >Agregar hotel</router-link
        >
      </div>
      <ul class="nospace group team">
        <li
          class="one_quarter"
          :class="{ first: index == 0 }"
          v-for="(hotel, index) in hotels"
          :key="index"
        >
          <figure>
            <a class="" href="#"><img :src="images[index]" alt="" /></a>
            <figcaption>
<<<<<<< HEAD
              <strong>{{ hotel.name }}</strong>
              <em>{{ hotel.location }}</em>
              <em>RD${{ hotel.pricePerDay }}P/D</em>
              <em v-if="user.role == 'Admin'"
                >{{ hotel.rooms }} Habitaciones</em
              >
              <em v-if="user.role == 'Admin'"
                >{{ hotel.availableRooms }} Habitaciones Disponibles</em
              >
              <em v-if="user.role == 'Admin'"
                >{{ hotel.occupiedRooms }} Habitaciones Ocupadas</em
              >
=======
              <strong>Hotel View</strong> <em>A 5 Km de distancia</em>
>>>>>>> bfc4bed7979ed13b185b234c416fa66987a2b3b9
            </figcaption>
          </figure>
        </li>
        <!-- <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel2.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Ecoturismo Rio Blanco</strong>
              <em>A 0 Km de distancia</em>
            </figcaption>
          </figure>
        </li> -->
        <!-- <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel3.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Hotel Primavera</strong> <em>A 10 Km de distancia</em>
            </figcaption>
          </figure>
        </li> -->
        <!-- <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel4.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Hotel El Libano</strong> <em>A 2 Km de distancia</em>
            </figcaption>
          </figure>
        </li> -->
      </ul>
    </div>
    <div class="tm-section-2">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h5 class="tm-section-title">
              Invertir en viajar es invertir en uno mismo
            </h5>
            <!-- <p class="tm-color-white tm-section-subtitle">SDominicana Pal Mundo</p> -->
            <router-link
              to="/reservas"
              class="tm-color-white tm-btn-white-bordered"
              >Reserva Ahora en tu hotel favorito</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HotelService from "../../core/services/hotel.service";
import store from "@/store/index";

export default Vue.extend({
  data() {
    return {
      hotels: [] as any,
      images: [
        "http://localhost:8080/assets/images/hotel1.jpg",
        "http://localhost:8080/assets/images/hotel2.jpg",
        "http://localhost:8080/assets/images/hotel3.jpg",
        "http://localhost:8080/assets/images/hotel4.jpg",
      ],
      service: new HotelService(),
    };
  },
  computed: {
    user: function () {
      return store.state.user;
    },
  },

  async beforeMount() {
    this.hotels = await this.service.get();
    this.hotels = this.hotels.sort(function (a: any, b: any) {
      return a.name.localeCompare(b.name, "en", { numeric: true });
    });
    this.user = JSON.parse(localStorage.getItem("currentUser")!);
  },
});
</script>
<style>
.heading {
  font-size: 32px;
}

.tm-section-title {
  color: white;
  font-size: 2rem;
}

.add-hotel {
  color: #f48840;
}

.team figure em {
  display: block;
  font-style: normal;
  font-size: 0.8rem;
  line-height: 26px;
}
</style>