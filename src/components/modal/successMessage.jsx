import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody, Alert
} from "reactstrap"
import { connect } from 'react-redux'
import React from 'react'
import {
    showErrorMessage,
    showSuccessMessage,
    dismissErrorMessage,
    dismissSuccessMessage,
    updateLoading
} from '../../redux/actions/tunnel';

function successMessage(props) {



    // Toggle for Modal
    const toggle = () => props.dismissSuccessMessage()//setModal(!modal);


    // return (
    //     <Modal
    //         isOpen={props.successMessage != null}
    //         toggle={toggle}
    //         modalTransition={{ timeout: 2000 }}
    //         className="success-moda alert alert-primary fade show"
    //     >
    //         <ModalBody className="success-moda" style={{ display: "flex", justifyContent: "center", border: "0px solid #00ff00 !important" }}>
    //             {/* Simple Modal with just ModalBody... */}
    //             {props.successMessage} <i class="ri-checkbox-circle-line" style={{ color: "#1ab394" }}></i>
    //         </ModalBody>

    //     </Modal>
    // )
    return (
        <Alert
            isOpen={props.successMessage != null}// default: true
            toggle={toggle}
            transition={{ timeout: 2000 }}
            color="success"
            className={props.successMessage != null ? "success-modal" : "success-modal clear"}
        // style={{ zIndex: "9000", width: "20%", marginLeft: "40%", position: "sticky", display: "flex", justifyContent: "center", top: "10px" }}
        >
            {props.successMessage}
        </Alert>
    )
}

function mapStateToProps(state) {
    return {
        isLoading: state.tunnel.isLoading,
        errorMessage: state.tunnel.errorMessage,
        successMessage: state.tunnel.successMessage,
        loadingPercentage: state.tunnel.loadingPercentage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dismissErrorMessage: () => dispatch(dismissErrorMessage()),
        dismissSuccessMessage: () => dispatch(dismissSuccessMessage()),
        showErrorMessage: message => dispatch(showErrorMessage(message)),
        showSuccessMessage: message => dispatch(showSuccessMessage(message)),
        updateLoading: (isLoading, percentage = null) => dispatch(updateLoading({ isLoading, percentage }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(successMessage)