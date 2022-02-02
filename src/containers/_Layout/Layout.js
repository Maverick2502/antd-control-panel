import React from "react";
import { Layout as AntdLayout } from "antd";
import { Content } from "../../components/_Layout";
import { Header } from "./Header";
import { MenuList } from "./MenuList";
import { NewPassword } from "./NewPassword";

export function Layout(props) {
  const { children } = props;

  return (
    <>
      <AntdLayout>
        <MenuList />
        <AntdLayout>
          <Header />
          <Content children={children} />
        </AntdLayout>
      </AntdLayout>
      <NewPassword />
    </>
  );
}
