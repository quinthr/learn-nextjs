import styles from "./button.module.css";

import { FC } from "react";

interface Button {
  variant: string;
}

const Button = ({ variant }: Button) => {
  return <div className={styles.button}>Button</div>;
};

export default Button;
