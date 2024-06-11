import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import gambar1 from './../Pictures/Slide1.JPG'
import gambar2 from './../Pictures/Slide2.JPG'
import gambar3 from './../Pictures/Slide3.JPG'

function CarouselFade() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
      <div class="card text-bg-dark">
        <img src={gambar1} class="card-img" alt="First Slide"/>
        <Link class="card-img-overlay d-flex flex-column align-items-start align-self-center" to="/Services/AllServices">
          <button class="btn btn-primary btn-lg">Buat Sekarang</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Link>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="card text-bg-dark">
        <img src={gambar2} class="card-img" alt="Second Slide"/>
        <Link class="card-img-overlay d-flex flex-column align-items-start align-self-center" to="/Services/AllServices">
          <button class="btn btn-primary btn-lg">Buat Sekarang</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Link>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="card text-bg-dark">
        <img src={gambar3} class="card-img" alt="Third Slide"/>
        <Link class="card-img-overlay d-flex flex-column align-items-start align-self-center" to="/Services/AllServices">
          <button class="btn btn-primary btn-lg">Hubungi Sekarang</button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Link>
      </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;