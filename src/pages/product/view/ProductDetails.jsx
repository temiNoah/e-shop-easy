import React from 'react';
import './style.scss';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';
import CustomImageGallery from '../../../components/imageGallery/imageGallery';
import { APIContext } from "../../../context/APIContext";
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import {
    showErrorMessage,
    showSuccessMessage,
    dismissErrorMessage,
    dismissSuccessMessage,
    updateLoading
} from '../../../redux/actions/tunnel';

import EditCar from '../edit/edit';

class ProductDetails extends React.Component {

    static contextType = APIContext;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        //this.handleTabmyRef = React.createRef();

        //console.log("car id :" + props.activeNav.path.split("/")[2])

        this.state = {
            products: [],
            index: 0,
            loading: false
        };

    }


    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
       

        this.setState(prev => ({
            ...prev, loading: true
        }))

        const { getCarDetails } = this.context.MockAPI//this.context.CarAPI

        // console.log("car id :" + this.props.activeNav.path)
        const id = this.props.activeNav.path.split("/")[2]; //  '/view/2'
         console.log("id",id)

        //alert(id)

        this.setState(prev => ({ ...prev, loading: true }))

        getCarDetails(id).then(
            ({ data, status }) => {
                //console.log("lengtjh: " + data.length)
                // this.props.showSuccessMessage("car's details successful!");
                // setTimeout(() => { this.props.dismissSuccessMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));


                //data = [data]
                this.setState(prev => ({
                    ...prev, products: data
                }))

                // const { index } = this.state;
                // this.myRef.current.children[index].className = "active";

            }, (error) => {
                console.log(error)
                const msg = (error.response && error.response.data && error.response.data.msg) || error.message || error.toString();
                this.props.showErrorMessage(msg);
                setTimeout(() => { this.props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                this.setState(prev => ({ ...prev, loading: false }))


            }
        );


        this.setState(prev => ({
            ...prev, loading: false
        }))

    }


    imageGalleryDataFormatter(images) {
        return images.map((image) => {
            return {
                original: image,
                // thumbnail: image,
                fullscreen: image,

            }
        })
    }

    render() {
        const { product, index } = this.state;
        const colors = ["red", "black", "crimson", "teal"]

        console.log("product::",product)

        return (
            <div className='' style={{ display: "flex", flexDirection: "column", padding: "30px" }}>

                <div className="app-product">
                    {
                        product &&
                       // products.map((item, index) => (
                            <div className="details" >
                                {/* <div className="big-img" >
                                   <CustomImageGallery images={product.image} />
                                </div> */}

                                <div className="box">
                                    <div className="row">
                                    <h2>Brand :{product.name} </h2>
                                        {/* <h6>Model: {item.model}</h6> */}
                                    <span>${product.price}</span>
                                    </div>
                                    <Colors colors={colors} />

                                <p>{product.description}</p>
                                <p>{product.category}</p>

                                {/* <div><DetailsThumb images={product.image} tab={this.handleTab} myRef={this.myRef} /></div> */}
                                </div>

                            </div>
                       // ))
                    }

                </div>


                {/* <EditCar data={product} options={{ disableImageUpload: true, disableFields: true, disableSubmit: true }} /> */}
               
            </div>
        );
    };
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
