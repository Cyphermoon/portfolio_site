import { useState } from "react"

export const usePromptModal = () => {
    const [promptModalDisplayed, setPromptModal] = useState(true)

    const closeModal = () => {
        setPromptModal(false)
    }

    const openPromptModal = () => {
        setPromptModal(true)
    }

    return { closeModal, openPromptModal, promptModalDisplayed }
}