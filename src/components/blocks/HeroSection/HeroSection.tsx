import { FC } from "react";
import styles from "./HeroSection.module.scss";

interface IHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection: FC<IHeroSectionProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.fade} />
      <div className={styles.innerBox}>
        <div className={styles.textBox}>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.descriptionBox}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        <div className={styles.animationBox}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
