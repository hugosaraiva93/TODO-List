import styles from './Header.module.css';

import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logotipo do Rocket" />
            <p>To<span>do</span></p>
        </header>
    )
}