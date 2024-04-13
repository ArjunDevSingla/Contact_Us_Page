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

          <form>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"/>
            </div>
            <div style={{
              dispaly: "flex",
              justifyContent: "end",
            }}>
              <Button isOutline={false} text="SUBMIT" />
            </div>
          </form>
        </div>

        <div className={`${styles.contact_image}`}>
            <img src="/images/contact.svg" alt="Contact Image" />
        </div>
    </section>
  )
}

export default ContactForm