import { FC, useState } from "react";
import styles from "./CheckBox.module.scss";
import { classNames } from "../../../utils/classNames";

interface BaseCheckBoxProps {
  disabled?: boolean;
  label?: string;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

interface ICheckBoxProps
  extends BaseCheckBoxProps,
    Omit<MergedHTMLAttributes, "onChange"> {}

const CheckBox: FC<ICheckBoxProps> = ({
  defaultValue = false,
  label = "",
  disabled = false,
  id,
  ...rest
}) => {
  const [checked, setChecked] = useState<boolean>(Boolean(defaultValue));

  const toggleCheckBox = () => {
    setChecked((prev) => !prev);
    console.log(checked);
  };

  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        className={classNames(styles.checkBoxInput, {}, [
          disabled ? styles.checkBoxDisabled : "",
        ])}
        id={id}
        {...rest}
        onChange={toggleCheckBox}
      />
      <div className={styles.checkBoxFake}></div>
      {label && <div className={styles.checkBoxLabel}>{label}</div>}
    </div>
  );
};

export default CheckBox;
