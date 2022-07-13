import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const PembelajaranPromes = () => {
  const [datas, setDatas] = useState();

  const getData = e => {
    const selectId = e.target.value;
    const selectValue = Assets.DataPembalajaranPromes.filter(
      d => d.id === selectId
    )[0];
    setDatas(selectValue);
  };

  useEffect(() => {
    setDatas(Assets.DataPembalajaranPromes[0]);
  }, []);

  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Promes</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Guru</h2>
          <select value={datas?.id} onChange={e => getData(e)}>
            {Assets.DataPembalajaranPromes.map(item => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.promesBottom}>
        {datas ? (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Tema</th>
                <th>SubTema</th>
                <th>Akolasi Waktu</th>
                <th>Pembelajaran Ke-1</th>
                <th>Pembelajaran Ke-2</th>
                <th>Pembelajaran Ke-3</th>
                <th>Pembelajaran Ke-4</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.promes.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tema}</td>
                    <td>
                      <p>{item.subTema}</p>
                      <p>{item.subNama}</p>
                    </td>
                    <td>{item.alokasiWaktu}</td>
                    <td>{item.pembelajaranPertama}</td>
                    <td>{item.pembelajaranKedua}</td>
                    <td>{item.pembelajaranKetiga}</td>
                    <td>{item.pembelajaranKeempat}</td>
                    <td>
                      <button>
                        <GrIcons.GrFormView />
                      </button>
                      <button>
                        <GrIcons.GrEdit />
                      </button>
                      <button>
                        <AiIcons.AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </section>
  );
};

export default PembelajaranPromes;
