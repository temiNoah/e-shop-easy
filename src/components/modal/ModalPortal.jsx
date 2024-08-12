import ReactDOM from "react-dom";
import Backdrop from "./backdrop";

const ModalPortal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop show={props.show} onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default ModalPortal;