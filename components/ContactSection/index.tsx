import { contactSectionType } from '../../types'
import ContactForm from '../ContactForm'
import SocialMediaDisplay from '../SocialMediaDisplay'

const ContactSection = ({ social_medias, addAnimation }: contactSectionType) => {
    const sectionHeight = '800px'
    return (
        <section className={`space-y-8 lg:h-[${sectionHeight}]`} id='contact_section'>
            <h2 className='dark:text-slate-300 text-center mb-10'>Contact me</h2>
            <div className='w-full flex flex-col md:flex-row items-start justify-between '>
                <ContactForm addAnimation={addAnimation} />
                <div className={`w-0.5 rounded-xl lg:h-[${sectionHeight}] bg-slate-700 dark:bg-slate-700 hidden lg:block mx-20`} />
                <SocialMediaDisplay addAnimation={addAnimation} social_medias={social_medias} />
            </div>
        </section>
    )
}

export default ContactSection