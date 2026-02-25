class Game {
    category: string
    description: string
    image: string
    infos: string[]
    system: string
    title: string
    id: number

    constructor(id: number, 
        title: string, description: string, 
        category: string, system: string, 
        image: string, infos: string[]) {

            this.id = id
            this.title = title
            this.description = description
            this.category = category
            this.system = system
            this.image = image
            this.infos = infos
    }
}

export default Game