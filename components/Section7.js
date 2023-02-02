import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";
// register Swiper custom elements

const Section7 = () => {

  return (
    <div className="bg-[url('/asset/Group10.png')] bg-cover bg-no-repeat min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="lg:w-1/2">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="phone ios">
                    <div class="phone-top">
                      <div class="camera"></div>
                    </div>
                    <div class="screen">
                      {/* <div class="screen-top">
                        <div class="time">8:01</div>
                        <div class="phone-status"></div>
                      </div>
                      <div class="screen-menu">
                        <div class="icon-wrap">
                          <div class="icon"></div>
                        </div>
                        <div class="icon-wrap">
                          <div class="icon"></div>
                        </div>
                        <div class="icon-wrap">
                          <div class="icon"></div>
                        </div>
                        <div class="icon-wrap">
                          <div class="icon"></div>
                        </div>
                      </div>
                      <div class="return-btn">&nbsp;</div> */}
                      <Swiper
                   
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        
                        
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false
                      }}
                       
                      >
                        <SwiperSlide>
                          <img
                            src="https://assets.codepen.io/772926/phone-bg.png"
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://assets.codepen.io/772926/android-phone-bg.png"
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start items-center">
            <img src="/asset/quiky-preview.png" className="w-1/2" alt="" />
            <p className="text-white text-xl pb-8">
              India’s first hyper active social media app.{" "}
            </p>
            <form action="/mail.php" method="POST">
              <div class="indivForm">
                <input type="email" class="" name="email" />
                <button type="submit" className="text-white">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
