/* eslint-disable prettier/prettier */
import { Container, Copyright, FooterSection, Link, Links, SectionTitle } from "./styles"

const currentYear = new Date().getFullYear()


const Footer = () => (
    <Container>
        <div className="container">
            <FooterSection>
                <SectionTitle>Categorias</SectionTitle>
                <Links>
                    <li><Link href="#">Ação</Link></li>
                    <li><Link href="#">Aventura</Link></li>
                    <li><Link href="#">RPG</Link></li>
                    <li><Link href="#">Esportes</Link></li>
                    <li><Link href="#">Simulação</Link></li>
                    <li><Link href="#">FPS</Link></li>
                    <li><Link href="#">Estratégia</Link></li>
                </Links>
            </FooterSection>
            <FooterSection>
                <SectionTitle>Acesso rápido</SectionTitle>
                <Links>
                    <li><Link href="#">Início</Link></li>
                    <li><Link href="#">Categorias</Link></li>
                    <li><Link href="#">Promoções</Link></li>
                    <li><Link href="#">Em breve</Link></li>
                    <li><Link href="#">Sobre nós</Link></li>
                    <li><Link href="#">Contato</Link></li>
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
