import React from "react";
import classes from "./Header.module.less";
import { UserOutlined, LogoutOutlined, UnlockOutlined } from "@ant-design/icons";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout as AntdLayout, Menu, Typography } from "antd";
const { Title, Text } = Typography;

export function HeaderView(props) {
  const { collapsed, userData, handleToggle, handleExit, handleShowPasswordDialog } = props;
  const { role, fio = "" } = userData;

  const toggleBtn = React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: classes["toggleButton"],
    onClick: handleToggle,
  });

  const MenuHeader = () => (
    <div className={classes["menu-header"]}>
      <Avatar size={60} className={classes["header-logo"]}>
        {fio[0]}
      </Avatar>
      <Title level={5} className={classes["header-title"]}>
        {fio}
      </Title>
      <Text type="secondary">{role}</Text>
    </div>
  );

  const menu = (
    <Menu className={classes["menu-root"]}>
      <MenuHeader />
      <Menu.Item onClick={handleShowPasswordDialog} key="1" icon={<UnlockOutlined />}>
        Сменить пароль
      </Menu.Item>
      <Menu.Item onClick={handleExit} key="2" icon={<LogoutOutlined />}>
        Выход
      </Menu.Item>
    </Menu>
  );

  // RENDER
  return (
    <AntdLayout.Header className={classes["root"]}>
      {toggleBtn}
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]} arrow>
        <Button type="primary" shape="circle" icon={<UserOutlined />} />
      </Dropdown>
    </AntdLayout.Header>
  );
}
