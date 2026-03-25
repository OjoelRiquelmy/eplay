
import * as S from './styles'

import { useGetFeatureGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils';
import Button from '../Button';


import Loader from '../Loader';
import Tag from '../Tag';


const Banner = () => {
    const { data: game } = useGetFeatureGameQuery()



    if (!game) {
        return <Loader />
    }

    return (
        <S.BannerContainer style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className='container'>
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <S.Title>{game.name}</S.Title>
                    <S.Title>
                        De <span>{parseToBrl(game?.prices.old)}</span><br />
                        por apenas {parseToBrl(game?.prices.current)}
                    </S.Title>
                </div>
                <Button type="link" title="Comprar agora" to={`/product/${game.id}`}>
                    Comprar agora
                </Button>
            </div>
        </S.BannerContainer>
    )
}

export default Banner;
