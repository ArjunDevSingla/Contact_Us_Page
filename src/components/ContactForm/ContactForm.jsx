import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
            <Button isOutline={false} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button isOutline={false} text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
          </div>
          <Button 
            isOutline={true} 
            text="VIA EMAIL FORM" 
            icon={<HiMail fontSize="24px" />}
          />
        </div>

        <div className={`${styles.contact_image}`}>

        </div>
    </section>
  )
}

export default ContactForm