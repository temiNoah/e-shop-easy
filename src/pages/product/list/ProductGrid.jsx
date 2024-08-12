import React, { useEffect, useState, useContext, useCallback } from 'react'
import { Spinner } from "reactstrap"
//import { Cell } from 'react-data-grid';
import Datatable from '../../../components/datatable/Datatable';
//import AuthService from "../../../../api/resources/auth.service";
import { APIContext } from '../../../context/APIContext';

import { connect } from 'react-redux'
import {
    showErrorMessage,
    showSuccessMessage,
    dismissErrorMessage,
    dismissSuccessMessage,
    updateLoading
} from '../../../redux/actions/tunnel';
import AuthUserContext from '../../../context/AuthUserContext';
import { formatCurrency } from '../../../utilities/formatCurrency'
//import { userColumns } from '../../../../api/constants/tableColumns'



function ProductGrid(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(10) // 10 pages
    const [pageNum, setPageNum] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [filter, setFilter] = useState({ pageSize })
    const [authUser, setAuthUser] = useContext(AuthUserContext)
    const state = useContext(APIContext)
    const { getCarList, searchCars, deleteCar, deleteAll } = state.MockAPI;//state.CarAPI;

    const fileName = "customer-cars.csv";
    const pageSizes = [10, 50, 100, 150, 200, 250, 500, 1000];

    const userColumns = [
        {
            key: "product_id",
            name: "ID",
            width: 70
        },
        {
            key: "name",
            name: "Name",
            width: 130,
            resizable: true,
        },
        {
            key: "image",
            name: "Image",
            width: 130,
            resizable: true,
            renderCell: ({ value, row }) => {
                console.log(row.image)
                return (

                    <div className="cellWithImg" style={{}} >
                        <img className="cellImg" src={row.image} alt="avatar" />
                        <span style={{ width: "12px" }}>{row.brand}</span>
                    </div>

                );
            },
        },
        {
            key: "model",
            name: "Model",
            width: 130,
            resizable: true,
            //  headerClassName: "datagri"
        },
        {
            key: "description",
            name: "Description",
            width: 200,
            resizable: true,
        },
        {
            key: "discount",
            name: "Discount",
            width: 100,
            resizable: true,
        },
        {
            key: "availability",
            name: "Availability",
            width: 100,
            resizable: true,
        },
        {
            key: "brand",
            name: "Brand",
            width: 100,
            resizable: true,
        },
        {
            key: "price",
            name: "Price",
            width: 150,
            resizable: true,
            renderCell: ({ row }) => {
                return (
                    <div className={``}>
                        {formatCurrency(row.price)}
                    </div>
                );
            },

        },
        {
            key: "unit",
            name: "Unit",
            width: 100,
            resizable: true,
        },
        {
            key: "category",
            name: "Category",
            width: 180,
            resizable: true,
        },
        {
            key: "rating",
            name: "Rating",
            width: 100,
            resizable: true,
        },
        {
            key: "action",
            name: "Action",
            width: 100,
            renderCell: ({ value, row }) => {
                return (
                    <div className="cellAction">
                        {/* <Link to={`/users/customers/view/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link> */}
                        <div
                            className="viewButton"
                            onClick={
                                () => props.onClick(
                                    { name: "view", path: `/view/${row.product_id}`, content: props.configs.filter(config => config.name == "view")[0].content }
                                )
                            }
                            style={{ curson: "pointer" }}>
                            {/* View */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z" /></svg> */}
                            <i class="ri-edit-box-line"></i>
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(row.id)}
                        >
                            {/* <svg className="deleteButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" /></svg> */}
                            <i class="ri-delete-bin-line"></i>
                        </div>
                    </div >
                );
            },
        },
    ];



    useEffect(() => {
        //console.log(pageNum + " - " + pageSize)
        filter.pageNum = pageNum;
        filter.pageSize = pageSize;
        carList(filter)
    }, [pageNum, pageSize, filter])


    const carList = useCallback((filter) => {
        // const dealerId = authUser.userId;
        // filter.dealerID = dealerId;

        setLoading(true)
        setData([])//set it to empty
        //setTotalPages(1) //reset total pages

        searchCars(filter).then(

            ({ data, status, code }) => {
                // props.showSuccessMessage(" successfully done!");
                // setTimeout(() => { props.dismissSuccessMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                //console.log("data: " + JSON.stringify(data))
                const result = data.data.map((d, index) => ({ ...d, id: index + 1 }))
                const saveTotalPages = data.totalDocs > pageSize ? Math.trunc(data.totalDocs / pageSize) : 1;
                setTotalPages(saveTotalPages)
                setData(result)
                setLoading(false);
                console.log("totalPages: " + totalPages);
            },
            (error) => {
                console.log("Failed to fetch cars: " + JSON.stringify(error))
                //const msg = (error.response && error.response.data && error.response.data.msg) || error.message || error.toString();
                const msg = error.data.msg;
                props.showErrorMessage(msg);
                setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                setLoading(false);
                //setMessage(error.response.data.msg);
            }
        )
    }, [pageNum, pageSize]
    )

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        const dealerId = authUser.userId;
        //setLoading(true)
        deleteCar(id, dealerId).then(
            (data) => {
                props.showSuccessMessage("deleted successfully!");
                setTimeout(() => { props.dismissSuccessMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                //console.log("data: " + JSON.stringify(data))
            },
            (error) => {
                const msg = error.data.msg;
                props.showErrorMessage(msg);
                setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                setLoading(false);
            }
        )

    };
    const handleDeleteAll = () => {
        // setLoading(true)
        const dealerId = authUser.userId;
        deleteAll(dealerId).then(
            (data) => {
                props.showSuccessMessage("deleted All successfully!");
                setTimeout(() => { props.dismissSuccessMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                //console.log("data: " + JSON.stringify(data))
            },
            (error) => {
                const msg = error.data.msg;
                props.showErrorMessage(msg);
                setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
                // setLoading(false);
            }
        )

    }
    const handleReload = () => {
        carList(filter);
    }

    const getDownloadData = async () => {
        console.log("getting data for download");
        const dealerId = authUser.userId;
        let result = []
        const trimFilter = { createdAt: filter.createdAt }
        await searchCars(trimFilter).then(
            ({ data }) => {
                console.log(JSON.stringify("downloaded data: " + data))
                result = data.map((record, index) => {
                    return { ...record, id: index + 1 }
                })
            },
            (error) => {
                console.log("Failed to fetch cars for download: " + JSON.stringify(error))
                const msg = error.data.msg;
                props.showErrorMessage(msg);
                setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));

            }
        )

        return result;
    }


    return (
        // loading ? <Spinner type="grow" color="warning" children={false} /> :
        <Datatable
            data={data}
            columns={userColumns}
            configs={props.configs}
            onClick={props.onClick}
            loading={loading}
            setFilter={setFilter}
            // handleDelete={handleDelete}
            handleReload={handleReload}
            handleDeleteAll={handleDeleteAll}

            getDownloadData={getDownloadData}
            fileName={fileName}

            pageSizes={pageSizes}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            showFilter={true}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid)