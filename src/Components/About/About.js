import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Background from './../Pictures/Background.jpg'
import './../App.css'

const TentangKami = () => {
    return (        
        <div class="card text-bg-dark border-light mb-3">
            <img src={Background} class="card-img" alt="background"/>
            <div class="card-img-overlay">
                <h2 class="card-title">Tentang Kami</h2>
                <hr/>
                <p class="card-text">Selamat datang di Weinfos, penyedia jasa pembuatan website dan sistem informasi terdepan yang siap membantu Anda mengubah ide menjadi solusi digital yang inovatif dan efektif. Berdasarkan pengalaman dan keahlian kami di bidang teknologi informasi, kami hadir untuk memberikan layanan terbaik yang dapat mendukung perkembangan bisnis Anda di era digital.</p>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Visi Kami</Accordion.Header>
                    <Accordion.Body>
                    Di Weinfos, visi kami adalah menjadi mitra terpercaya bagi setiap individu dan perusahaan dalam perjalanan mereka menuju transformasi digital. Kami berkomitmen untuk menghadirkan solusi web dan sistem informasi yang tidak hanya memenuhi kebutuhan saat ini, tetapi juga mempersiapkan Anda untuk tantangan masa depan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Misi Kami</Accordion.Header>
                    <Accordion.Body>
                    Misi kami adalah memberikan layanan pembuatan website dan sistem informasi yang berkualitas tinggi, inovatif, dan berorientasi pada hasil. Kami bekerja erat dengan klien untuk memahami kebutuhan mereka secara mendalam, kemudian mengaplikasikan teknologi terbaru dan praktik terbaik dalam setiap proyek yang kami tangani.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <hr/>
                <h5 class="card-text">Mari Berkembang Bersama</h5>
                <p class="card-text">Weinfos adalah mitra ideal Anda dalam dunia digital yang terus berkembang. Kami siap membantu Anda mencapai kesuksesan melalui solusi website dan sistem informasi yang canggih dan dapat diandalkan. Hubungi kami hari ini dan mulailah perjalanan Anda menuju transformasi digital yang sukses bersama Weinfos.</p>
            </div>
        </div>
    )
}

export default TentangKami;