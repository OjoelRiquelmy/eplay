
import { BannerContainer, Titulo, Preco } from './styles'

import { useGetFeatureGameQuery } from '../../services/api'
import Button from '../Button';
import { formataPreco } from '../ProductsList';
import Tag from '../Tag';


const Banner = () => {
    const { data: game, isLoading } = useGetFeatureGameQuery()



    if (!game) {
        return <h3>Caregando...</h3>
    }
    
    return (
        <BannerContainer style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className='container'>
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>{game.name}</Titulo>
                    <Preco>
                        De <span>{formataPreco(game?.prices.old)}</span><br />
                        por apenas {formataPreco(game?.prices.current)}
                    </Preco>
                </div>
                <Button type="link" title="Comprar agora" to={`/product/${game.id}`}>
                    Comprar agora
                </Button>
            </div>
        </BannerContainer>
    )
}

export default Banner;