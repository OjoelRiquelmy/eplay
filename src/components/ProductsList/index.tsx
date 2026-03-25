
import * as S from "./styles"

import { parseToBrl } from "../../utils"
import Loader from "../Loader"
import Product from "../Product"

export type ProductsListProps = {
    title: string
    background: 'gray' | 'black'
    games?: Game[]
    id?: string
    isLoading: boolean
}

const Productslist = ({title, background, games, id, isLoading}: ProductsListProps) => {

    const getGameTags = (game:Game) =>{
        const tags = [];

        if (game.release_date) {
            tags.push(game.release_date)
        }

        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`)
        }

        if (game.prices.current) {
            tags.push(parseToBrl(game.prices.current))
        }

        return tags
    }

    if (isLoading) {
      return <Loader />
    }

    return (
        <S.Container id={id} background={background}>
            <div className="container">
                    <S.Title>{title}</S.Title>
                <S.List>
                    {games &&
                      games.map((game) => (
                        <li key={game.id}>
                            <Product
                                category={game.details.category}
                                description={game.description}
                                images={game.media.thumbnail}
                                title={game.name}
                                system={game.details.system}
                                infos={getGameTags(game)}
                                id={game.id}
                                />
                        </li>

                    ))}
                </S.List>

            </div>
        </S.Container>
    )
}

export default Productslist
