import styles from "./about.module.css";
import { shantell_Sans } from "../fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
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
        <div>
          <h2 className={shantell_Sans.className}>Glued to the chair</h2>
          <p>
            Like everyone else, I was seeking something enjoyable in my daily
            pursuits. CETAV provided that 'something' I was looking for. Since
            joining their Front End technical degree program, I've worked on
            projects that have uncovered my passion for coding
          </p>
          <p>
            One thing I love is the variety of ways to achieve the same result.
            It keeps me feeling challenged, free, creative, and enthusiastic,
            especially because each day brings new knowledge to handle tasks.
          </p>
          <p>
            With a background in graphic design, I've turned my experience into
            a valuable tool, understanding that coding isn't just about making
            it work but also about creating clean, readable, and visually
            appealing solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
