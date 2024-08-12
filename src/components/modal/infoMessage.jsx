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
    updateLoading,
    showInfoMessage,
    dismissInfoMessage
} from '../../redux/actions/tunnel';

function InfoMessage(props) {



    // Toggle for Modal
    const toggle = () => props.dismissInfoMessage()//setModal(!modal);


    // return (
    //     <Modal
    //         isOpen={props.errorMessage != null}
    //         toggle={toggle}
    //         modalTransition={{ timeout: 2000 }}
    //         className="error-moda alert alert-danger fade show"
    //     >
    //         <ModalBody className="error-moda alert alert-danger fade show" >
    //             {/* Simple Modal with just ModalBody... */}
    //             {props.errorMessage} <i class="ri-close-circle-line"></i>
    //         </ModalBody>

    //     </Modal>
    // )

    return (
        <Alert
            isOpen={props.infoMessage != null}// default: true
            toggle={toggle}
            transition={{ timeout: 2000 }}
            color="info"
            className={props.infoMessage != null ? "info-modal" : "info-modal clear"}
        // style={{ zIndex: "9000", width: "20%", marginLeft: "40%", position: "sticky", display: "flex", justifyContent: "center", top: "10px" }}
        >
            {props.infoMessage}
        </Alert>
    )
}

function mapStateToProps(state) {
    return {
        isLoading: state.tunnel.isLoading,
        errorMessage: state.tunnel.errorMessage,
        successMessage: state.tunnel.successMessage,
        infoMessage: state.tunnel.infoMessage,
        loadingPercentage: state.tunnel.loadingPercentage,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        dismissErrorMessage: () => dispatch(dismissErrorMessage()),
        dismissSuccessMessage: () => dispatch(dismissSuccessMessage()),
        dismissInfoMessage: () => dispatch(dismissInfoMessage()),
        showErrorMessage: message => dispatch(showErrorMessage(message)),
        showSuccessMessage: message => dispatch(showSuccessMessage(message)),
        showInfoMessage: message => dispatch(showInfoMessage(message)),
        updateLoading: (isLoading, percentage = null) => dispatch(updateLoading({ isLoading, percentage }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMessage)