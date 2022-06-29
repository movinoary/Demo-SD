import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const DatabaseGaleriFasilitas = () => {
  return (
    <section className={cssModule.Dashboard.database}>
      <div className={cssModule.Dashboard.databaseTitle}>
        <h1>
          Galeri <span>Fasilitas</span>
        </h1>
        <button>Tambah</button>
      </div>
      <div>
        <table className={cssModule.Dashboard.databaseTableGaleri}>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>judul</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>12 April 2022</td>
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
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>12 April 2022</td>
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
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                  alt="berita"
                />
              </td>
              <td>12 April 2022</td>
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

export default DatabaseGaleriFasilitas;
