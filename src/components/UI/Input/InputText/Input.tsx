import { FC } from "react";
import styles from "./Input.module.scss";
import { classNames } from "../../../utils/classNames";

type inputVariants = "default";
type inputStatuses = "default" | "error" | "warning" | "success";

interface BaseInputProps {
  variant?: inputVariants;
  status?: inputStatuses;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

interface IInputProps
  extends BaseInputProps,
    Omit<MergedHTMLAttributes, "onChange"> {}

export const Input: FC<IInputProps> = ({
  variant = "default",
  status = "default",
  disabled = false,
  required = false,
  label = "",
  className,
  ...rest
}) => {
  const variants: Record<inputVariants, string> = {
    default: styles.variantDefault,
  };

  const statuses: Record<inputStatuses, string> = {
    default: styles.statusDefault,
    error: styles.statusError,
    warning: styles.statusWarning,
    success: styles.statusSuccess,
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [variants[variant]])}>
      <input
        className={classNames(styles.input, {}, [
          required ? styles.inputRequired : "",
          disabled ? styles.inputDisabled : "",
          statuses[status],
          className || "",
        ])}
        {...rest}
      />
      {(label || required) && (
        <p className={classNames(styles.inputLabel, {}, [])}>
          {required && <span className={styles.requiredDot}>*</span>}
          {label}
        </p>
      )}
    </div>
  );
};
