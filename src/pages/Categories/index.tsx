
import Productslist from "../../components/ProductsList"

import { useGetActionQuery,
    useGetEsportesQuery,
    useGetRPGQuery,
    useGetSimulacaoQuery,
    useGetLutaQuery} from '../../services/api'

const Categories = () => {
    const { data: action, isLoading: isLoadingAction } = useGetActionQuery()
    const { data: RPG, isLoading: isLoadingRPG } = useGetRPGQuery()
    const { data: esportes, isLoading: isLoadingEsportes  } = useGetEsportesQuery()
    const { data: simulacao, isLoading: isLoadingSimulacao } = useGetSimulacaoQuery()
    const { data: luta, isLoading: isLoadingLuta } = useGetLutaQuery()

        return (
            <>
                <Productslist id="action"
                title="Ação"
                background="black"
                games={action}
                isLoading={isLoadingAction}
                />
                <Productslist id="rpg"
                title="RPG"
                background="gray"
                games={RPG}
                isLoading={isLoadingRPG}
                />
                <Productslist id="sportes"
                title="Esportes"
                background="black"
                games={esportes}
                isLoading={isLoadingEsportes}
                />
                <Productslist id="simulation"
                title="Simulação" background="gray"
                games={simulacao}
                isLoading={isLoadingSimulacao}
                />
                <Productslist id="fight"
                title="Luta" background="black"
                games={luta}
                isLoading={isLoadingLuta}
                />
            </>
        )
    }

export default Categories
