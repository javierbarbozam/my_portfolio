import styles from "./portfolio.module.css";
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
        <ul className={styles.center_list}>
          <li className={styles.center_list_item}>
            <h2 className={shantell_Sans.className}>Traveling</h2>
            <p>
              Led a team of 5-member in creating a booking website with API
              integration. Responsible for the code reviews for the project.
            </p>
            <div>
              <span>Technologies:</span>
              <ul className={styles.center_list_item_tech}>
                <li>JavaScript</li>
                <li>SCSS</li>
              </ul>
            </div>
            <ul className={styles.center_list_item_link}>
              <li>
                <a
                  target="_blank"
                  href="https://javierbarbozam.github.io/proyecto1-final/index.html"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbarbozam/proyecto1-final"
                >
                  Code
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.center_list_item}>
            <h2 className={shantell_Sans.className}>Node.js App</h2>
            <p>
              Developed a CRUD application and learned jQuery, as it is still
              utilized in some projects.
            </p>
            <div>
              <span>Technologies:</span>
              <ul className={styles.center_list_item_tech}>
                <li>JQuery</li>
                <li>MondoDB</li>
                <li>Node.js</li>
              </ul>
            </div>
            <ul className={styles.center_list_item_link}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbarbozam/node-final-project"
                >
                  Code
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.center_list_item}>
            <h2 className={shantell_Sans.className}>Cortez Amarillo</h2>
            <p>
              Led a 4-member team to create a book pre-sale website in two
              weeks. Currently integrating Next.js, Chakra UI, and utilizing
              ONVO as payment platform.
            </p>
            <div>
              <span>Technologies:</span>
              <ul className={styles.center_list_item_tech}>
                <li>Next.js</li>
                <li>React</li>
                <li>Chakra UI</li>
                <li>ONVO</li>
              </ul>
            </div>
            <ul className={styles.center_list_item_link}>
              <li>
                <a target="_blank" href="https://cortezamarillo-cr.com/">
                  Website
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbarbozam/cortez-with-next"
                >
                  Code
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}
