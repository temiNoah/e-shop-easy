import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Tooltip, Button } from 'reactstrap'
import { formatDate } from '../../../utilities/formatDateTime'
import './style.scss'
function SearchBar(props) {

    const [loading, setLoading] = useState(false)
    const initialState = {
        manufacturer: "",
        from: "",
        to: "",
        model: ""
    };

    const [formData, setFormData] = useState({
        ...initialState
    });


    const { manufacturer, from, to, model } = formData;


    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log("from: " + formData.from + "  =  to:" + formData.to)

        const newFormData = { ...formData };
        const formatedFrom = newFormData.from != "" ? new Date(formatDate(newFormData.from)) : "";
        const formatedTo = newFormData.to != "" ? new Date(formatDate(newFormData.to)) : "";
        delete newFormData.from;
        delete newFormData.to;

        // console.log("from: " + formatedFrom + "  =  to:" + formatedTo)


        if (!manufacturer)
            delete newFormData.manufacturer
        if (!model)
            delete newFormData.model
        if (!from)
            delete newFormData.from
        if (!to)
            delete newFormData.to

        if (from && to)
            newFormData.createdAt = { $gte: formatedFrom, $lt: formatedTo }

        props.setFilter(newFormData)
    }

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        //console.log("date :" + value)

        //test if field has value
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    return (
        <Form onSubmit={(e) => handleSubmit(e)} className="tableToolbar-wrapper">
            {
                !props.showFilterDateOnly &&
                <FormGroup className="car-table-form-group mt-3">
                    <Label for="manufacturer">Manufacturer:</Label>
                    <Input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // placeholder="parentCompanyName"
                        className="form-control mt-1"
                        value={manufacturer}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    //invalid={formError.parentCompanyName != null}
                    // required
                    />
                </FormGroup>
            }
            {
                !props.showFilterDateOnly &&
                <FormGroup className="car-table-form-group mt-3">
                    <Label for="model">Model:</Label>
                    <Input
                        type="text"
                        name="model"
                        id="model"
                        // placeholder="parentCompanyName"
                        className="form-control mt-1"
                        value={model}
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    //invalid={formError.parentCompanyName != null}
                    // required
                    />
                </FormGroup>
            }
            <FormGroup className="car-table-form-group mt-3">
                <Label for="from">From:</Label>
                <Input
                    type="date"
                    name="from"
                    id="from"
                    //dateFormat="YYYY/MM/DD"
                    // placeholder="parentCompanyName"
                    className="form-control mt-1"
                    value={from}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                //invalid={formError.parentCompanyName != null}
                // required
                />
            </FormGroup>
            <FormGroup className="car-table-form-group mt-3">
                <Label for="to">To:</Label>
                <Input
                    type="date"
                    name="to"
                    id="to"
                    // placeholder="parentCompanyName"
                    className="form-control mt-1"
                    value={to}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                // invalid={formError.parentCompanyName != null}
                // required
                />
            </FormGroup>
            <FormGroup className="car-table-form-group mt-3">
                <Button
                    type="submit"
                    // color="primary"
                    className='submit_btn'
                    // style={{ marginLeft: "", marginBottom: "", borderRadius: "5px",width }}
                    id={"submit"}

                //  disabled={!valid}
                >
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <i class="ri-arrow-right-line"></i>
                </Button>
            </FormGroup>
        </Form>
    )
}

export default SearchBar