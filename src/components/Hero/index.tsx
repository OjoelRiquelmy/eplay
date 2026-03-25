import { useDispatch } from 'react-redux';
import * as S from './styles'
import { add, open } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils';
import Button from '../Button'

import Tag from '../Tag'

type Props = {
    game: Game
}

    const Hero = ({game} : Props) => {
        const dispatch = useDispatch()

        const addToCart = () => {
            dispatch(add(game))
            dispatch(open())
        }

        return (
        <S.BannerHero style={{ backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>

                <S.Infos>
                    <h2>{game.name}</h2>
                    <p>
                        {game.prices.discount && (
                            <span>De {parseToBrl(game?.prices.old)}</span>
                        )}

                        {game.prices.current && (

                            <> por apenas {parseToBrl(game?.prices.current)} </>
                        )}
                    </p>
                        {game.prices.current && (
                            <Button onClick={addToCart} variante='primary' type={'button'} title={'adicione ao carrinho'}>
                                Adicione ao carrinho
                            </Button>

                        )}

                </S.Infos>
            </div>
        </S.BannerHero>
    )

    }
export default Hero
