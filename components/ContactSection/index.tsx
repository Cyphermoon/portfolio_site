import React, { useRef, useState } from 'react'
import Input from '../Input'
import SocialMediaDisplay from '../SocialMediaDisplay'
import emailjs from "@emailjs/browser"
import ContactForm from '../ContactForm'

const ContactSection = () => {
    return (
        <section className='space-y-8'>
            <h2>Contact me</h2>
            <div className='w-full lg:max-w-5xl flex flex-col md:flex-row justify-between'>
                <ContactForm />
                <SocialMediaDisplay />
            </div>
        </section>
    )
}

export default ContactSection