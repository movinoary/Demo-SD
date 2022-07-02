import React, { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Assets from "../../assets/index";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const ModalLogin = ({ showModal, setShowModal }) => {
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
          className={cssModule.Components.modalLogin}
          onClick={closeModal}
          ref={modalRef}
          initial="out"
          animate="in"
          exit="out"
          variants={Assets.animationScale}
          transition={Assets.transitionFast}
        >
          <motion.div
            className={cssModule.Components.modalRow}
            initial="out"
            animate="in"
            exit="out"
            variants={Assets.animationTop}
            transition={Assets.transitionMiddle}
          >
            <div className={cssModule.Components.background}>
              <div>
                <AiIcons.AiOutlineClose
                  className={cssModule.Components.close}
                  onClick={() => navigate("/admin-dashboard")}
                />
                <h1>Login</h1>
                <form>
                  <label>e-mail</label>
                  <input type="email" placeholder="school@mail.com" />
                  <label>password</label>
                  <input type="password" placeholder="********" />
                  <button>login</button>
                </form>
                <button onClick={() => navigate("user-dashboard")}>user</button>
                <button onClick={() => navigate("admin-dashboard")}>
                  admin
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default ModalLogin;

//() => setShowModal(prev => !prev)
