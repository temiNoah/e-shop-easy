//import { Button, Row, Col } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { useShoppingCart } from "../../context/ShoppingCartContext"
//import storeItems from "../../../../../assets/data/items.json"
import { formatCurrency } from "../../utilities/formatCurrency"

// type CartItemProps = {
//   id: number
//   quantity: number
// }

export function CartItem({ id, quantity, price, imgUrl } /*: CartItemProps*/) {
  // console.log(imgUrl)
  const { removeFromCart } = useShoppingCart()
  const item = { id, price, imgUrl }//storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Row style={{ display: "grid", gap: "0px 40px", gridTemplateColumns: "100px 150px 50px" }} >
      <Col style={{}}>
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
      </Col>

      <Col style={{ paddingLeft: "30px" }}>
        <div className="me-au">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
      </Col>

      <Col style={{ display: "grid", gridTemplateColumns: "auto 10px" }}>

        <div style={{}}> { /*formatCurrency(item.price * quantity) */}</div>
        {/* <Button
          color="primary"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button> */}
        <i class="ri-delete-bin-line" onClick={() => removeFromCart(item.id)} style={{ color: "red", cursor: "pointer" }}></i>

      </Col>
    </Row>
  )
}
