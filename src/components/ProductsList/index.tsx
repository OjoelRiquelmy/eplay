/* eslint-disable prettier/prettier */
import Product from "../Product"

import { ProductsListContainer, List } from "./styles"
import Game from "../models/Games"

export type ProductsListProps = {
    title: string
    background: 'gray' | 'black'
    games?: Game[]
}

const Productslist = ({title, background, games}: ProductsListProps) => (
    <ProductsListContainer background={background}>
        <div className="container">
                <h2>{title}</h2>
            <List>
                {games?.map(game => (
                    <Product 
                        key={game.id}
                        category={game.category}
                        description={game.description}
                        images={game.image}
                        title={game.title}
                        system={game.system}
                        infos={game.infos}
                    />
                ))}
            </List>

        </div>
    </ProductsListContainer>
)

export default Productslist