<template>
  <div class="wrapper row2">
    <div class="hoc container clear">
      <div class="sectiontitle">
        <p class="heading underline font-x2">Restaurantes en la República Dominicana</p>
      </div>
      <ul class="nospace group team">
        <li
          class="one_quarter"
          v-for="(restaurant, index) in restaurants"
          :key="index"
          :class="{ first: index == 0 }"
        >
          <figure>
            <a class="" href="#"
              ><img src="assets/images/rest1.jpg" alt=""
            /></a>
            <figcaption>
              <strong>{{ restaurant.name }}</strong>
              <em>{{ restaurant.location }}</em>
              <em v-if="restaurant.allowedAge > 0"
                ><b>Restrincción de edad</b></em
              >
              <em v-if="restaurant.allowedAge > 0">{{
                restaurant.allowedAge
              }}</em>
              <em v-if="restaurant.allowedAge <= 0"
                >Sin restrincción de edad</em
              >
              <em v-if="restaurant.public"
                ><i class="fa fa-check" aria-hidden="true"></i>Público</em
              >
              <em v-if="!restaurant.public"
                ><i class="fa fa-times" aria-hidden="true"></i>Privado</em
              >
            </figcaption>
          </figure>
        </li>
        <!-- <li class="one_quarter">
                    <figure><a class="" href="#"><img src="assets/images/rest2.jpg" alt=""></a>
                        <figcaption><strong>Restaurante El Rio</strong> <em>A 0 Km de distancia</em></figcaption>
                    </figure>
                </li>
                <li class="one_quarter">
                    <figure><a class="" href="#"><img src="assets/images/rest3.jpg" alt=""></a>
                        <figcaption><strong>Pizzeria Bruno</strong> <em>A 10 Km de distancia</em></figcaption>
                    </figure>
                </li>
                <li class="one_quarter">
                    <figure><a class="" href="#"><img src="assets/images/rest4.jpg" alt=""></a>
                        <figcaption><strong>Restaurante La Londra</strong> <em>A 2 Km de distancia</em></figcaption>
                    </figure>
                </li> -->
      </ul>
    </div>
  </div>
</template>
<style>
.heading{
    font-size: 32px;
}

.team figure em {
    display: block;
    font-style: normal;
    font-size: 0.8rem;
    line-height: 26px;
}
</style>

<script lang="ts">
import Vue from "vue";
import PlaceService from "../../core/services/places.service";

export default Vue.extend({
  data() {
    return {
      restaurants: [] as any,
      service: new PlaceService(),
    };
  },

  async beforeMount() {
    const response = await this.service.get();
    response.forEach((item: any) => {
      if (item.category.name == "Ríos") {
        this.restaurants.push(item);
      }
    });
  },
});
</script>