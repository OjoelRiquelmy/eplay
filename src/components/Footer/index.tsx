
import { Container, Copyright, FooterSection, Link, Links, SectionTitle } from "./styles"

const currentYear = new Date().getFullYear()


const Footer = () => (
    <Container>
        <div className="container">
            <FooterSection>
                <SectionTitle>Categorias</SectionTitle>
                <Links>
                    <li><Link to="/categories#action">Ação</Link></li>
                    <li><Link to="/categories#fight">Luta</Link></li>
                    <li><Link to="/categories#rpg">RPG</Link></li>
                    <li><Link to="/categories#sportes">Esportes</Link></li>
                    <li><Link to="/categories#simulation">Simulação</Link></li>
                </Links>
            </FooterSection>
            <FooterSection>
                <SectionTitle>Acesso rápido</SectionTitle>
                <Links>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/categories">Categorias</Link></li>
                    <li><Link to="#on-sale">Promoções</Link></li>
                    <li><Link to="#coming-soon">Em breve</Link></li>
                </Links>
            </FooterSection>
            <Copyright>
                {currentYear} - &copy; Todos os direitos reservados - Desenvolvido por 
                <a href="https://site-social-six.vercel.app/">Joel Riquelmy</a>
            </Copyright>
        </div>
    </Container>
)

export default Footer
