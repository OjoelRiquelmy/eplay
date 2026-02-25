/* eslint-disable prettier/prettier */
import Productslist from "../../components/ProductsList"

const promocoes = [
    {
        id: 1,
        title: 'The Last of Us Part II',
        description: 'The Last of Us Part II é um jogo de ação e aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. O jogo é a sequência de The Last of Us, lançado em 2013, e foi lançado para PlayStation 4 em junho de 2020.',
        category: 'Ação e Aventura',
        system: 'PlayStation 4',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/870780/capsule_616x353.jpg?t=1594938637',
        infos: ['Single-player', '-10%', 'R$ 179,99']
    },
    {
        id: 2,
        title: 'Cyberpunk 2077',
        description: 'Cyberpunk 2077 é um jogo de RPG de ação desenvolvido pela CD Projekt Red e publicado pela CD Projekt. O jogo se passa em um mundo aberto futurista chamado Night City, onde os jogadores assumem o papel de V, um mercenário que pode ser personalizado com uma variedade de habilidades e equipamentos.',
        category: 'RPG de Ação',
        system: 'PC, PlayStation 4, Xbox One',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '-20%', 'R$ 249,99']
    },
    {
        id: 3,
        title: 'Red Dead Redemption 2',
        description: 'Red Dead Redemption 2 é um jogo de ação e aventura desenvolvido pela Rockstar Games e publicado pela Rockstar Games. O jogo se passa em um mundo aberto no Velho Oeste americano, onde os jogadores assumem o papel de Arthur Morgan, um fora da lei que luta para sobreviver em um mundo em mudança.',
        category: 'Ação e Aventura',
        system: 'PC, PlayStation 4, Xbox One',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '-30%', 'R$ 149,99']
    },
    {
        id: 4,
        title: 'Assassin\'s Creed Valhalla',
        description: 'Assassin\'s Creed Valhalla é um jogo de ação e aventura desenvolvido pela Ubisoft Montreal e publicado pela Ubisoft. O jogo se passa na Era Viking, onde os jogadores assumem o papel de Eivor, um guerreiro viking que lidera seu clã em uma invasão à Inglaterra.',
        category: 'Ação e Aventura',
        system: 'PC, PlayStation 4, Xbox One',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1222140/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '-25%', 'R$ 199,99']
    }
]

const proximosLancamentos = [
    {
        id: 5,
        title: 'Elden Ring',
        description: 'Elden Ring é um jogo de RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O jogo se passa em um mundo aberto chamado The Lands Between, onde os jogadores assumem o papel de um personagem conhecido como "Tarnished" que busca se tornar o Elden Lord.',
        category: 'RPG de Ação',
        system: 'PC, PlayStation 4, Xbox One',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '25/02/2027']
    },
    {
        id: 6,
        title: 'Horizon Forbidden West',
        description: 'Horizon Forbidden West é um jogo de ação e aventura desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. O jogo se passa em um mundo pós-apocalíptico onde os jogadores assumem o papel de Aloy, uma caçadora que explora as terras proibidas para descobrir a verdade sobre seu passado e salvar a humanidade.',
        category: 'Ação e Aventura',
        system: 'PlayStation 4, PlayStation 5',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '15/12/2026']
    },
    {
        id: 7,
        title: 'God of War: Ragnarok',
        description: 'God of War: Ragnarok é um jogo de ação e aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. O jogo é a sequência de God of War, lançado em 2018, e se passa na mitologia nórdica, onde os jogadores assumem o papel de Kratos e seu filho Atreus enquanto enfrentam os deuses do Ragnarok.',
        category: 'Ação e Aventura',
        system: 'PlayStation 4, PlayStation 5',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '15/02/2027']
    },
    {
        id: 8,
        title: 'Starfield',
        description: 'Starfield é um jogo de RPG de ação desenvolvido pela Bethesda Game Studios e publicado pela Bethesda Softworks. O jogo se passa em um universo de ficção científica, onde os jogadores assumem o papel de um explorador espacial que viaja por diferentes planetas e sistemas estelares para descobrir segredos e enfrentar desafios.',
        category: 'RPG de Ação',
        system: 'PC, Xbox Series X/S',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1638480000',
        infos: ['Single-player', '11/11/2026']
    }
]

const Categories = () => (
    <>
        <Productslist title="Ação" background="black" games={promocoes} />
        <Productslist title="RPG" background="gray" games={proximosLancamentos} />
        <Productslist title="Esportes" background="black" games={promocoes} />
        <Productslist title="Aventura" background="gray" games={proximosLancamentos} />
        <Productslist title="FPS" background="black" games={promocoes} />
        <Productslist title="Simulação" background="gray" games={proximosLancamentos} />
        <Productslist title="Estratégia" background="black" games={promocoes} />
    </>
)

export default Categories
