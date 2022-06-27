import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const Home = () => {
  return (
    <>
      <Components.Header
        className={cssModule.Components.header}
        title="sd jatirahayu iv"
        subtitle="Ayo ke Sekolah Biar ga Bego"
      />
      {/* <Components.CardCountDown /> */}
      <section className={cssModule.Page.home}>
        <Components.Title title="sambutan kepala" subTitle="sekolah" />
        <div className={cssModule.Page.principal}>
          <div className={cssModule.Page.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              aut illum optio, reiciendis quasi natus ipsum tenetur corrupti,
              consequuntur similique excepturi fuga aperiam provident. Atque
              blanditiis reiciendis aut, harum at qui, odit eligendi et sunt
              possimus accusamus, deserunt culpa ipsam nostrum non ullam
              expedita repellat rerum provident aperiam nihil! Repellat
              voluptates consequuntur, sed pariatur ratione amet reprehenderit
              sapiente maiores cumque architecto illo adipisci optio doloribus
              neque, id aliquid provident non quae eaque eveniet similique
              magni, praesentium autem accusamus. Ipsum perspiciatis nesciunt
              laboriosam possimus blanditiis consectetur suscipit asperiores
              vitae. Et impedit velit voluptatum voluptatibus? Consectetur
              maxime eum ab exercitationem quam sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus blanditiis recusandae distinctio quam quia minima
              mollitia nihil laboriosam fuga assumenda magni voluptates libero
              rerum eius nostrum sit amet temporibus, autem quis reprehenderit,
              laudantium cumque illum consequuntur. Laudantium dignissimos,
              explicabo beatae, veritatis incidunt mollitia officiis dolorem
              porro voluptate tempora ipsum sed.
            </p>
          </div>
          <div className={cssModule.Page.image}>
            <div>
              <img
                src="https://i.pinimg.com/564x/09/6d/89/096d89bcd7692ecc8d91fbfaa33493e9.jpg"
                alt="profile"
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/7d/30/0d/7d300ddf274bb644dbbfc7e383de136a.jpg"
                alt="profile"
              />
            </div>
          </div>
        </div>
        <div className={cssModule.Page.grid}>
          <Components.CardLink
            icon={<FaIcons.FaSchool />}
            title="profile"
            subtitle="sekolah"
          />
          <Components.CardLink
            icon={<FaIcons.FaChalkboardTeacher />}
            title="profile"
            subtitle="Guru"
          />
          <Components.CardLink
            icon={<RiIcons.RiLineChartFill />}
            title="Anggaran"
          />
        </div>
        <Components.Title title="fasilitas" subTitle="sekolah" />
        <div className={cssModule.Page.rowFacility}>
          <Components.CardFacility
            image="https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Lab"
            subTitle="Komputer"
            endTitle="Terakomdasi"
          />
          <Components.CardFacility
            image="https://i.pinimg.com/564x/a6/5d/47/a65d47cff09782e776e9a89dc97bf332.jpg"
            title="Lab"
            subTitle="Komputer"
            endTitle="Terakomdasi"
          />
          <Components.CardFacility
            image="https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Lab"
            subTitle="Komputer"
            endTitle="Terakomdasi"
          />
          <Components.CardFacility
            image="https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Lab"
            subTitle="Komputer"
            endTitle="Terakomdasi"
          />
        </div>
        <Components.Title title="kegiatan" subTitle="sekolah" />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className={cssModule.Page.swiper}
        >
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
          <SwiperSlide>
            <Components.CardActivity />
          </SwiperSlide>
        </Swiper>
        <Components.Title title="berita" subTitle="&" endTitle="pengumuman" />
        <div className={cssModule.Page.rowNews}>
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />

          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
