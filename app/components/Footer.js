import styles from '../page.module.css'
import Image from 'next/image'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <Image 
                src="./secondaryLogo.svg"
                width={50}
                height={50}
                alt="An alternative logo HH"
            />
        </div>
    )
}