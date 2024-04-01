import Image from "next/image";
import { useState, FocusEvent } from "react";
import styles from "./input.module.css";
import eyeOnImg from "public/images/eye-on.png";
import eyeOffImg from "public/images/eye-off.png";
import { validateEmail, validatePassword } from "@/sharing/util/validation";

export const VALIDATE_TYPE = {
  email: "email",
  password: "password",
};

type InputProps = {
  className?: string;
  validateType?: keyof typeof VALIDATE_TYPE;
  isVisibleToggle?: boolean;
  isValidationCheck?: boolean;
  [key: string]: any;
};

function Input({
  className,
  validateType,
  isVisibleToggle,
  isValidationCheck,
  message,
  ...rest
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!isValidationCheck) return;
    const value = e.target.value;

    switch (validateType) {
      case VALIDATE_TYPE.email:
        if (value === "") {
        }
        setIsError(!validateEmail(value));
        break;
      case VALIDATE_TYPE.password:
        setIsError(!validatePassword(value));
        break;
      default:
        return;
    }
  };

  const handleVisibleToggle = () => {
    setIsVisible((preIsVisible) => !preIsVisible);
  };

  const classNames = `${styles.input} ${className}`;
  return (
    <div>
      <div>
        <input className={classNames} {...rest} onBlur={handleBlur} />
        {isVisibleToggle && (
          <button type="button" onClick={handleVisibleToggle}>
            <Image src={isVisible ? eyeOnImg : eyeOffImg} alt="눈 감음" />
          </button>
        )}
      </div>
      {isError && <p>{message}</p>}
    </div>
  );
}

export default Input;
