// import Container from 'reactstrap'
import { useState, useContext } from 'react'
//import { Container, Row, Col } from 'reactstrap';

//import { Navbar as Navbar2 } from "../../admin/product/store/components/Navbar"
//import Navbar from "../../../components/navbar/Navbar"
import Flip from "../../components/flip/flip"
//import Datatable from '../../../components/datatable/Datatable';
import ProductGrid from './list/ProductGrid';
import ProductDetails from './view/ProductDetails';
import CustomTooltip from '../../components/tooltip/Tooltip';
import { labels } from '../../utilities/ui-labels';
import ProductThumbNailView from './list/ThumbnailView/ProductThumbNailView'

import { Cart } from "../../components/cart/Cart"


export function Product() {
    const [view, setView] = useState(true)
    const configs = [
        {
            name: "Products",
            path: "/all",
            content: ProductGrid
        },
        {
            name: "view",
            path: "/view",
            content: ProductDetails
        }

    ]

    const handleView = () => {

        setView((prev) => !prev)
    }

    const customerId = "";//auth.userId;
    return (
        <>

            <Cart />

            <div style={{ padding: "10px" }}>

                <i class="ri-function-line" onClick={() => handleView()} style={{ cursor: "pointer", marginLeft: "97%", display: "inline" }} id="thumbnailView"></i>
                <CustomTooltip targetElementId="thumbnailView" text={labels.thumbnail} position="right" />
                {
                    view ?
                        <Flip configs={configs} />
                        :
                        <ProductThumbNailView customerId={""} view={view} />
                }
            </div>
        </>
    )
}
