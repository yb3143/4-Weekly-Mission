import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import { MouseEventHandler } from "react";
const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <img src="/images/add.svg" className={cx("icon")} alt="A" />
    </button>
  );
};
