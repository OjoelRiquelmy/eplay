/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import close from '../../assets/images/fechar.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import { GalleryItem } from '../../pages/Home'
import Section from "../Section";



type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalState extends GalleryItem {
    isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    })
    

    
    const getMediaCover = (item:GalleryItem) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item:GalleryItem) => {
        if (item.type === 'image') return zoom
        return play
    }

    const closeModal = ()  => {

        setModal({
                isVisible: false,
                type: 'image',
                url: ''
            })
    }

    return (
        <>
            <Section title={'Galeria'} background={'black'}>
                    <Items>
                        {items.map((media, index) => (
                            <Item key={media.url} onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type:  media.type,
                                    url: media.url
                                })
                            }}>
                            <img src={getMediaCover(media)} alt={`Media ${index + 1} de ${name}`} />
                                <Action>
                                    <img src={getMediaIcon(media)} alt="Clique para a mídia" />
                                </Action>
                            </Item>
                        ))}
                        
                    </Items>
                </Section>
            <Modal className ={modal.isVisible ? 'visible' : ''}>
                <ModalContent className='container'>
                    <header>
                        <h4>{name}</h4>
                        <img 
                            src={close} alt="ícone de fechar"
                            onClick={() => {
                                closeModal()
                            }} 
                        />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} alt="" />
                    ): (
                        <iframe frameBorder={0} src={modal.url} />
                    )}
                
                    
                </ModalContent>
                <div className='overlay' 
                    onClick={() => {
                            closeModal()
                        }} >
                </div>
            </Modal>
        </>
    )
}

export default Gallery