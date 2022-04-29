<template>
    <section class="contact-us">

        
        <div class="heading-page header-text">
        <section class="page-heading">
            <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <div class="text-content">
                    <h4>contacto</h4>
                    <h2>Descubre donde estamos!</h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>



      <div class="container">
        <div class="row">
        
          <div class="col-lg-12">
            <div class="down-contact">
              <div class="row">
                <div class="col-lg-8">
                  <div class="sidebar-item contact-form">
                    <div class="sidebar-heading">
                      <h2>Envianos un mensaje!</h2>
                    </div>
                    <div class="content">

                      <!-- <form id="contact" action="/php/enviar.php" method="post">  -->
                      <form action="mailto:dominicana@palmundo.com" method="post" enctype="text/plain">
                        <div class="row">
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Tu nombre" required="">
                            </fieldset>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Correo" required="">
                            </fieldset>
                          </div>
                          <div class="col-md-12 col-sm-12">
                            <fieldset>
                              <input name="subject" type="text" id="subject" placeholder="Tema">
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Tu mensaje..." required=""></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-button">Enviar mensaje</button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="sidebar-item contact-information">
                    <div class="sidebar-heading">
                      <h2>Informacion de Contacto</h2>
                    </div>
                    <div class="content">
                      <ul>
                        <li>
                          <h5>809-309-0000</h5>
                          <span>Numero de Contacto</span>
                        </li>
                        <li>
                          <h5>dominicana@palmundo.com</h5>
                          <span>Correo de la compañia</span>
                        </li>
                        <li>
                          <h5>Calle El Conde #5, 
                          	<br>Zona Colonial, Santo Domingo. RD.</h5>
                          <span>Direccion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-12">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2284589830924!2d-69.88723036639543!3d18.473308039347366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf883c549e5249%3A0x20d77c49385c0152!2sC.%20El%20Conde%2C%20Santo%20Domingo%2010210!5e0!3m2!1sit!2sdo!4v1650468384662!5m2!1sit!2sdo" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <!-- <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450px" frameborder="0" style="border:0" allowfullscreen></iframe> -->
            </div>
          </div>
          
          </div>
      </div>
    </section>

</template>