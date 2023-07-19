import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import styles from '../page.module.css'

export default function Hair() {
    return (
        <main>
            <Navigation />

            <h1 className={styles.title}>Hair Treatments</h1>

            <div className={styles.treatments}>

            <div className={styles.treatmentBox}>
                <div className={styles.details}>
                    <h2 className={styles.name}>Blowdry</h2>
                    <h4 className={styles.desc}>Bouncy glam hair transform your hair from dull to glam queen hair with a hot brush blowdry.</h4>
                </div>
                <h5 className={styles.price}>£20</h5>
            </div>

            <div className={styles.treatmentBox}>
                <div className={styles.details}>
                    <h2 className={styles.name}>Cut and Blowdry</h2>
                    <h4 className={styles.desc}>Using the beat products on the market finished with a scalp massage and blowdry </h4>
                </div>
                <h5 className={styles.price}>£25</h5>
            </div>

            <div className={styles.treatmentBox}>
                <div className={styles.details}>
                    <h2 className={styles.name}>Toners</h2>
                    <h4 className={styles.desc}>Tone brassy-ness and uneven tones on your hair.</h4>
                </div>
                <h5 className={styles.price}>£15</h5>
            </div>

            <div className={styles.treatmentBox}>
                <div className={styles.details}>
                    <h2 className={styles.name}>Ombre/Balayage</h2>
                    <h4 className={styles.desc}>All stylists are all trained in ombré and balayage.</h4>
                </div>
                <h5 className={styles.price}>From £62.50</h5>
            </div>

            <div className={styles.treatmentBox}>
                <div className={styles.details}>
                    <h2 className={styles.name}>Fullhead Tint</h2>
                    <h4 className={styles.desc}>All colours include cut and blowdry.</h4>
                </div>
                <h5 className={styles.price}>From £52.50</h5>
            </div>

            </div>

            <CTA />

            <Footer />
        </main>
    )
}