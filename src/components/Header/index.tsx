import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderBar, Links, LinkItem, CartButton, Hamburguer, HeaderRow, NavMobile } from "./styles";

import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'

import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";


const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openCart = () => {
        dispatch(open())

    }

    return (
        <HeaderBar>
            <HeaderRow>
                <div>
                  <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span />
                    <span />
                    <span />
                  </Hamburguer>
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
                        {items.length} <span>- Produto(s)</span>
                        <img src={carrinho} alt="Carrinho de compras" />
                    </CartButton>
              </div>
            </HeaderRow>
            <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
            </NavMobile>
        </HeaderBar>
    )
}

export default Header
