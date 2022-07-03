import React, { useCallback, useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Configs from "../../configs/index";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const ModalLogout = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [state, dispatch] = useContext(Configs.UserContext);
  const navigate = useNavigate();

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

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

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
          transition={Assets.transitionFast}
        >
          <motion.div
            className={cssModule.Widget.modalRow}
            initial="out"
            animate="in"
            exit="out"
            variants={Assets.animationTop}
            transition={Assets.transitionMiddle}
          >
            <div>
              <h2>Logout</h2>
              <p>Apakah anda yakin ingin keluar?</p>
            </div>
            <div>
              <button onClick={logout}>yes</button>
              <button onClick={() => setShowModal(false)}>no</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default ModalLogout;
