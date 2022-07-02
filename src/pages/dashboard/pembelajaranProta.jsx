import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const PembelajaranProta = () => {
  const [datas, setDatas] = useState();

  const getData = e => {
    const selectId = e.target.value;
    const selectValue = Assets.DataPembelajaranProta.filter(
      d => d.id == selectId
    )[0];
    setDatas(selectValue);
  };

  useEffect(() => {
    setDatas(Assets.DataPembelajaranProta[0]);
  }, []);

  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Prota</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Guru</h2>
          <select value={datas?.id} onChange={e => getData(e)}>
            {Assets.DataPembelajaranProta.map(item => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.protaBottom}>
        {datas ? (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Tema</th>
                <th></th>
                <th>SubTema</th>
                <th>Akolasi Waktu</th>
                <th>Tanggal Pengerjaan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.prota.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tema}</td>
                    <td>
                      <p>{item.subTema}</p>
                    </td>
                    <td>{item.SubNama}</td>
                    <td>{item.alokasiWaktu}</td>
                    <td>{item.tanggal}</td>
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

export default PembelajaranProta;
