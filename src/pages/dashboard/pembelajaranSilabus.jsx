import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const PembelajaranSilabus = () => {
  const [datas, setDatas] = useState();

  const getData = e => {
    const selectId = e.target.value;
    const selectValue = Assets.DataPembalajaranSilabus.filter(
      d => d.id === selectId
    )[0];
    setDatas(selectValue);
  };

  useEffect(() => {
    setDatas(Assets.DataPembalajaranSilabus[0]);
  }, []);

  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Silabus</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Mata Pelajaran</h2>
          <select value={datas?.id} onChange={e => getData(e)}>
            {Assets.DataPembalajaranSilabus.map(item => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.silabusBottom}>
        {datas ? (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Semester</th>
                <th>KD</th>
                <th>Indikator</th>
                <th>Materi</th>
                <th>Kegiatan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.silabus.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.semester}</td>
                    <td>{item.kompetensiDasar}</td>
                    <td>{item.indikator}</td>
                    <td>{item.materi}</td>
                    <td>{item.kegiatan}</td>
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

export default PembelajaranSilabus;
