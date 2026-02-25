/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";

import { HeaderBar, Links, LinkItem, Cart } from "./styles";

import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'


const Header = () => (
    <HeaderBar>
        <div>
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <nav>
                <Links>
                    <LinkItem>
                        <Link to="/categories">Categorias</Link>
                    </LinkItem>
                    <LinkItem>
                        <a href="#">Novidades</a>
                    </LinkItem>
                    <LinkItem>
                        <a href="#">Promoções</a> 
                    </LinkItem>
                </Links>
            </nav>
        </div>
        <div>
            <Cart href="#">
                0 - Produto(s)
                <img src={carrinho} alt="Carrinho de compras" />
            </Cart>
        </div>
    </HeaderBar>
)

export default Header