import "./datatable.scss";
//import { DataGrid, GridToolbar } from "@mui/x-data-grid";
//import LinearProgress from '@mui/material/LinearProgress';
import 'react-data-grid/lib/styles.css';
import { Spinner } from "reactstrap"
import DataGrid from 'react-data-grid';

//import { userColumns, userRows } from "../../datatablesource";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Tooltip } from 'reactstrap'
// import Single from "../../pages/admin/users/customers/view/Single";

//import ProductDetails from '../../pages/admin/product/view/ProductDetails'
//import Car from "../Forms/car/car";
import TableToolbar from "../../components/tableToolbar/TableToolbar";
import Pagination from "../../components/pagination/Pagination";

const Datatable = (props) => {


    useEffect(() => {
        console.log("loading...." + props.loading)
    }, [props.loading])

    const onPageChange = (e) => {
        console.log(e)
        props.setPageNum(e)
    }

    return (

        <div className="datatable App">
            {
             props.showFilter && 
                     <TableToolbar
                        onClick={props.onClick}
                        configs={props.configs}
                        setFilter={props.setFilter}
                        // handleDelete={props.handleDelete}
                        handleReload={props.handleReload}
                        handleDeleteAll={props.handleDeleteAll}

                        header={props.columns}
                        getDownloadData={props.getDownloadData}
                        fileName={props.fileName}
                        showFilterAdd={props.showFilterAdd}
                        showFilterDateOnly={props.showFilterDateOnly}
                        showFilterDelete={props.showFilterDelete}

                    />
            }     

            {
                props.loading ?

                    <Spinner style={{ width: '2rem', height: '2rem', position: "absolute", left: "50%" }} children={false} />
                    :
                    <DataGrid
                        className="datagrid"
                        rows={props.data}
                        rowCount={props.pageSize}
                        columns={props.columns}
                    // cellRenderer={cellRenderer}
                    // onCellEdit={null}

                    // editable={false}
                    // expandable={true}
                    // expandColumnOptions={{
                    //     columnWidth: 50,
                    //     expandColumnVisible: true,
                    //     renderer: ({ expanded }) => (
                    //         <div>{expanded ? '-' : '+'}</div>
                    //     )
                    // }}
                    />
            }

            {props.showPagination && <div>

                <Pagination
                    onPageChange={onPageChange}
                    pageSizes={props.pageSizes}
                    setPageSize={props.setPageSize}
                    pages={props.totalPages}
                    page={props.pageNum}

                    previousText={"prev"}
                    nextText={"next"} />
            </div>}
        </div>
    );
};

export default Datatable;
