
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    const video = document.getElementById('bgVideo')
    let reverse = false

    const handleLoop = () => {
      reverse = !reverse
      video.playbackRate = reverse ? -0.8 : 0.8
      video.currentTime = reverse ? video.duration - 0.01 : 0.01
      video.play()
    }

    video.addEventListener('ended', handleLoop)

    return () => {
      video.removeEventListener('ended', handleLoop)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Sahâr Beauty Lounge</title>
        <meta name="description" content="Luxe & élégance à Sousse - Onglerie haut de gamme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <video
          id="bgVideo"
          autoPlay
          muted
          playsInline
          className={styles.video}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Sahâr Beauty Lounge</h1>
          <p className={styles.subtitle}>Élégance. Précision. Raffinement.</p>
          <a href="#services" className={styles.button}>Découvrir nos prestations</a>
        </div>
      </div>

      <section id="services" className={styles.section}>
        <h2>Nos Prestations</h2>
        <div className={styles.grid}>
          <div className={styles.card}><h3>Nail Art</h3><p>Strass, marbre, dessins à la main.</p></div>
          <div className={styles.card}><h3>Gel Permanent</h3><p>Finition brillante ou matte, tenue parfaite.</p></div>
          <div className={styles.card}><h3>Pose Chablon</h3><p>Sans capsule, effet naturel sur mesure.</p></div>
          <div className={styles.card}><h3>Pack Signature</h3><p>Chablon + gel + déco minimal chic. -15%</p></div>
        </div>
      </section>

      <section id="gallery" className={styles.section}>
        <h2>Galerie</h2>
        <div className={styles.grid}>
          <img src="/gallery1.jpg" alt="Pose 1" className={styles.galleryImg} />
          <img src="/gallery2.jpg" alt="Pose 2" className={styles.galleryImg} />
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xyyylobk" method="POST" className={styles.form}>
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Votre message..." required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>

      <footer className={styles.footer}>
        Rue de la poste, Khezema, Sousse – Mardi à Dimanche 10h–20h<br/>
        Instagram | TikTok | Facebook
      </footer>
    </div>
  )
}
