import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Awards() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper d-flex  justify-content-center align-items-center"
      >
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award.jpg" alt="Image 1" className="S-Img" />
          <h2 className="S-head">Decanter World Wine Awards 2020</h2>
          <p className="S-Para">
            Dindori Reserve Viogner <br />
            Silver
          </p>
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper d-flex  justify-content-center align-items-center"
      >
        <SwiperSlide>
          <h2 className="S-head">2020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="S-head">2020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="S-head">2020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="S-head">2020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="S-head">2020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="S-head">D020</h2>
          <p className="S-Para">
            Institute, India Proud silver member of the
            <br /> International Wineries for Climate
            <br /> Action
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Awards;
