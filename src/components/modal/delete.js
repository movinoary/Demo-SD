import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const ModalDelete = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <motion.div
          className={cssModule.CRUD.modalDelete}
          onClick={closeModal}
          ref={modalRef}
          initial="out"
          animate="in"
          exit="out"
          variants={Assets.animationScale}
          transition={Assets.transitionFast}
        >
          <motion.div
            className={cssModule.CRUD.modalRow}
            initial="out"
            animate="in"
            exit="out"
            variants={Assets.animationTop}
            transition={Assets.transitionMiddle}
          >
            <div>
              <h2>Delete</h2>
              <p>Apakah anda yakin ingin Menghapus Data?</p>
            </div>
            <div>
              <button>yes</button>
              <button onClick={() => setShowModal(false)}>no</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default ModalDelete;
