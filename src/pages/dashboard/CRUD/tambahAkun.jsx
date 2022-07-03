import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import * as Configs from "../../../configs/index";
import * as IoIcons from "react-icons/io";
import * as Assets from "../../../assets/index";
import * as cssModule from "../../../styles/index";

const TambahAkun = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    role: "",
  });

  const { nama, email, password, role } = form;

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await Configs.API.post("/register", body, config);
      console.log(response.data.data);
      const alert = <p>Register Succes</p>;
      setMessage(alert);
      navigate("/admin-dashboard");
    } catch (error) {
      const alert = <p>Failed</p>;
      setMessage(alert);
      console.log(error);
    }
  });

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
      {message && message}
      <form onSubmit={e => handleOnSubmit.mutate(e)}>
        <div>
          <label>Nama</label>
          <input
            type="text"
            placeholder="vino arystio"
            id="nama"
            name="nama"
            value={nama}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="vino@mail.com"
            id="email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            name="password"
            id="password"
            pattern="[A-Za-z0-9]{8,}"
            title="Minimal 8 Character"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Role Akun</label>
          <select id="role" value={role} name="role" onChange={handleOnChange}>
            <option hidden></option>
            <option value="admin">Admin</option>
            <option value="suguru">SuGuru</option>
            <option value="guru">Guru</option>
            <option value="reporter">Reporter</option>
          </select>
        </div>
        <section>
          <button>Simpan</button>
        </section>
      </form>
    </motion.div>
  );
};

export default TambahAkun;
