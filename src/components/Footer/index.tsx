
import { Container, Copyright, FooterSection, Link, Links, SectionTitle } from "./styles"

const currentYear = new Date().getFullYear()


const Footer = () => (
    <Container>
        <div className="container">
            <FooterSection>
                <SectionTitle>Categorias</SectionTitle>
                <Links>
                    <li><Link href="/categorias/acao">Ação</Link></li>
                    <li><Link href="/categorias/aventura">Aventura</Link></li>
                    <li><Link href="/categorias/rpg">RPG</Link></li>
                    <li><Link href="/categorias/esportes">Esportes</Link></li>
                    <li><Link href="/categorias/simulacao">Simulação</Link></li>
                    <li><Link href="/categorias/fps">FPS</Link></li>
                    <li><Link href="/categorias/estrategia">Estratégia</Link></li>
                </Links>
            </FooterSection>
            <FooterSection>
                <SectionTitle>Acesso rápido</SectionTitle>
                <Links>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/categories">Categorias</Link></li>
                    <li><Link href="/promocoes">Promoções</Link></li>
                    <li><Link href="/em-breve">Em breve</Link></li>
                    <li><Link href="/sobre-nos">Sobre nós</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
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
