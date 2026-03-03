import { useDispatch } from 'react-redux';
import { BannerHero, Infos } from './styles'
import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart';
import Button from '../Button'
import { formataPreco } from '../ProductsList';
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
        <BannerHero style={{ backgroundImage: `url(${game.media.cover})`}}>
            <div className="container">
                <div>
                    <Tag>{game.details.category}</Tag>
                    <Tag>{game.details.system}</Tag>
                </div>

                <Infos>
                    <h2>{game.name}</h2>
                    <p>
                        {game.prices.discount && (
                            <span>De {formataPreco(game?.prices.old)}</span>
                        )}
                        
                        {game.prices.current && (
                            
                            <> por apenas {formataPreco(game?.prices.current)} </>
                        )}
                    </p>
                        {game.prices.current && (
                            <Button onClick={addToCart} variante='primary' type={'button'} title={'adicione ao carrinho'}>
                                Adicione ao carrinho
                            </Button>
                            
                        )}
                    
                </Infos>
            </div>
        </BannerHero>
    )

    }
export default Hero