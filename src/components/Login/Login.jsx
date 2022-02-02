import React from "react";
import logo from "../../assets/humo-orange-logo.svg";
import classes from "./Login.module.less";
import { Avatar, Button, Form, Card, Input, Space, Typography, Image, Skeleton } from "antd";

export function LoginView(props) {
  const { authData, captchaPicture, handleSubmit, handleOnChange, loader } = props;

  // RENDER
  return (
    <div className={classes["root"]}>
      <Card className={classes["card"]}>
        <Space direction="vertical" align="center" size="middle" className={classes["card-header"]}>
          <Avatar size={50} src={logo} alt="Хумо" />
          <Typography.Title level={4}>Авторизация</Typography.Title>
        </Space>

        <Form onFinish={handleSubmit} autoComplete="off" layout="vertical">
          <Form.Item label="Логин">
            <Input
              name="username"
              value={authData["username"]}
              onChange={handleOnChange}
              disabled={loader}
              placeholder="Введите логин"
            />
          </Form.Item>

          <Form.Item label="Пароль">
            <Input.Password
              name="password"
              value={authData["password"]}
              onChange={handleOnChange}
              disabled={loader}
              placeholder="Введите пароль"
            />
          </Form.Item>

          {captchaPicture && (
            <Space align="start">
              <Form.Item>
                <Input
                  name="captcha"
                  value={authData["captcha"]}
                  onChange={handleOnChange}
                  disabled={loader}
                  placeholder="Введите капчу"
                />
              </Form.Item>
              <Image preview={false} height={32} width={80} src={captchaPicture} />
            </Space>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" className={classes["submit-button"]} loading={loader}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
