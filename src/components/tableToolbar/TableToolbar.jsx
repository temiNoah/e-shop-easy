import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Tooltip, Button } from 'reactstrap'
import SearchBar from './components/searchBar'
import CustomTooltip from '../tooltip/Tooltip'
import './style.scss'
import AsyncCSV from '../fileDownloader/AsyncCSV'

function TableToolbar(props) {

    const [loading, setLoading] = useState(false)
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [tooltipDownloadOpen, setTooltipDownloadOpen] = useState(false)

    const handleSubmit = () => {

    }

    const handleChange = (event) => {

    };

    return (

        <div className='dealer-tableToolbar'>
            <SearchBar setFilter={props.setFilter} showFilterDateOnly={props.showFilterDateOnly} />

            <div style={{ borderLeft: "1px solid rgba(0,0,0,1)", height: "40%", margin: "40px 20px 0px 0px", opacity: "0.1" }}></div>

            <div style={{ display: "flex", flexDirection: "row", gap: "20px", cursor: "pointer" }}>
                {props.showFilterAdd &&
                    <div style={{ paddingTop: "50px", }}>
                        {/* <i class="ri-add-line"></i> */}
                        <i
                            class="ri-add-circle-line"
                            onClick={() => props.onClick(props.configs.filter(config => config.name == "add")[0])}
                            id="addNewTooltip"
                        ></i>
                        <CustomTooltip targetElementId="addNewTooltip" text={"Add New"} position="right" />
                    </div>
                }

                <div style={{ paddingTop: "50px", cursor: "pointer" }}>
                    <AsyncCSV getDownloadData={props.getDownloadData} header={props.header} fileName={props.fileName} />
                </div>

                <div style={{ paddingTop: "50px", cursor: "pointer" }}>
                    {/* <i class="ri-loop-right-line"></i> */}
                    <i class="ri-refresh-line" id="reloadTooltip" onClick={props.handleReload}></i>
                    <CustomTooltip targetElementId="reloadTooltip" text={"Reload cars list"} position="right" />
                </div>


                {props.showFilterDelete &&
                    <div style={{ paddingTop: "50px", cursor: "pointer" }}>
                        <i class="ri-delete-bin-line" id="deleteTooltip" onClick={() => {
                            const res = prompt("Delete all dealer cars, type yes otherwise no?");
                            if (res == "yes")
                                props.handleDeleteAll();
                        }}>

                        </i>
                        <CustomTooltip targetElementId="deleteTooltip" text={"Delete all dealer cars"} position="right" />
                    </div>
                }

                {/* <Button className="add-btn">
                    {/* {props.title} * /}
                </Button> */}

            </div>
        </div >

    )
}

export default TableToolbar