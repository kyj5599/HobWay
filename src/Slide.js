import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slide() {
  return (
    <>
      <div className="slide">
        <div className="slide1">
          <h3 className="title_slide">신규매장안내</h3>
          <div className="content">
            <Swiper
              // pagination={{
              //   type: "progressbar",
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    제주 특별자치도
                    <br />
                    <strong>제주공항</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    서울특별시
                    <br />
                    <strong>성대</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    서울특별시
                    <br />
                    <strong>숭실대</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    경기도
                    <br />
                    <strong>시흥능곡역</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    대구광역시
                    <br />
                    <strong>대구죽전</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    서울특별시
                    <br />
                    <strong>가락시장</strong>
                  </div>

                  <div className="isOpen">
                    <p>Coming Soon</p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    경기도
                    <br />
                    <strong>의정부용현</strong>
                  </div>

                  <div className="isOpen_open">
                    <p>OPEN 2022-08-12</p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="newStore">
                  <div className="city">
                    부산광역시
                    <br />
                    <strong>부산기장메가마트</strong>
                  </div>

                  <div className="isOpen_open">
                    <p>OPEN 2022-08-12</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="slide2">
          <h3 className="title_graph">가맹점 증감추이</h3>
          <div className="content">
            <Swiper
              // pagination={{
              //   type: "progressbar",
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://raw.githubusercontent.com/mynameisleesiwon/vanilaJs/main/%EA%B0%80%EB%A7%B9%EC%A0%90%20%EC%A6%9D%EA%B0%90%EC%B6%94%EC%9D%B4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://raw.githubusercontent.com/mynameisleesiwon/toDoList/master/%EA%B0%80%EB%A7%B9%EC%A0%90%20%EC%9B%94%ED%8F%89%EA%B7%A0%20%EB%A7%A4%EC%B6%9C.png" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="https://raw.githubusercontent.com/mynameisleesiwon/vanilaJs/main/%EA%B0%80%EB%A7%B9%EC%A0%90%20%EA%B3%84%EC%95%BD%ED%98%84%ED%99%A9.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
