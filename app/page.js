import Image from "next/image";
import styles from "./page.module.css";
import { shantell_Sans } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 className={[shantell_Sans.className]}>
          Javier&nbsp;
          <span className={styles.title_position}>Barboza</span>
        </h1>
        <div>
          <ul className={styles.social}>
            <li>
              <a
                className={styles.social_linkedin}
                href="https://www.linkedin.com/in/javier-barboza-mu%C3%B1oz-75ba44120/"
                target="_blank"
              >
                <span className="visually-hidden">
                  Visit my LinkedIn profile
                </span>
              </a>
            </li>
            <li>
              <a
                className={styles.social_github}
                href="https://github.com/javierbarbozam"
                target="_blank"
              >
                <span className="visually-hidden">Visit my GitHub profile</span>
              </a>
            </li>
            <li>
              <a
                className={styles.social_email}
                href="mailto:barboza.javier497@gmail.com"
                target="_blank"
              >
                <span className="visually-hidden">Contact me via email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/smile_slogan.png"
          alt="A happy smile saying a guy eager to code"
          width={380}
          height={0}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>
            About<span></span>
          </h2>
          <p>
            A few words about why I&apos;ve chosen web development as a
            livelihood.
          </p>
        </Link>
        <Link href="/portfolio" className={styles.card}>
          <h2>
            Portfolio<span></span>
          </h2>
          <p>Take a look to some projects I&apos;ve previously worked on.</p>
        </Link>
        <a
          className={styles.card}
          target="_blank"
          href="https://drive.google.com/file/d/1B4ZItmfqgDpLCAcSoCOKKMCqpMoh4Nb3/view?usp=drive_link"
        >
          <h2>
            Resume<span></span>
          </h2>
          <p>Check out my academic and professional highlights.</p>
        </a>
      </div>
    </main>
  );
}
