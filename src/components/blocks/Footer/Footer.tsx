import React, { FC, memo } from "react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import styles from "./Footer.module.scss";

interface IFooterProps {
  links: {
    tgLink: string;
    vkLink: string;
    ytLink: string;
  };
  contacts: {
    phone: string;
    email: string;
  };
}

const Footer: FC<IFooterProps> = memo(({ links, contacts }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.mainBox}>
          <ul className={styles.contactsCol}>
            <div className={styles.colHeading}>Контакты</div>
            <div className={styles.divider} />

            <li
              className={styles.contact}
              key={`footerPhone_${contacts.phone}`}
            >
              {contacts.phone}
            </li>

            <li
              className={styles.contact}
              key={`footerEmail_${contacts.email}`}
            >
              {contacts.email}
            </li>
          </ul>
          <div className={styles.linksCol}>
            <div className={styles.colHeading}>Наши соцсети</div>
            <div className={styles.divider} />
            <div className={styles.linkContainer}>
              {links.tgLink && (
                <a className={styles.outLink} href={links.tgLink}>
                  <FaTelegram />
                </a>
              )}
              {links.vkLink && (
                <a className={styles.outLink} href={links.vkLink}>
                  <FaYoutube />
                </a>
              )}
              {links.ytLink && (
                <a className={styles.outLink} href={links.ytLink}>
                  <SlSocialVkontakte />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Сделано в рамках практической работы</p>
      </div>
    </footer>
  );
});

export default Footer;
