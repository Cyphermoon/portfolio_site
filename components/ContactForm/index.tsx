import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import Input from '../Input'

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [nameField, setNameField] = useState("")
    const [emailField, setEmailField] = useState("")
    const [messageField, setMessageField] = useState("")

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (nameField || emailField || messageField) {
            emailjs.sendForm(process.env["NEXT_PUBLIC_SERVICE_ID"] ?? "", process.env["NEXT_PUBLIC_TEMPLATE_ID"] ?? "", formRef.current ?? "#contactForm", process.env["NEXT_PUBLIC_PUBLIC_KEY"])
                .then((res) => console.log(res.text))
                .catch((err) => console.error("Something went wrong, the message is  ", err.message))

        }

    }
    return (
        <form ref={formRef} id="contactForm" onSubmit={(e) => sendMessage(e)} className='w-full md:w-9/12 mb-12 md:mb-auto lg:max-w-md bg-slate-100 rounded-2xl p-4 drop-shadow-lg space-y-8'>
            <Input
                inputType='text'
                labelText='Name'
                inputValue={nameField}
                setInputValue={setNameField}
            />
            <Input
                inputType='email'
                labelText='Email'
                inputValue={emailField}
                setInputValue={setEmailField} />

            <div className='space-y-2'>
                <label className='text-title_md font-medium text-slate-700 block'>Message</label>
                <textarea
                    className='w-full h-36 min-h-max border outline-none focus:border-2  focus:border-slate-500 border-slate-800 text-base py-3 px-4 rounded-lg bg-slate-200'
                    value={messageField}
                    required={true}
                    onChange={(e) => setMessageField(e.target.value)} ></textarea>
            </div>

            <button className='w-full px-2 py-4 bg-blue-500 rounded-2xl text-gray-100' type="submit">Send</button>
        </form>
    )
}

export default ContactForm