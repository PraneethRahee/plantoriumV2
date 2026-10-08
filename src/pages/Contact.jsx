import ContactHero from '../components/ContactHero/ContactHero'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="contact-body">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}
