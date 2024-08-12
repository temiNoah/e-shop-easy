import "./style.scss";
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useContext } from "react";
import { Input, Modal, ModalBody, ModalHeader, Spinner, Col, Row, Form, Button, Label, FormGroup, InputGroup, Card, CardBody, CardHeader } from 'reactstrap'
import { userInputs, carFormDetails, productInputs } from "../../../data/formSource";
//import AuthService from "../../../../api/resources/auth.service";
import { APIContext } from "../../../context/APIContext";
import { connect } from 'react-redux'
import {
    showErrorMessage,
    showSuccessMessage,
    dismissErrorMessage,
    dismissSuccessMessage,
    showInfoMessage,
    dismissInfoMessage,
    updateLoading,

} from '../../../redux/actions/tunnel';
import UploadForm from "../../../components/uploadForm/UploadForm";

const EditCar = (props) => {
    const inputs = carFormDetails //userInputs;
    const title = "Add Car"
    const dealerId = "64330255891d63d1982bfbf6";

    const [file, setFile] = useState("");
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState({});
    const [spinning, setSpinning] = useState(false)
    const [uploadStatus, setUploadStatus] = useState("");
    const [uploadImageUrl, setUploadImageUrl] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [uploadImgError, setUploadImgError] = useState("")
    const state = useContext(APIContext);
    const { updateCar } = state.CarAPI
    const { getById } = state.DealerAPI

    const initState = {
        vin: "",
        manufacturer: "",
        model: "",
        year: "",
        mileage: "",
        condition: "",
        fuelType: "",
        costPrice: 0,
        sellingPrice: 0,
        speed: "",
        numberAvailable: "",
        transmissionType: "",
        exteriorColor: "",
        interiorColor: "",
        driveType: "",
        vehicleHistory: "",
        numberOfOwners: "",
        financingOption: "",
        warrantyInfo: "",
        serviceRecords: "",
        extraFeatures: "",
        purpose: "",
        // images: []
    }

    const [dealerDetails, setDealerDetails] = useState({})

    // props.data != undefined && console.log("da:" + props.data.vin)
    //console.log(JSON.stringify(props.data))

    const [formData, setFormData] = useState({
        ...initState
    });

    useEffect(() => {
        const obj = {}
        if (props.data != undefined) {
            Object.keys(formData).map(
                key => obj[key] = props.data[key] == undefined ? "" : props.data[key]
            )
            setFormData({ ...obj })

            setUploadImageUrl([...props.data.images]);//(prev => prev.concat(props.data.images)) //(prev => [...prev, ...props.data.images])


            //console.log("Temmmmmy:", props.data)

            getById(props.data.dealerID).then(
                ({ data, status }) => {
                    setDealerDetails(data.data)
                },
                (error) => {
                    console.error("Error:", error.message);
                }
            )
        }


    }, [props.data])

    //console.log(props.data._id)//(JSON.stringify(formData))


    const toggle = (imgUrl) => {
        setModal((prev) => !prev)
        setSelectedImg(imgUrl)
    };

    /*** add Car to the API */
    const handleChange = (event) => {
        const { target } = event;
        let value = target.value;
        const { name } = target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });

        delete formError[name];
    };

    const validate = values => {
        // console.log(JSON.stringify(values))
        let errExist = false

        for (const [key, value] of Object.entries(values)) {
            const name = key;
            const condition = Array.isArray(value) ? value.length == 0 : value == "" || value == 0;
            if (condition) {
                errExist = true
                setFormError((prev) => { return { ...prev, [name]: "Required" } });
            }
        }
        //  console.log("error: " + JSON.stringify(formError))
        return errExist
    }

    const handleSubmit = (e) => {
        //alert("hkdfs")
        e.preventDefault();

        setMessage("");
        setLoading(true);

        if (!validate(formData)) {
            //preserve the prev. data from database 
            const newForm = { ...formData }
            newForm.images = uploadImageUrl.concat(props.data.images);
            const carDatabaseId = props.data._id

            console.log(JSON.stringify(newForm))

            updateCar(newForm, carDatabaseId).then(
                ({ data, status, code }) => {

                    props.showSuccessMessage("edited successfully done!");
                    setTimeout(() => { props.dismissSuccessMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                    //setFormData((prev) => ({ ...initState }))
                    setLoading(false);
                    // setUploadImageUrl([]);
                    //setSelectedImg(null)
                },
                (error) => {
                    console.log(" error: " + JSON.stringify(error))
                    props.showErrorMessage(error.response.data.msg);
                    setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                    setLoading(false);
                    setMessage(error.response.data.msg);
                }
            )
        } else {
            setLoading(false);
            props.showInfoMessage("Form Validation Failed")
            setTimeout(() => { props.dismissInfoMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
            console.log("form validation failed!" + JSON.stringify(formError))
        }

        //setLoading(false);
    }

    return (
        <div>


            <div className="car__new">


                <div className="car__newContainer">

                    <div className="car__bottom">
                        <Modal isOpen={modal} toggle={() => toggle()} onClick={() => toggle()} >
                            {/* <ModalHeader><i class="ri-close-line" ></i></ModalHeader> */}
                            <ModalBody className={`${file ? "car__modalopen" : "car__modal_closed"}`}>
                                {
                                    <img
                                        src={selectedImg
                                            // URL.createObjectURL(file)
                                        }
                                        alt="" />

                                }
                            </ModalBody>

                        </Modal>
                        <div className="car__left">
                            {
                                uploadImageUrl.length != 0 ?
                                    uploadImageUrl.map(imgUrl => (
                                        <div className="thumb">
                                            <img
                                                src={
                                                    imgUrl//URL.createObjectURL(file)
                                                    //  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                                }
                                                alt=""
                                                onClick={() => toggle(imgUrl)}
                                            />
                                        </div>
                                    )
                                    )
                                    : <div className="thumb">
                                        <img
                                            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                            alt="" /></div>
                            }

                        </div>

                        <div className="car__right">
                            {!props.options.disableImageUpload && <UploadForm
                                file={file}
                                setUploadImageUrl={setUploadImageUrl}
                                setFile={setFile}
                                uploadImgError={setUploadImgError}
                                setUploadImgError={setUploadImgError}
                                dealerId={dealerId}
                            />
                            }
                            <form onSubmit={(e) => { handleSubmit(e) }}>
                                

                                {
                                inputs.map((element, index) => (
                                    <div className="car__formInput" key={element.id}>
                                        <label>{element.label}:</label>
                                        {

                                            element?.options ? (
                                                <Input
                                                    type={element.type}
                                                    placeholder={element.placeholder}
                                                    name={element.name}
                                                    onChange={(e) => handleChange(e)}
                                                    value={formData[element.name]}
                                                    key={element.id}
                                                    disabled={props.options.disableFields}

                                                >
                                                    <option></option>
                                                    {

                                                        element.options.map((selectOption, index) => (<option key={selectOption + index}>{selectOption}</option>))
                                                    }
                                                </Input>
                                            )

                                                : <input
                                                    type={element.type}
                                                    placeholder={element.placeholder}
                                                    name={element.name}
                                                    onChange={(e) => handleChange(e)}
                                                    value={formData[element.name]}
                                                    disabled={props.options.disableFields}
                                                    style={{}}
                                                // required={element.required}
                                                />

                                        }
                                        <span className='error'>{formError[element.name]}</span>

                                    </div>
                                ))}

                                {/* <button type="button" >Send</button> */}
                                {!props.options.disableSubmit && <Button
                                    type="submit"
                                    color="primary"
                                    id={"submit"}
                                    className="button"

                                >
                                    {loading == true && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    Submit
                                </Button>
                                }
                            </form>
                        </div>
                    </div>
                </div >




            </div >




        </div>


    );
};

function mapStateToProps(state) {
    return {
        isLoading: state.tunnel.isLoading,
        errorMessage: state.tunnel.errorMessage,
        successMessage: state.tunnel.successMessage,
        loadingPercentage: state.tunnel.loadingPercentage,
        infoMessage: state.tunnel.infoMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dismissErrorMessage: () => dispatch(dismissErrorMessage()),
        dismissSuccessMessage: () => dispatch(dismissSuccessMessage()),
        showErrorMessage: message => dispatch(showErrorMessage(message)),
        showSuccessMessage: message => dispatch(showSuccessMessage(message)),
        updateLoading: (isLoading, percentage = null) => dispatch(updateLoading({ isLoading, percentage })),
        showInfoMessage: message => dispatch(showInfoMessage(message)),
        dismissInfoMessage: () => dispatch(dismissInfoMessage())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
