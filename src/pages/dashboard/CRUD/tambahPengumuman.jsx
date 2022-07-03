import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as IoIcons from "react-icons/io";
import * as Assets from "../../../assets/index";
import * as Configs from "../../../configs/index";
import * as cssModule from "../../../styles/index";

const TambahPengumuman = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    judul: "",
    isiPengumuman: "",
  });
  const { judul, isiPengumuman } = form;

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

      const response = await Configs.API.post("/add-pengumuman", body, config);
      console.log(response.data.data);
      const alert = <p>Berhasil menambahkan Data</p>;
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
        <button onClick={() => navigate(`/admin-dashboard`)}>
          <IoIcons.IoIosArrowBack />
        </button>
      </div>
      <h1>
        Tambah <span>Penggumuman</span>
      </h1>
      {message && message}
      <form onSubmit={e => handleOnSubmit.mutate(e)}>
        <div>
          <label>Judul</label>
          <input
            type="text"
            placeholder="judul"
            id="judul"
            name="judul"
            value={judul}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Pengumuman</label>
          <textarea
            placeholder="Isi Pengumuman"
            rows="3"
            id="isiPengumuman"
            name="isiPengumuman"
            value={isiPengumuman}
            onChange={handleOnChange}
          />
        </div>
        <section>
          <button>Simpan</button>
        </section>
      </form>
    </motion.div>
  );
};

export default TambahPengumuman;
