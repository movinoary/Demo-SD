import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as IoIcons from "react-icons/io";
import * as Assets from "../../../assets/index";
import * as cssModule from "../../../styles/index";

const AddAkun = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={cssModule.CRUD.addData}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationRight}
      transition={Assets.transitionFast}
    >
      <div className={cssModule.CRUD.addBack}>
        <button onClick={() => navigate("/admin-dashboard")}>
          <IoIcons.IoIosArrowBack />
        </button>
      </div>
      <h1>
        Tambah <span>Akun</span>
      </h1>
      <form>
        <div>
          <label>Nama</label>
          <input type="text" placeholder="vino arystio" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder="vino@mail.com" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <div>
          <label>Role Akun</label>
          <select>
            <option hidden></option>
            <option>Admin</option>
            <option>SuGuru</option>
            <option>Guru</option>
            <option>Reporter</option>
          </select>
        </div>
        <section>
          <button>Simpan</button>
        </section>
      </form>
    </motion.div>
  );
};

export default AddAkun;
