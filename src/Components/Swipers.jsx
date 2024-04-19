import React from "react";
import "./Swipers.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { PiSelectionBackgroundBold } from "react-icons/pi";

function Swipers() {
  return (
    <Swiper
    className="swipeContainer"
    modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
    spaceBetween={50}
    slidesPerView={5}
    loop="true"
    navigation={{clickable: true }}
    pagination={{ clickable: true, }}
    keyboard={{
          enabled: true,
        }}
    
    style={{
        '--swiper-navigation-color': '#62079F',
          '--swiper-pagination-color': '#62079F',
          "--swiper-pagination-bottom": "8px",

        }}
      
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="portada"> <div className="contenedor"><h4>One Life</h4> <p>Esta es una biografia de un señor que salva nenes de nasis</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/One_Life.jpg")}></img></SwiperSlide>


    <SwiperSlide className="portada"> <div className="contenedor"><h4>Batman vs Superman</h4> <p>Pelicula de accion  y superheroes</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Batman_vs_Superman.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>Toy Story</h4> <p>Esta es una pelicula animada de Disney Pixar muy famosa, sobre la vida de los juguetes</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Toy_Story1.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>Dune Chapter:2</h4> <p>Esta es una pelicula de acción y ciencia ficción, futurista, muy relevante en el 2024</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Dune_2.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>Star Wars - Episode I</h4> <p>Primera pelicula de la Saga, da comienzo a un futuro lejano donde humanos y otras especies deben convivir entre galaxias</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Star_wars1.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>Godzilla x Kong - The new empire</h4> <p>Ultima pelicula donde estos dos gigantes unen para derrotar a un enemigo muy poderoso</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Godzilla_x_Kong.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>One Life</h4> <p>Esta es una biografia de un señor que salva nenes de nasis</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/One_Life.jpg")}></img></SwiperSlide>
    -
  </Swiper>

  );
}

export default Swipers;
