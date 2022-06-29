import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const DatabaseBeritaBeranda = () => {
  return (
    <section className={cssModule.Dashboard.database}>
      <div className={cssModule.Dashboard.databaseTitle}>
        <h1>
          Berita <span>Beranda</span>
        </h1>
        <button>Tambah</button>
      </div>
      <div>
        <table className={cssModule.Dashboard.databaseTableBerita}>
          <thead>
            <tr>
              <th>No</th>
              <th>judul</th>
              <th>tanggal</th>
              <th>Image</th>
              <th>isi berita</th>
              <th>pembuat</th>
              <th>kategori</th>
              <th>Sumber</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Covid Semakin Meluas Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita veritatis impedit ratione perferendis
                architecto dolorum eveniet totam optio inventore at?
              </td>
              <td>12 April 2022</td>
              <td>
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                omnis fuga adipisci hic. Et fuga obcaecati ullam, exercitationem
                autem quaerat quidem at, optio dolores doloribus unde adipisci
                rem expedita ipsa dicta facilis hic? Voluptatem aperiam quaerat
                nihil nostrum doloremque corrupti atque vel hic! At earum modi
                neque quo maxime distinctio corrupti magnam, facere sunt
                expedita qui inventore sed facilis numquam ipsum perspiciatis
                quae quibusdam? Corporis voluptatem nostrum dicta magnam
                inventore ducimus quo sed porro neque, fuga minus laboriosam
                minima rerum debitis. Ad voluptas vitae reiciendis tenetur,
                voluptatibus voluptate ratione dignissimos nobis! Nisi, vero
                laboriosam? Aliquid est eligendi nihil quibusdam ab.
              </td>
              <td>Vino Arystio</td>
              <td>Sekolah</td>
              <td>www.goggle.com</td>
              <td>
                <button>
                  <GrIcons.GrFormView />
                </button>
                <button>
                  <FaIcons.FaEdit />
                </button>
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Covid Semakin Meluas Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita veritatis impedit ratione perferendis
                architecto dolorum eveniet totam optio inventore at?
              </td>
              <td>12 April 2022</td>
              <td>
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                omnis fuga adipisci hic. Et fuga obcaecati ullam, exercitationem
                autem quaerat quidem at, optio dolores doloribus unde adipisci
                rem expedita ipsa dicta facilis hic? Voluptatem aperiam quaerat
                nihil nostrum doloremque corrupti atque vel hic! At earum modi
                neque quo maxime distinctio corrupti magnam, facere sunt
                expedita qui inventore sed facilis numquam ipsum perspiciatis
                quae quibusdam? Corporis voluptatem nostrum dicta magnam
                inventore ducimus quo sed porro neque, fuga minus laboriosam
                minima rerum debitis. Ad voluptas vitae reiciendis tenetur,
                voluptatibus voluptate ratione dignissimos nobis! Nisi, vero
                laboriosam? Aliquid est eligendi nihil quibusdam ab.
              </td>
              <td>Vino Arystio</td>
              <td>Sekolah</td>
              <td>www.goggle.com</td>
              <td>
                <button>
                  <GrIcons.GrFormView />
                </button>
                <button>
                  <FaIcons.FaEdit />
                </button>
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Covid Semakin Meluas Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita veritatis impedit ratione perferendis
                architecto dolorum eveniet totam optio inventore at?
              </td>
              <td>12 April 2022</td>
              <td>
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                omnis fuga adipisci hic. Et fuga obcaecati ullam, exercitationem
                autem quaerat quidem at, optio dolores doloribus unde adipisci
                rem expedita ipsa dicta facilis hic? Voluptatem aperiam quaerat
                nihil nostrum doloremque corrupti atque vel hic! At earum modi
                neque quo maxime distinctio corrupti magnam, facere sunt
                expedita qui inventore sed facilis numquam ipsum perspiciatis
                quae quibusdam? Corporis voluptatem nostrum dicta magnam
                inventore ducimus quo sed porro neque, fuga minus laboriosam
                minima rerum debitis. Ad voluptas vitae reiciendis tenetur,
                voluptatibus voluptate ratione dignissimos nobis! Nisi, vero
                laboriosam? Aliquid est eligendi nihil quibusdam ab.
              </td>
              <td>Vino Arystio</td>
              <td>Sekolah</td>
              <td>www.goggle.com</td>
              <td>
                <button>
                  <GrIcons.GrFormView />
                </button>
                <button>
                  <FaIcons.FaEdit />
                </button>
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DatabaseBeritaBeranda;
