import React from "react";
import './../App.css'
import HomeIcon1 from './../Pictures/homeicon1.JPG';
import HomeIcon2 from './../Pictures/homeicon2.JPG';
import HomeIcon3 from './../Pictures/homeicon3.JPG';
import HomeIcon4 from './../Pictures/homeicon4.JPG';


const HomeCard = () => {
    return (
      <div class="flex-container">
        <div class="col-sm-6">
          <div class="card border-light">
          <img src={HomeIcon1} class="card-img-top" alt="HomeIcon"/>
            <div class="card-body">
              <h5 class="card-title">Keahlian Profesional</h5>
              <p class="card-text">Tim kami terdiri dari para ahli yang berpengalaman dan berdedikasi dalam bidang web development dan sistem informasi.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-light">
          <img src={HomeIcon2} class="card-img-top" alt="HomeIcon"/>
            <div class="card-body">
              <h5 class="card-title">Solusi Custom</h5>
              <p class="card-text">Kami memahami bahwa setiap klien memiliki kebutuhan yang unik, dan kami bangga dapat menyediakan solusi yang sepenuhnya disesuaikan.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-light">
          <img src={HomeIcon3} class="card-img-top" alt="HomeIcon"/>
            <div class="card-body">
              <h5 class="card-title">Komitmen Terhadap Kualitas</h5>
              <p class="card-text">Kami tidak hanya fokus pada hasil akhir, tetapi juga pada proses yang berkualitas tinggi dalam setiap tahap pengembangan.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-light">
          <img src={HomeIcon4} class="card-img-top" alt="HomeIcon"/>
            <div class="card-body">
              <h5 class="card-title">Layanan Pelanggan Unggulan</h5>
              <p class="card-text">Kami selalu siap mendengarkan dan memberikan dukungan kepada klien kami, memastikan bahwa setiap proyek berjalan lancar dan sesuai harapan.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeCard;
