import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/cart/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }

// type CartItem = {
//   id: number
//   quantity: number
// }

// type ShoppingCartContext = {
//   openCart: () => void
//   closeCart: () => void
//   getItemQuantity: (id: number) => number
//   increaseCartQuantity: (id: number) => void
//   decreaseCartQuantity: (id: number) => void
//   removeFromCart: (id: number) => void
//   cartQuantity: number
//   cartItems: CartItem[]
// }

const ShoppingCartContext = createContext({} /*as ShoppingCartContext*/)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children } /*: ShoppingCartProviderProps*/) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage/*<CartItem[]>*/(
    "shopping-cart",
    []
  );
  const [orderType, setOrderType] = useState("");
  const [rentalId, setRentalId] = useState("");

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  //const orderType = ()


  function getItemQuantity(id/*: number*/) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id, price, imgUrl, name, dealerID) {

    console.log("increase:" + id + " , price:" + price + " ,img:" + imgUrl + "  ,name:" + name + " dealerId: " + dealerID)

    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, price, imgUrl, name, quantity: 1, dealerID }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id/*: number*/) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id/*: number*/) {
    // console.log("decre:" + id)
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function removeAllItemsFromCart() {
    // console.log("decre:" + id)
    setCartItems([])
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        removeAllItemsFromCart,
        setOrderType,
        orderType,
        rentalId,
        setRentalId,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
