import styles from '../page.module.css'

export default function Treatment() {
    return (
        <main classname={styles.box}>
            <div className={styles.details}>
                <h1 className={styles.name}>Name</h1>
                <h4 className={styles.desc}>Desc</h4>
            </div>
            <h2 className={styles.price}>Price</h2>
        </main>
    )
}