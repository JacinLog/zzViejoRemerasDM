export default{
     template: 
     
     `     
<div class="py-5 d-flex justify-content-center">
  <div class="col-7">

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/imgs/1.png" class="d-block w-100" alt="1">
          <div class="carousel-caption d-none d-md-block bg-dark-50">
            <h5><b>Locutor: </b></h5>
            <p>Si, Guido, sintió el verdadero terror.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./assets/imgs/3.png" class="d-block w-100" alt="3">
        </div>
        <div class="carousel-item">
          <img src="./assets/imgs/2.png" class="d-block w-100" alt="2">
          <div class="carousel-caption d-none d-md-block bg-dark-50">
            <h5><b>Goku: </b></h5>
            <p>Ñaaah?</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  </div>
</div>

     `
}