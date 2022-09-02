import React, { useRef, useState } from 'react'
import SocialMediaDisplay from '../SocialMediaDisplay'
import ContactForm from '../ContactForm'

const ContactSection = () => {
    return (
        <section className='space-y-8' id='contact_section'>
            <h2>Contact me</h2>
            <div className='w-full lg:max-w-5xl flex flex-col md:flex-row justify-between'>
                <ContactForm />
                <SocialMediaDisplay />

            </div>
        </section>
    )
}

export default ContactSection