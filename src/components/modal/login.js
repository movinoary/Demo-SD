import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import * as Configs from "../../configs/index";
import * as Assets from "../../assets/index";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const ModalLogin = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const modalRef = useRef();
  const [state, dispatch] = useContext(Configs.UserContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

  const { password, email } = form;

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

      const response = await Configs.API.post("/login", body, config);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data.status === "admin") {
          navigate("/admin");
        } else {
          navigate("/customer");
        }

        const alert = <p>Login Succes</p>;
        setMessage(alert);
      }
    } catch (error) {
      const alert = <p>E-mail / Password Not Found</p>;
      setMessage(alert);
      console.log(error);
    }
  });

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
                {message && message}
                <form onSubmit={e => handleOnSubmit.mutate(e)}>
                  <label>e-mail</label>
                  <input
                    value={email}
                    onChange={handleOnChange}
                    type="email"
                    placeholder="school@mail.com"
                    name="email"
                  />
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="********"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                  />
                  <button>login</button>
                </form>
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
