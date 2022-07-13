import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as cssModule from "../../styles/index";

const WidgetKelas = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={cssModule.Widget.kelas}>
        <form>
          <h2>Daftar Kelas</h2>
          {click ? (
            <>
              <div>
                <select id="kelas">
                  <option hidden>Tahun</option>
                  <option>2021/2022</option>
                  <option>2022/2023</option>
                </select>
                <label htmlFor="kelas">Tahun</label>
              </div>
              <div>
                <input type="text" id="kelas" placeholder="kelas" />
                <label htmlFor="kelas">Kelas</label>
              </div>
              <button>
                <p>
                  <AiIcons.AiOutlinePlusSquare />
                </p>
              </button>
              <button onClick={handleClick}>
                <p>
                  <AiIcons.AiOutlineClose />
                </p>
              </button>
            </>
          ) : (
            <button onClick={handleClick}>
              <p>
                <AiIcons.AiOutlinePlus />
              </p>
            </button>
          )}
        </form>
        <span>
          <FcIcons.FcDeleteDatabase />
        </span>
      </div>
    </>
  );
};

export { WidgetKelas };

{
  /* 
<div>
<table>
  <thead>
    <tr>
      <th>No</th>
      <th>Tahun Ajaran</th>
      <th>Kelas</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>
        <div>
          <FcIcons.FcDeleteDatabase />
        </div>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div> */
}
