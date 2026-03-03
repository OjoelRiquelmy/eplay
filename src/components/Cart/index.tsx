import { useDispatch, useSelector } from "react-redux"
import { CartContainer, CartItem, Overlay, Prices, Quantity, SideBar } from "./styles" 
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import Button from "../Button"
import { formataPreco } from "../ProductsList"
import Tag from "../Tag"

const Cart = ()  => {   
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.prices.current!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={ closeCart } />
            <SideBar>
                <ul>
                    {items.map((item) =>(
                        <CartItem key={item.id}>
                        <img src={item.media.thumbnail} alt={item.name}/>
                        <div>
                            <h3>{item.name}</h3>
                            <Tag>{item.details.category}</Tag>
                            <Tag>{item.details.system}</Tag>
                            <span>{formataPreco(item.prices.current)}</span>
                        </div>
                        <button onClick={() => removeItem(item.id)} type="button" />
                    </CartItem>
                    ))}
                    
                </ul>
                <Quantity>{items.length} jogos no carrinho</Quantity>
                <Prices>Total  de {formataPreco(getTotalPrice())}  <span>Em até 6x sem juros</span></Prices>
                <Button type="button"  title="Clique aqui pra continuar com a compra">
                    Continuar com a compra
                </Button>
            </SideBar>
        </CartContainer>
    )
}

export  default Cart