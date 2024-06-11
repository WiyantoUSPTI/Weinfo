import CardBg from './../Pictures/darkredbg.jpg';
import Icon from './../Pictures/Chibi.png';
import './../App.css';

function AllServices() {
  return (
    <div class="card text-bg-dark">
      <img src={CardBg} class="card-img" alt="CardImage"/>
      <div class="card-img-overlay">
        <div class="card text-center">
          <div class="card-header">
            Kesalahan
          </div>
          <div class="card-body">
            <h5 class="card-title">Layanan Belum Tersedia</h5>
            <img src={Icon} alt="Icon" width="35%"/>
            <p class="card-text">Maaf, layanan ini belum tersedia. Silakan coba lagi nanti.</p>
            <a href="/Services" class="btn btn-primary">Kembali Ke Layanan Kami</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;