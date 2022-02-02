import React from "react";
import { Button, Input, Modal, Form } from "antd";

export function NewPasswordView(props) {
  const { show, loader, passwordData, handleOnChange, handleSubmit, handleClose } = props;

  const modalFooter = [
    <Button onClick={handleSubmit} type="primary" loading={loader} key="NewPasswordSubmit" block>
      Сменить
    </Button>,
  ];

  // RENDER
  return (
    <Modal title="Сменить пароль" visible={show} onCancel={handleClose} footer={modalFooter} centered>
      <Form layout="vertical">
        <Form.Item label="Старый пароль">
          <Input.Password
            name="oldPassword"
            value={passwordData["oldPassword"]}
            onChange={handleOnChange}
            disabled={loader}
            placeholder="Введите пароль"
          />
        </Form.Item>

        <Form.Item label="Новый пароль">
          <Input.Password
            name="newPassword"
            value={passwordData["newPassword"]}
            onChange={handleOnChange}
            disabled={loader}
            placeholder="Введите пароль"
          />
        </Form.Item>

        <Form.Item>
          <Input.Password
            name="confirmPassword"
            value={passwordData["confirmPassword"]}
            onChange={handleOnChange}
            disabled={loader}
            placeholder="Повторите пароль"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
