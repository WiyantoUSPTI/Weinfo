import React from "react";
import './../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ServiceImage1 from './../Pictures/Srv1.png';
import ServiceImage2 from './../Pictures/Srv2.png';
import ServiceImage3 from './../Pictures/Srv3.png';

const ServicesCard = () => {
    return (
        <div class="flex-container">
            <Card>
                <Card.Img variant="top" src={ServiceImage1} />
                <Card.Body>
                    <Card.Title>Pembuatan Website</Card.Title>
                    <Card.Text>
                    Website yang responsif, kustom sesuai kebutuhan bisnis, dan dioptimalkan untuk SEO serta kinerja tinggi.
                    </Card.Text>
                    <Button variant="primary" href="/Services/AllServices">Buat</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={ServiceImage2} />
                <Card.Body>
                    <Card.Title>Pengembangan Sistem Informasi</Card.Title>
                    <Card.Text>
                    Sistem informasi yang didasarkan pada analisis kebutuhan, dirancang untuk efisiensi operasional, dan mencakup integrasi serta migrasi data yang aman dan efisien.
                    </Card.Text>
                    <Button variant="primary" href="/Services/AllServices">Buat</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={ServiceImage3} />
                <Card.Body>
                    <Card.Title>Konsultasi dan Dukungan Teknologi</Card.Title>
                    <Card.Text>
                    Hubungi kami untuk konsultasi IT strategis dan dukungan teknis handal yang memastikan sistem dan website Anda berjalan lancar.
                    </Card.Text>
                    <Button variant="primary" href="/Services/AllServices">Hubungi</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ServicesCard;
