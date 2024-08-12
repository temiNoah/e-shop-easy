import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import CustomTooltip from '../tooltip/Tooltip';
import { headerRenderer } from 'react-data-grid';
// const headers = [
//     { label: "Name", key: "name" },
//     { label: "Username", key: "username" },
//     { label: "Email", key: "email" },
//     { label: "Phone", key: "phone" },
//     { label: "Website", key: "website" }
// ];

class AsyncCSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            headers: []
        }
        this.csvLinkEl = React.createRef();
    }

    componentDidMount() {
        const headers = this.props.header.filter((header) => header.key != "action").map((header) => {
            //console.log("headers1: " + JSON.stringify(header))
            return { label: header.name, key: header.key }
        })

        this.setState({ headers: headers })
    }

    // getUserList = () => {
    //     return fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json());
    // }

    downloadReport = async (data) => {
        this.setState({ data: data }, () => {
            setTimeout(() => {
                this.csvLinkEl.current.link.click();
            });
        });
    }


    render() {
        //const { data } = this.state;
        return (
            <div>
                <i class="ri-download-2-line" id="downloadCSV" onClick={async () => { const data = await this.props.getDownloadData(); this.downloadReport(data) }}></i>
                <CustomTooltip targetElementId="downloadCSV" text={"Download csv"} position="right" />
                <CSVLink
                    headers={this.state.headers}
                    filename={this.props.fileName}//"Clue_Mediator_Report_Async.csv"
                    data={this.state.data}
                    ref={this.csvLinkEl}
                />
            </div>
        );
    }
}

export default AsyncCSV;