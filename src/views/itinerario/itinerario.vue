<template>
  <section class="about-us">
    <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>Descubre el que mas se ajusta a ti!</h4>
                <h2>MIS ITINERARIOS</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <div id="accordion">
        <div class="card" v-for="(itinerary, index) in itineraries" :key="index">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btnn"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {{itinerary.name}}
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
                  <h3>Precio X Dia</h3>
                  <p class="pp">RD$ {{itinerary.pricePerDay}}.00</p>
                </div>
                <div class="column">
                  <h3>Cantidad de Dias</h3>
                  <p class="pp"> {{itinerary.totalDays}} dias</p>
                </div>
                <div class="column">
                  <h3>Lugares a visitar</h3>
                  <li v-for="(place, index) in itinerary.places" :key="index">
                      {{place.name}}
                  </li>
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
import ItineraryService from '../../core/services/itinerary.service'

export default Vue.extend({
  data() {
    return {
        service: new ItineraryService(),
        itineraries: []
    };
  },

 async beforeMount(){

     const response = await this.service.get()
     this.itineraries = response
   this.itineraries = this.itineraries.sort(function (a, b){
    return a.name.localeCompare(b.name, 'en', { numeric: true })
});
  }
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
