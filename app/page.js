import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.content}>

          <div className={styles.banner}>
            <Image 
              src="/home-banner.svg"
              width="0"
              height="0"
              sizes="100vw"
              alt="Testimonial banner"
              className={styles.bannerImage}
            />
          </div>

          <div className={styles.meetTheTeam}>
            <h1 className={styles.title}>Meet Our Team</h1>

            <div className={styles.boxRow}>
            <div className={styles.mttBox}>
                <Image 
                  src="/mtt-1.png"
                  width={100}
                  height={100}
                  alt="Meet the team member one"
                />
                <h3>Sarah Wildflower</h3>
                <h5>Owner</h5>
              </div>
              <div className={styles.mttBox}>
                <Image 
                  src="/mtt-2.png"
                  width={100}
                  height={100}
                  alt="Meet the team member two"
                />
                <h3>Laura Granger</h3>
                <h5>Senier Stylist</h5>
              </div>
              <div className={styles.mttBox}>
                <Image 
                  src="/mtt-3.png"
                  width={100}
                  height={100}
                  alt="Meet the team member three"
                />
                <h3>Jason Landon</h3>
                <h5>Senior Stylist</h5>
              </div>
            </div>
          </div>

        </div>
    </main>
  )
}
