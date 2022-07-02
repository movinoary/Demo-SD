import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const PembelajaranKkm = () => {
  const [datas, setDatas] = useState();

  const getData = e => {
    const selectId = e.target.value;
    const selectValue = Assets.DataPembelajaranKKm.filter(
      d => d.id == selectId
    )[0];
    setDatas(selectValue);
  };

  useEffect(() => {
    setDatas(Assets.DataPembelajaranKKm[0]);
  }, []);

  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>KKM</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Kelas</h2>
          <select value={datas?.id} onChange={e => getData(e)}>
            {Assets.DataPembelajaranKKm.map(item => (
              <option key={item.id} value={item.id}>
                {item.kelas}
              </option>
            ))}
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.kkmBottom}>
        {datas ? (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Mata Pelajaran</th>
                <th>KKM</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.kkm.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.mataPelajaran}</td>
                    <td>{item.kkm}</td>
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

export default PembelajaranKkm;
