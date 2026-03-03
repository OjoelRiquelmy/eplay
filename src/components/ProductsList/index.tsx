
import { Container, List, Title } from "./styles"
import { Game } from "../../pages/Home"

import Product from "../Product"

export type ProductsListProps = {
    title: string
    background: 'gray' | 'black'
    games?: Game[]
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const Productslist = ({title, background, games}: ProductsListProps) => {
    
    const getGameTags = (game:Game) =>{
        const tags = [];

        if (game.release_date) {
            tags.push(game.release_date)
        }

        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`)
        }

        if (game.prices.current) {
            tags.push(formataPreco(game.prices.current))
        }

        return tags
    }

    return (
        <Container background={background}>
            <div className="container">
                    <Title>{title}</Title>
                <List>
                    {games?.map((game) => (
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
                </List>

            </div>
        </Container>
    )
}

export default Productslist