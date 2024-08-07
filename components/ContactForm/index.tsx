import emailjs from "@emailjs/browser"
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { usePromptModal } from '../../hooks/index.util'
import { contactFormPropType } from '../../types'
import Input from '../Input'
import SuccessModal from '../SucessModal'

const ContactForm = ({ addAnimation }: contactFormPropType) => {
    const formRef = useRef<HTMLFormElement>(null)
    const [nameField, setNameField] = useState("")
    const [emailField, setEmailField] = useState("")
    const [messageField, setMessageField] = useState("")

    const { closeModal, openPromptModal, promptModalDisplayed } = usePromptModal()


    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (nameField.trim() || emailField.trim() || messageField.trim()) {
            emailjs.sendForm(process.env["NEXT_PUBLIC_SERVICE_ID"] ?? "", process.env["NEXT_PUBLIC_TEMPLATE_ID"] ?? "", formRef.current ?? "#contactForm", process.env["NEXT_PUBLIC_PUBLIC_KEY"])
                .then((res) => openPromptModal())
                .catch((err) => console.error("Something went wrong, the message is  ", err.message))
        } else {
            console.error("Please fill out the form")
        }

        setNameField("")
        setMessageField("")
        setEmailField("")
    }


    useEffect(() => {
        const projectDisplayAnimation = gsap.from(".contact_form", {
            scrollTrigger: {
                trigger: ".contact_form",
            },
            translateX: -100,
            duration: 1,
            rotate: 10,
            opacity: 0,
        })


        return () => {
            projectDisplayAnimation.revert()
        }
    }, [])

    return (
        <div className='w-full lg:w-1/2'>
            <h5 className='dark:text-slate-400 mb-5 text-center lg:text-left'>Shoot me an e-mail</h5>
            <form ref={formRef} id="contactForm" onSubmit={(e) => sendMessage(e)} className='contact_form w-full mb-12 bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 drop-shadow-lg space-y-8'>
                <Input
                    inputType='text'
                    labelText='Name'
                    inputName='client_name'
                    inputValue={nameField}
                    setInputValue={setNameField}
                />
                <Input
                    inputType='email'
                    labelText='Email'
                    inputName='client_email'
                    inputValue={emailField}
                    setInputValue={setEmailField} />

                <div className='space-y-2'>
                    <label className='text-title_md font-medium text-slate-700 dark:text-slate-400 block'>Message</label>
                    <textarea
                        className='w-full h-36 min-h-max border outline-none focus:border-2  focus:border-slate-500 border-slate-800 text-base py-3 px-4 rounded-lg
                         bg-slate-200 dark:bg-slate-700 resize-none'
                        value={messageField}
                        name="client_message"

                        required={true}
                        onChange={(e) => setMessageField(e.target.value)} />
                </div>

                <button className='w-full relative group px-2 py-4 bg-blue-500 dark:bg-blue-400 rounded-2xl text-gray-100 dark:text-slate-200' type="submit">
                    <span className='w-full block h-full absolute rounded-2xl bg-red-300 top-0 left-0
                    scale-y-1 scale-x-0 group-hover:scale-x-100 origin-left  
                    transition-all duration-150 ease-linear z-0' />
                    <span className='block z-10 relative'>send</span>
                </button>
            </form>

            {promptModalDisplayed &&
                <SuccessModal
                    message='Thanks for reaching out'
                    icon_url='/icons/done.svg'
                    onClose={closeModal} />}
        </div>

    )
}

export default ContactForm