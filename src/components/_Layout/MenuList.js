import React from "react";
import classes from "./MenuList.module.less";
import clsx from "clsx";
import logo from "../../assets/humo-orange-logo.svg";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Layout as AntdLayout, Typography } from "antd";
const { Sider } = AntdLayout;
const { Title } = Typography;

export function MenuListView(props) {
  const { collapsed, handlePush, location } = props;

  // RENDER
  return (
    <Sider theme="dark" trigger={null} collapsible collapsed={collapsed}>
      <div className={classes["slider-header"]}>
        <img src={logo} alt="Humo" className={classes["logo"]} />
        <Title level={3} className={clsx(classes["title"], { [classes["title_hide"]]: collapsed })}>
          Humo
        </Title>
      </div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={location["pathname"]} onClick={handlePush}>
        <Menu.Item key="/" icon={<UserOutlined />}>
          Главная
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
