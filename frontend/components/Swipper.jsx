import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image_swipper: {
    height: "280px",
  },
  image: {
    objectFit: "contain",
    height: "320px",
  },
}));

export default function Swipper() {
  const classes = useStyles();
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              className={classes.image}
              src="/images/jumia_images/holiday11.jpg"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className={classes.image}
              src="/images/jumia_images/holiday12.jpg"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className={classes.image}
              src="/images/jumia_images/holiday13.jpg"
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
