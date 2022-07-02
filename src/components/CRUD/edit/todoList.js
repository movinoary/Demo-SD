import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditTodoList = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editTodo}>
            <h1>
              Edit <span>Acara </span> Event
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeholder="judul" />
              </div>
              <div>
                <label>Tanggal</label>
                <input type="date" />
              </div>
              <section>
                <button>Simpan</button>
                <button onClick={() => setShowModal(false)}>Batal</button>
              </section>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditTodoList;
