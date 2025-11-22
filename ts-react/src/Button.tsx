import { FC } from "react";
import { IButtonProps } from "./interfaces/button-props.ts";

export const Button: FC<IButtonProps> = (props) => {
  return <button className={props.className} onClick={props.onClick}>
        {props.children}
    </button>;
};
