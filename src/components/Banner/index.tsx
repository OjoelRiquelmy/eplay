/* eslint-disable prettier/prettier */
import { BannerContainer, Titulo, Preco } from './styles'

import bannerImage from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag';
import Button from '../Button';

const Banner = () => (
    <BannerContainer style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className='container'>
            <Tag size="big">Destaque do dia</Tag>
            <div>
                <Titulo>Marvel&apos;s Spirder-Man: Miles Morales PS4 & PS5</Titulo>
                <Preco>
                    De <span>R$ 250,00</span><br />
                    por apenas R$ 99,90
                </Preco>
            </div>
            <Button type="link" title="Comprar agora" to="/produtos/1">
                Comprar agora
            </Button>
        </div>
    </BannerContainer>
)

export default Banner;