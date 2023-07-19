import styles from '../page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
    return (
    <main className={styles.navigation}>
        <div className={styles.topBar}>
            01234 567890
        </div>

        <div className={styles.logo}>
            <Image 
                src="/logo.svg"
                width={500}
                height={150}
                alt="H Hair & Beauty logo"
            />
        </div>

        <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/hair">Hair</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/beauty">Beauty</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/find-us">Find Us</Link>
                </li>
            </ul>
        </nav>
    </main>
    )
}