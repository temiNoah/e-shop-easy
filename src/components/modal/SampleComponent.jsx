import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import { CSSTransition } from "react-transition-group";
import "../../styles/Modal.css";
import AuthUserContext from "../../context/AuthUserContext";
import { useContext } from "react";
const SampleComponent = (props) => {
  //  const [showModal, setShowModal] = useState(false);
  //const [authUser, setAuthUser, setShowModal, showModal, user, setUser] = useContext(AuthUserContext);
  const [authUser, , setShowModal, showModal, ...rest] = useContext(AuthUserContext);
  const nav = useNavigate();

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="contain">
      {/* <h1>Modal with Backdrop sample</h1> */}
      {/* <button className="button" onClick={() => setShowModal(true)}>
        Show Modal
      </button> */}
      {
        authUser === null ?
          <div onClick={
            () => {
              setShowModal(true);
              if (typeof props.toggleMenu == 'function')
                props.toggleMenu()
            }}
            className="d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
            <i className="ri-login-circle-line" style={{ color: '#87CEEB' }}></i> Login
          </div>

          :
          <div onClick={
            () => {
              window.location.href = "/logout"
            }}
            className="d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
            <i class="ri-logout-circle-line" style={{ color: 'rgba(255,0,0,0.4)' }}></i> Logout
          </div>
      }

      <ModalPortal show={showModal} onClick={onClickHandler}>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showModal}
          timeout={{ enter: 700, exit: 700 }}
          classNames="modal"
        >
          <Modal onClick={onClickHandler} />
        </CSSTransition>
      </ModalPortal>
      {/* <p onClick={Here} className="d-flex align-items-center gap-1 btn-grad">Password reset?</p> */}
    </div>
  );
};
export default SampleComponent