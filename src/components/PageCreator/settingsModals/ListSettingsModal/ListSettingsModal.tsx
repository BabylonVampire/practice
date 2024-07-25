/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import styles from "./ListSettingsModal.module.scss";
import { Input, Text } from "../../../UI";
import Button from "../../../UI/Button/Button";
import CheckBox from "../../../UI/Input/CheckBox/CheckBox";

interface IListSettingsModalProps {
  createComponent: (type: string, props: any) => void;
}

const ListSettingsModal: FC<IListSettingsModalProps> = ({
  createComponent,
}) => {
  const [width, setWidth] = useState<string>("100px");
  const [title, setTitle] = useState<string>("");
  const [elements, setElements] = useState<string>("");
  const [draggable, setDraggable] = useState<boolean>(false);

  return (
    <div className={styles.ListSettingsModal}>
      <div className={styles.settingsBox}>
        <div className={styles.settingItem}>
          <Text fontSize="small">Ширина: </Text>
          <Input value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Заголовок: </Text>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.settingItem}>
          <Text fontSize="small">Пункты: </Text>
          <textarea
            className={styles.input}
            value={elements}
            onChange={(e) => setElements(e.target.value)}
          />
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
          createComponent("list", {
            styles: { width: width },
            content: elements.split(";"),
            draggable: draggable,
            title: title,
          })
        }
        disabled={!elements || !width || !title}
        size="small"
      >
        Добавить компонент
      </Button>
    </div>
  );
};

export default ListSettingsModal;
