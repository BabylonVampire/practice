import { FC } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import styles from "./List.module.scss";
import { Text } from "../../UI";

interface IListProps {
  content: string[];
  title: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  onStop?: DraggableEventHandler;
}

const ListComponent: FC<IListProps> = ({ content, style, title }) => {
  return (
    <ul className={styles.list} style={style}>
      <Text fontSize="medium" underline>
        {title}
      </Text>
      {content.map((el, i) => (
        <li key={el + i} className={styles.listItem}>
          {el}
        </li>
      ))}
    </ul>
  );
};

const List: FC<IListProps> = ({ content, draggable, onStop, style, title }) => {
  return draggable ? (
    <Draggable onStop={onStop}>
      <ListComponent content={content} style={style} title={title} />
    </Draggable>
  ) : (
    <ListComponent content={content} style={style} title={title} />
  );
};

export default List;
