import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderBar, Links, LinkItem, CartButton } from "./styles";

import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'

import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";


const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
        
    }

    return (
        <HeaderBar>
            <div>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <nav>
                    <Links>
                        <LinkItem>
                            <Link to="/categories">Categorias</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to="/novidades">Novidades</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to="/promocoes">Promoções</Link> 
                        </LinkItem>
                    </Links>
                </nav>
            </div>
            <div>
                <CartButton onClick={openCart}>
                    {items.length} - Produto(s)
                    <img src={carrinho} alt="Carrinho de compras" />
                </CartButton>
            </div>
        </HeaderBar>
    )
}

export default Header