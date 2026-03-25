
import * as S from "./styles"

const currentYear = new Date().getFullYear()


const Footer = () => (
    <S.Container>
        <div className="container">
            <S.FooterSection>
                <S.SectionTitle>Categorias</S.SectionTitle>
                <S.Links>
                    <li><S.Link title="Clique aqui para acessar jogos de Ação" to="/categories#action">Ação</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar jogos de Luta" to="/categories#fight">Luta</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar jogos de RPG" to="/categories#rpg">RPG</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar jogos de Esportes" to="/categories#sportes">Esportes</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar jogos de Simulação" to="/categories#simulation">Simulação</S.Link></li>
                </S.Links>
            </S.FooterSection>
            <S.FooterSection>
                <S.SectionTitle>Acesso rápido</S.SectionTitle>
                <S.Links>
                    <li><S.Link title="Clique aqui para acessar a seção de Início" to="/">Início</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar a seção de Categorias" to="/categories"></S.Link></li>
                    <li><S.Link title="Clique aqui para acessar a seção de Promoções" to="#on-sale">Promoções</S.Link></li>
                    <li><S.Link title="Clique aqui para acessar a seção de Em breve" to="#coming-soon">Em breve</S.Link></li>
                </S.Links>
            </S.FooterSection>
            <S.Copyright>
                {currentYear} - &copy; Todos os direitos reservados - Desenvolvido por
                <a href="https://site-social-six.vercel.app/">Joel Riquelmy</a>
            </S.Copyright>
        </div>
    </S.Container>
)

export default Footer
