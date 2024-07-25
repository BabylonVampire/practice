/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import styles from "./ImageSettingsModal.module.scss";
import { Input, Text } from "../../../UI";
import Button from "../../../UI/Button/Button";
import CheckBox from "../../../UI/Input/CheckBox/CheckBox";

interface IImageSettingsModalProps {
  createComponent: (type: string, props: any) => void;
}

const ImageSettingsModal: FC<IImageSettingsModalProps> = ({
  createComponent,
}) => {
  const [width, setWidth] = useState<string>("100px");
  const [src, setSrc] = useState<string>("");
  const [draggable, setDraggable] = useState<boolean>(false);

  return (
    <div className={styles.ImageSettingsModal}>
      <div className={styles.settingsBox}>
        <div className={styles.settingItem}>
          <Text fontSize="small">Ширина: </Text>
          <Input value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Источник: </Text>
          <Input value={src} onChange={(e) => setSrc(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Draggable: </Text>
          <CheckBox
            checked={draggable}
            onClick={() => setDraggable((prev) => !prev)}
          />
        </div>
      </div>
      <Button
        onClick={() =>
          createComponent("image", {
            styles: { width: width },
            content: [src],
            draggable: draggable,
          })
        }
        disabled={!src || !width}
        size="small"
      >
        Добавить компонент
      </Button>
    </div>
  );
};

export default ImageSettingsModal;
