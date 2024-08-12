import React, { useContext, useEffect } from 'react'
import { APIContext } from '../../context/APIContext'
import DataGrid from 'react-data-grid';
import { Input } from "reactstrap"

function TableRowSelection(props) {

    const lastColumn = [
        {
            key: "action",
            name: "Action",
            width: 100,
            renderCell: ({ value, row }) => {
                return (
                    <div className="cellAction" style={{ borderBottom: "0px", justifyContent: "center", outline: "#fff" }}>
                        {/* <Link to={`/users/customers/view/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link> */}
                        <Input name="p" type="radio" onClick={(e) => props.getSelection(e, row.id)} style={{}} />
                    </div >
                );
            },
        },
    ]

    const columns = props.columns.concat(lastColumn)
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", padding: "30px" }}>
            <div>Select Artisans:</div>
            <div className='datatable' style={{ height: "auto" }}>
                <DataGrid
                    className="datagrid"
                    rows={props.data}
                    rowCount={props.pageSize}
                    columns={columns}
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
            </div>
        </div>
    )
}

export default TableRowSelection