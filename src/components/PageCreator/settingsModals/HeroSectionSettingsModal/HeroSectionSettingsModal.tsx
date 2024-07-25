/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import styles from "./HeroSectionSettingsModal.module.scss";
import { Input, Text } from "../../../UI";
import Button from "../../../UI/Button/Button";

interface IHeroSectionSettingsModalProps {
  createComponent: (type: string, props: any) => void;
}

const HeroSectionSettingsModal: FC<IHeroSectionSettingsModalProps> = ({
  createComponent,
}) => {
  const [src, setSrc] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className={styles.HeroSectionSettingsModal}>
      <div className={styles.settingsBox}>
        <div className={styles.settingItem}>
          <Text fontSize="small">Изображение: </Text>
          <Input value={src} onChange={(e) => setSrc(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Заголовок: </Text>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Описание: </Text>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <Button
        onClick={() =>
          createComponent("heroSection", {
            content: [src],
            title: title,
            description: description,
          })
        }
        disabled={!title}
        size="small"
      >
        Добавить компонент
      </Button>
    </div>
  );
};

export default HeroSectionSettingsModal;
