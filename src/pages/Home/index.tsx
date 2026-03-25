
import Banner from "../../components/Banner"
import Productslist from "../../components/ProductsList"

import { useGetOnSaleQuery, useGetSoonQuery  }  from '../../services/api'



const Home = () => {
    const {data: onSale, isLoading: isLoadingSale} = useGetOnSaleQuery()
    const {data: soonGames, isLoading: isLoadingSoon} = useGetSoonQuery()

        return (
            <>
                <Banner />
                <Productslist id="on-sale"
                title="Jogos em Destaque"
                background="gray"
                games={onSale}
                isLoading={isLoadingSale}
                />
                <Productslist id="coming-soon"
                title="Em breve"
                background="black"
                games={soonGames}
                isLoading={isLoadingSoon}
                />
            </>
        )

}

export default Home
