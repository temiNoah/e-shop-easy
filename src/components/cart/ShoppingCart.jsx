import React, { useContext, useEffect } from "react"
//import { useNavigate } from 'react-router-dom';
import { Offcanvas, Row, OffcanvasBody, OffcanvasHeader, Button } from "reactstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"
import { CartItem } from "./CartItem"
//import storeItems from "../../../../../assets/data/items.json"
import { APIContext } from "../../context/APIContext"

// type ShoppingCartProps = {
//   isOpen: boolean
// }

export function ShoppingCart({ isOpen } /*: ShoppingCartProps*/) {
  const { closeCart, cartItems, orderType } = useShoppingCart()
  const state = useContext(APIContext)
  const { search } = state.ProductAPI
  //const navigate = useNavigate();

  //console.log("state :" + JSON.stringify(state))
  //const { initiatePayment } = state.PaymentAPI
  const filter = {}
  let totalAmount = 0

  // useEffect(()=>{
  //   search(filter).them(
  //     (res)=>{

  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )
  // },[cartItems])

  //   totalAmount = (cartItems.reduce((total, cartItem) => {
  //   const item = storeItems.find(i => i.id === cartItem.id)
  //   return total + (item?.price || 0) * cartItem.quantity
  // }, 0))

  totalAmount = (cartItems.reduce((total, cartItem) => {
    console.log("cartItems: " + JSON.stringify(cartItem))
    return total + (cartItem?.price || 0) * cartItem.quantity
  }, 0))

  console.log("totalAmount:" + JSON.stringify(totalAmount))

  const handleCheckOut = () => {

    //alert(orderType)
    window.location.href = "/checkout?paymentFor=" + orderType

    // const form = { email: "admin@gmail.com", amount: totalAmount, "fullName": "temi" }
    // initiatePayment(form).then(
    //   (data) => {
    //     console.log(data.data?.authUrl);//(JSON.stringify(data))
    //     window.location.href = data?.data.authUrl || '/'
    //   },
    //   (error) => {
    //     console.log(JSON.stringify(error))
    //   }
    // );
  }
  return (
    // <Offcanvas isOpen={isOpen} onClosed={closeCart} placement="end">
    <Offcanvas isOpen={isOpen} direction="end" style={{ background: "white" }} fade="true">
      <OffcanvasHeader toggle={closeCart} >
        Cart
      </OffcanvasHeader>
      <OffcanvasBody>
        <div style={{ display: "grid", gridGap: "50px 0px", gridTemplateRows: "auto 100px" }}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5" style={{}}>
            Total{": "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                //const item = storeItems.find(i => i.id === cartItem.id)
                return total + (cartItem?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}><Button color="primary" onClick={handleCheckOut}>checkout</Button></div>
      </OffcanvasBody>
    </Offcanvas>
  )
}
