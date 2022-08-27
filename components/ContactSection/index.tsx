import React from 'react'
import Input from '../Input'

const ContactSection = () => {
    return (
        <section className='space-y-8'>
            <h2>Contact me</h2>
            <div className='flex flex-col'>
                <form className='w-full max-w-md bg-slate-100 rounded-2xl p-4 drop-shadow-lg space-y-8'>
                    <Input inputType='text' labelText='Name' />
                    <Input inputType='email' labelText='Email' />

                    <div className='space-y-2'>
                        <label className='text-title_md font-medium text-slate-700 block'>Message</label>
                        <textarea className='w-full h-36 min-h-max border outline-none focus:border-2  focus:border-slate-500 border-slate-800 text-base py-3 px-4 rounded-lg bg-slate-200' ></textarea>
                    </div>

                    <button className='w-full px-2 py-4 bg-blue-400 rounded-2xl text-gray-100' type="submit">Send</button>
                </form>
                <div></div>
            </div>
        </section>
    )
}

export default ContactSection