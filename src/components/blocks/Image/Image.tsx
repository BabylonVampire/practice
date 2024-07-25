import { FC } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import style from "./Image.module.scss";

interface IImageProps {
  src: string;
  alt?: string;
  styles?: React.CSSProperties;
  onStop?: DraggableEventHandler;
  draggable: boolean;
}

const Image: FC<IImageProps> = ({ src, alt, styles, onStop, draggable }) => {
  return draggable ? (
    <Draggable onStop={onStop}>
      <img src={src} alt={alt} style={styles} className={style.image} />
    </Draggable>
  ) : (
    <img src={src} alt={alt} style={styles} className={style.image} />
  );
};

export default Image;
