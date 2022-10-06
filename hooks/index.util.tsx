import { MouseEvent, useState } from "react"
import gsap from 'gsap'

export const usePromptModal = () => {
    const [promptModalDisplayed, setPromptModal] = useState(false)

    const closeModal = () => {
        setPromptModal(false)
    }

    const openPromptModal = () => {
        setPromptModal(true)
    }

    return { closeModal, openPromptModal, promptModalDisplayed }
}

export const useTiltEffect = () => {
    const tiltCard = (e: MouseEvent<HTMLDivElement>) => {

        const multiplier = 25

        let cardWidth = e.currentTarget.offsetWidth
        let cardHeight = e.currentTarget.offsetHeight

        const X = e.nativeEvent.offsetX
        const Y = e.nativeEvent.offsetY

        let mouseX = X - (cardWidth / 2)
        let mouseY = Y - (cardHeight / 2)


        let yRotate = ((mouseX / (cardWidth / 2))) * multiplier
        let xRotate = ((mouseY / (cardHeight / 2))) * -multiplier;



        gsap.to(e.currentTarget, {
            rotateX: xRotate,
            rotateY: yRotate,
        })
    }


    const removeTiltEffect = (e: MouseEvent) => {

        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
        })
    }

    return { tiltCard, removeTiltEffect }
}