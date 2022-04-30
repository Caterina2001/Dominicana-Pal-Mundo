<template>
  <div class="wrapper row2">
    <div class="hoc container clear">
      <div class="sectiontitle">
        <p class="heading underline font-x2">
          Hoteles cercanos 
        </p>
        <br>
        <router-link to="/addhotel" class="tm-btn-white-bordered add-hotel"
          >Agregar hotel</router-link
        >
      </div>
      <ul class="nospace group team">
        <li class="one_quarter first">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel1.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Hotel View</strong> <em>A 5 Km de distancia</em>
            </figcaption>
          </figure>
        </li>
        <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel2.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Ecoturismo Rio Blanco</strong>
              <em>A 0 Km de distancia</em>
            </figcaption>
          </figure>
        </li>
        <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel3.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Hotel Primavera</strong> <em>A 10 Km de distancia</em>
            </figcaption>
          </figure>
        </li>
        <li class="one_quarter">
          <figure>
            <a class="" href="#"
              ><img src="assets/images/hotel4.jpg" alt=""
            /></a>
            <figcaption>
              <strong>Hotel El Libano</strong> <em>A 2 Km de distancia</em>
            </figcaption>
          </figure>
        </li>
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
</style>