

<template>

  <section class="header">
   
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <router-link to="/" class="navbar-brand"><h2>Dominicana pal mundo<em>.</em></h2></router-link>
          
          <link rel="assets/images/favicon-32x32.png" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
                  <span class="sr-only">(current)</span>
              </li> 
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Sobre Nosotros</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Cultura Dominicana</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="post-details.html">Detalles</a>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contacto</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  

  </section>



</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>


</style>