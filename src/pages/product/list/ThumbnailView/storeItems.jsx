import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardTitle, CardImg } from 'reactstrap'
import { useShoppingCart } from "../../../../context/ShoppingCartContext"
import { formatCurrency } from "../../../../utilities/formatCurrency"
import './style.scss'
import { APIContext } from '../../../../context/APIContext'
import { Link } from "react-router-dom";
// type StoreItemProps = {
//   id: number
//   name: string
//   price: number
//   imgUrl: string
// }

export const StoreItem = React.forwardRef(({ id, name, price, imgUrl, model, speed, transmissionType, dealerID, onClick, purpose }, ref) => {
    //console.log("store item :" + "id:" + id + "  name:" + name + " price:" + price + " imgUrl:" + imgUrl + " dealerId:" + dealerID)
    const state = useContext(APIContext)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id);

    console.log("purpose:", purpose);

    return (
        <React.Fragment>
            {
                ref != null ?
                    <div ref={ref} style={{ width: '30%', border: '0px solid #000', }} >
                        <Card className="h-100 customer-card" style={{ width: '100%' }}>
                            <CardImg
                                top
                                src={imgUrl}
                                height="250px"
                                style={{ objectFit: "cove", cursor: "zoom-out", /*filter: "drop-shadow(8px 8px 10px gray)"*/ }}
                                onClick={() => onClick()}
                            />


                            <CardBody className="d-fle flex-column" style={{ height: "auto", }}>

                                <CardTitle className="d-fle justify-content-between align-items-baseline mb-" style={{ marginBottom: "0px !important", padding: "0px 3px 0px 3px" }}>
                                    {/* <span className="fs-6" onClick={() => { }}>{name}</span>
                                    <span className="ms-2 text-muted">{formatCurrency(price)}</span> */}
                                    <div className="car__item">
                                        <div className="car__item-content">
                                            <h4 className="section__title text-center">{name}</h4>
                                            <h6 className="rent__price text-center mt-">
                                                {formatCurrency(price)}
                                            </h6>

                                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 ">
                                                <span className=" d-flex align-items-center gap-1">
                                                    <i class="ri-car-line"></i> {model}
                                                </span>
                                                <span className=" d-flex align-items-center gap-1">
                                                    <i class="ri-settings-2-line"></i> {transmissionType}
                                                </span>
                                                <span className=" d-flex align-items-center gap-1">
                                                    <i class="ri-timer-flash-line"></i> {speed}
                                                </span>
                                            </div>

                                            {
                                                (purpose == "rent" || purpose == "both") &&
                                                <button className=" w-50 car__item-btn car__btn-rent">
                                                    <Link to={`/customer/car-hire/${id}`}>Rent</Link>
                                                </button>
                                            }

                                            {
                                                (purpose == "sale" || purpose == "both") &&
                                                <button className=" w-50 car__item-btn car__btn-details">
                                                    <Link to={`/customer/car-sale/${id}`}>Sale</Link>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </CardTitle>


                                <div className="mt-auto tool-pane">
                                    {quantity === 0 ? (
                                        // <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                                        //   + Add To Cart
                                        // </Button>
                                        <div style={{ borderRadius: "50%", }}><i class="ri-add-fill" onClick={() => increaseCartQuantity(id, price, imgUrl, name, dealerID)} style={{ cursor: "pointer" }}></i></div>
                                    ) :

                                        (
                                            <div className="d-flex align-items-center flex-column tool" style={{ gap: "2px", padding: "0px 2px 0px 2px" }}>
                                                <div className="d-flex align-items-center justify-content-center " style={{ gap: ".1rem" }} >
                                                    {/* <Button onClick={() => decreaseCartQuantity(id)}>-</Button> */}
                                                    <div style={{ borderRadius: "50%", }}>
                                                        <i class="ri-subtract-fill" onClick={() => decreaseCartQuantity(id)} style={{ cursor: "pointer", fontSize: "20px", }}></i>
                                                    </div>

                                                    <div>
                                                        <span className="fs-6">{quantity}</span>
                                                        {/* in cart */}
                                                    </div>
                                                    {/* <Button onClick={() => increaseCartQuantity(id)}>+</Button> */}
                                                    <div style={{ borderRadius: "50%", }}>
                                                        <i class="ri-add-fill" onClick={() => increaseCartQuantity(id, price, imgUrl, name, dealerID)} style={{ cursor: "pointer", fontSize: "20px", fontWeight: "400" }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </div>
                                {/* <div className='cover'></div> */}
                            </CardBody>
                        </Card>
                    </div>

                    :

                    <Card className="h-100 customer-card" >
                        <CardImg
                            top
                            src={imgUrl}
                            height="250px"
                            style={{ objectFit: "cove", cursor: "zoom-out", /*filter: "drop-shadow(8px 8px 10px gray)"*/ }}
                            onClick={() => onClick()}
                        />


                        <CardBody className="d-fle flex-column" style={{ height: "auto", }}>

                            <CardTitle className="d-fle justify-content-between align-items-baseline mb-" style={{ marginBottom: "0px !important", padding: "0px 3px 0px 3px" }}>
                                {/* <span className="fs-6" onClick={() => { }}>{name}</span>
                                <span className="ms-2 text-muted">{formatCurrency(price)}</span> */}
                                <div className="car__item">
                                    <div className="car__item-content">
                                        <h4 className="section__title text-center">{name}</h4>
                                        <h6 className="rent__price text-center mt-">
                                            {formatCurrency(price)}
                                        </h6>

                                        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 ">
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-car-line"></i> {model}
                                            </span>
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-settings-2-line"></i> {transmissionType}
                                            </span>
                                            <span className=" d-flex align-items-center gap-1">
                                                <i class="ri-timer-flash-line"></i> {speed}
                                            </span>
                                        </div>

                                        {
                                            (purpose == "rent" || purpose == "both") &&
                                            <button className=" w-50 car__item-btn car__btn-rent">
                                                <Link to={`/customer/car-hire/${id}`}>Rent</Link>
                                            </button>
                                        }

                                        {
                                            (purpose == "sale" || purpose == "both") &&

                                            <button className=" w-50 car__item-btn car__btn-details">
                                                <Link to={`/customer/car-sale/${id}`}>Sale</Link>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </CardTitle>


                            <div className="mt-auto tool-pane">
                                {quantity === 0 ? (
                                    // <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                                    //   + Add To Cart
                                    // </Button>
                                    <div style={{ borderRadius: "50%", }}><i class="ri-add-fill" onClick={() => increaseCartQuantity(id, price, imgUrl, name, dealerID)} style={{ cursor: "pointer" }}></i></div>
                                ) :

                                    (
                                        <div className="d-flex align-items-center flex-column tool" style={{ gap: "2px", padding: "0px 2px 0px 2px" }}>
                                            <div className="d-flex align-items-center justify-content-center " style={{ gap: ".1rem" }} >
                                                {/* <Button onClick={() => decreaseCartQuantity(id)}>-</Button> */}
                                                <div style={{ borderRadius: "50%", }}>
                                                    <i class="ri-subtract-fill" onClick={() => decreaseCartQuantity(id)} style={{ cursor: "pointer", fontSize: "20px", }}></i>
                                                </div>

                                                <div>
                                                    <span className="fs-6">{quantity}</span>
                                                    {/* in cart */}
                                                </div>
                                                {/* <Button onClick={() => increaseCartQuantity(id)}>+</Button> */}
                                                <div style={{ borderRadius: "50%", }}>
                                                    <i class="ri-add-fill" onClick={() => increaseCartQuantity(id, price, imgUrl, name, dealerID)} style={{ cursor: "pointer", fontSize: "20px", fontWeight: "400" }}></i>
                                                </div>
                                            </div>

                                            {/* <Button
                        onClick={() => removeFromCart(id)}
                        variant="danger"
                        size="sm"
                      >
                        Remove
                      </Button> */}
                                            {/* <i class="ri-delete-bin-line" onClick={() => removeFromCart(id)} style={{ color: "red" }}></i> */}
                                        </div>
                                    )}
                            </div>
                            {/* <div className='cover'></div> */}
                        </CardBody>
                    </Card>


            }

        </React.Fragment>
    )
})
