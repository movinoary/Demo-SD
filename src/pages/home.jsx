import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import * as Data from "../assets/index";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const Home = () => {
  const navigate = useNavigate();
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
            onclick={() => navigate(`/profile`)}
            title="profile"
            subtitle="sekolah"
          />
          <Components.CardLink
            onclick={() => navigate(`/profile/guru`)}
            icon={<FaIcons.FaChalkboardTeacher />}
            title="profile"
            subtitle="Guru"
          />
          <Components.CardLink
            onclick={() => navigate(`/profile/anggaran`)}
            icon={<RiIcons.RiLineChartFill />}
            title="Anggaran"
          />
        </div>
        <Components.Title title="fasilitas" subTitle="sekolah" />
        <div className={cssModule.Page.rowFacility}>
          {Data.DataGeleriFasilitas.map(item => (
            <Components.CardFacility
              key={item.id}
              image={item.image}
              title={item.title1}
              subTitle={item.title2}
              endTitle={item.title3}
            />
          ))}
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
          {Data.DataGeleriKegiatan.map(item => (
            <SwiperSlide key={item.id}>
              <Components.CardActivity image={item.image} title={item.nama} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Components.Title title="berita" subTitle="&" endTitle="pengumuman" />
        <div className={cssModule.Page.rowNews}>
          {Data.DataBeritaBeranda.map(item => (
            <Components.CardNews
              onclick={() => navigate(`/berita/${item.judul}`)}
              key={item.id}
              image={item.image}
              date={item.angka}
              month={item.bulan}
              title={item.judul}
              category={item.kategori}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
