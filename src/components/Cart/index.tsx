import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as S from "./styles"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { parseToBrl, getTotalPrice } from "../../utils"
import Button from "../Button"

import Tag from "../Tag"

const Cart = ()  => {
    const {isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }



    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToCheckout = () => {
      navigate('/checkout')
      closeCart()
    }


    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={ closeCart } />
            <S.SideBar>
              {items.length > 0 ? (
                <>
                  <ul>
                    {items.map((item) =>(
                        <S.CartItem key={item.id}>
                        <img src={item.media.thumbnail} alt={item.name}/>
                        <div>
                            <h3>{item.name}</h3>
                            <Tag>{item.details.category}</Tag>
                            <Tag>{item.details.system}</Tag>
                            <span>{parseToBrl(item.prices.current)}</span>
                        </div>
                        <button onClick={() => removeItem(item.id)} type="button" />
                    </S.CartItem>
                    ))}

                </ul>
                <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
                <S.Prices>Total  de {parseToBrl(getTotalPrice(items))}{''}  <span>Em até 6x sem juros</span></S.Prices>
                <Button onClick={goToCheckout} type="button"  title="Clique aqui pra continuar com a compra">
                    Continuar com a compra
                </Button>
                </>
              ) : (
                <p className="empty-text">
                  o carrinho está vazio...
                </p>
              )}

            </S.SideBar>
        </S.CartContainer>
    )
}

export  default Cart
