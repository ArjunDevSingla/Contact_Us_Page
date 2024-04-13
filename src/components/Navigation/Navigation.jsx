import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo.png" alt="Company-logo" />
        </div>

        <ul>
            <li link="#">Home</li>
            <li link="#">About</li>
            <li link="#">Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation