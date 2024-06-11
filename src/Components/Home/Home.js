import React from "react";
import CarouselFade from "./Carousels";
import HomeCard from "./HomeCard"
import "./../App.css"

const Home = () => {
    return (
        <div>
            <CarouselFade/>
            <h3 class="tengah">Mengapa Kami</h3>
            <HomeCard/>
        </div>
    )
}

export default Home;
