import React from "react";
import classes from "./Content.module.less";
import { Layout as AntdLayout } from "antd";

export function Content(props) {
  // RENDER
  return <AntdLayout.Content className={classes["root"]}>{props.children}</AntdLayout.Content>;
}
