<template>
  <section class="about-us">
    <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>ITINERARIO</h4>
                <h2>Descubre el que mas se ajusta a ti!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container">

      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btnn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                NOMBRE ITINERARIO
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

                <div class="columns is-multiline">
                  <div class="column">
                    <h3>Precio X Dia</h3>
                    <p class="pp">RD$4,000.00</p>
                  </div> 
                  <div class="column">
                    <h3>Cantidad de Dias</h3>
                    <p class="pp">4 dias</p>
                  </div> 
                  <div class="column">
                    <h3>Lugares X Visitar</h3>
                    <li>Cayo Arena</li>
                    <li>Cayo Levantado</li>
                    <li>Playa Rincon</li>
                    <li>Playa Linda</li>                   
                  </div> 
                </div>

            </div> 
          
          </div>
        
        </div>

        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btnn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                NOMBRE ITINERARIO
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

                <div class="columns is-multiline">
                  <div class="column">
                    <h3>Precio X Dia</h3>
                    <p class="pp">RD$4,000.00</p>
                  </div> 
                  <div class="column">
                    <h3>Cantidad de Dias</h3>
                    <p class="pp">4 dias</p>
                  </div> 
                  <div class="column">
                    <h3>
                      Lugares X Visitar
                    </h3>

                      <li>Cayo Arena</li>
                      <li>Cayo Levantado</li>
                      <li>Playa Rincon</li>
                      <li>Playa Linda</li>   


                      
                                    
                  </div> 

                
                </div>

            </div> 
          
          </div>
        
        </div>

        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btnn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                NOMBRE ITINERARIO
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

                <div class="columns is-multiline">
                  <div class="column">
                    <h3>Precio X Dia</h3>
                    <p class="pp">RD$4,000.00</p>
                  </div> 
                  <div class="column">
                    <h3>Cantidad de Dias</h3>
                    <p class="pp">4 dias</p>
                  </div> 
                  <div class="column">
                    <h3>Lugares X Visitar</h3>
                    <li>Cayo Arena</li>
                    <li>Cayo Levantado</li>
                    <li>Playa Rincon</li>
                    <li>Playa Linda</li>                   
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
    export default {
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'Title 1',
                    text: 'Text 1'
                },
                {
                    title: 'Title 2',
                    text: 'Text 2'
                },
                {
                    title: 'Title 3',
                    text: 'Text 3'
                }
                ]
            }
        }
    }
</script>


<style>
.btnn{
  color: #f48840;
  font-weight: bold;
  border:0;
  background: transparent;
  }

.container{
  padding-top: 30px;
}

.card-header{
  background-color: antiquewhite;
}
.pp{
  font-size: 30px;
  color: #f48840
  
}

li{
  list-style-type: none;
  color: #f48840;
  font-size: 20px;
}

</style>
