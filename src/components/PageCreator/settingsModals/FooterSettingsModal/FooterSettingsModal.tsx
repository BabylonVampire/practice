/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import styles from "./FooterSettingsModal.module.scss";
import { Input, Text } from "../../../UI";
import Button from "../../../UI/Button/Button";

interface IFooterSettingsModalProps {
  createComponent: (type: string, props: any) => void;
}

const FooterSettingsModal: FC<IFooterSettingsModalProps> = ({
  createComponent,
}) => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [vk, setVk] = useState<string>("");
  const [tg, setTg] = useState<string>("");
  const [yt, setYt] = useState<string>("");

  return (
    <div className={styles.FooterSettingsModal}>
      <div className={styles.settingsBox}>
        <div className={styles.settingItem}>
          <Text fontSize="small">Телефон: </Text>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">E-Mail: </Text>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Telegram: </Text>
          <Input value={tg} onChange={(e) => setTg(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">YouTube: </Text>
          <Input value={yt} onChange={(e) => setYt(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">VK: </Text>
          <Input value={vk} onChange={(e) => setVk(e.target.value)} />
        </div>
      </div>
      <Button
        onClick={() =>
          createComponent("list", {
            content: [],
            links: {
              tgLink: tg,
              vkLink: vk,
              ytLink: yt,
            },
            contacts: {
              phone: phone,
              email: email,
            },
          })
        }
        size="small"
      >
        Добавить компонент
      </Button>
    </div>
  );
};

export default FooterSettingsModal;
