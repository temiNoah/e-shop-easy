import { useState } from "react";
import "../../styles/Modal.css";
import Auth from '../../pages/Auth'
import CustomerSignin from "../../pages/signin/signin";
import DealerSignup from "../../pages/dealers/signup/signup"
import ArtisanSignup from "../../pages/artisans/signup/signup"
//import TabSystem from "../tabs/TabSystem"
import TabSystem from "../tabs/TabComponent"
import TabContent from "../tabs/TabContent"
import SignupV2 from "../../pages/customers/signup/signupv2";

const Modal = (props) => {
  const [status, setStatus] = useState(true);
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }


  const tabs = [
    {
      title: "Customer",
      id: "customer",
      // icon: <Plane />,
      color: "#000", /*"#5d5dff"*/
      component: TabContent,
      content: [<SignupV2 changeAuthMode={changeAuthMode} />]
    },
    {
      title: "Dealer",
      id: "dealer",
      // icon: <House />,
      color: "#000", /* "#67bb67" */
      component: TabContent,
      content: [<DealerSignup changeAuthMode={changeAuthMode} />]
    },
    {
      title: "Artisan",
      id: "artisan",
      // icon: <Calendar />,
      color: "#000",  /* "#63a7c7"*/
      component: TabContent,
      content: [<ArtisanSignup changeAuthMode={changeAuthMode} />]
    },
    // {
    //   title: "Offers",
    //   id: "offers",
    //   // icon: <Bag />,
    //   color: "#f56868",
    //   content: <TabContent />
    // }
  ];

  // const tabs = [
  //   {
  //     label: "Customer",
  //     content: <DealerSignup changeAuthMode={changeAuthMode} />
  //   },
  //   {
  //     label: "Artisan",
  //     content: <DealerSignup changeAuthMode={changeAuthMode} style={{ marginLeft: "-100%" }} />,
  //   },
  //   {
  //     label: "Dealer",
  //     content: <DealerSignup changeAuthMode={changeAuthMode} style={{ marginLeft: "-100%" }} />,
  //   },
  // ];
  // const tabs = [
  //   {
  //     label: "Customer",
  //     content: "1"
  //   },
  //   {
  //     label: "Artisan",
  //     content: "2",
  //   },
  //   {
  //     label: "Dealer",
  //     content: "3",
  //   },
  // ];

  return (
    <div className="modalLogin">
      {/* <h2>This is modal</h2>
      <button
        className="button"
        onClick={() => setStatus((prevState) => !prevState)}
      >
        Toggle Status
      </button>
     
      <button className="button" onClick={props.onClick}>
        Close Modal
      </button>

      <h4>{`current status: ${status}`}</h4> */}

      {/* <Auth onClick={props.onClick} /> */}

      {
        authMode === "signin" ?
          <CustomerSignin onClick={props.onClick} changeAuthMode={changeAuthMode} />
          :
          <TabSystem tabs={tabs} onClick={props.onClick} />

      }

      {/* <button type="button" class="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close"> */}

      {/* </button> */}
    </div>
  );
};

export default Modal;