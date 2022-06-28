import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const ModalLogout = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
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
          className={cssModule.Widget.modalLogout}
          onClick={closeModal}
          ref={modalRef}
          initial="out"
          animate="in"
          exit="out"
          variants={Assets.animationScale}
          transition={Assets.transition}
        >
          <motion.div
            className={cssModule.Widget.modalRow}
            initial="out"
            animate="in"
            exit="out"
            variants={Assets.animationTop}
            transition={Assets.transition}
          >
            <div>
              <h2>Logout</h2>
              <p>Apakah anda yakin ingin keluar?</p>
            </div>
            <div>
              <button onClick={() => navigate("/")}>yes</button>
              <button onClick={() => setShowModal(false)}>no</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default ModalLogout;
