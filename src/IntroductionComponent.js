export default function IntroductionComponent(props){
    return(
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.shiksha.com/mediadata/images/1547021891phpC9ibVV.png" class="d-block w-100 " alt="Responsive image" />
    </div>
    <div class="carousel-item">
      <img src="https://scontent.fdel1-1.fna.fbcdn.net/v/t39.30808-6/307767989_424054113174599_7484872226889160300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SPq1MTC_ns0AX9xeW5U&_nc_ht=scontent.fdel1-1.fna&oh=00_AfDMQxahLkvFIMXxOKY1Gsqn3L1LtsMvoF6h9hATJNwZRA&oe=64CFA43E" class="img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://imsec.ac.in/assets/images/university/course4.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}