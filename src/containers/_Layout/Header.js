import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeTokens, accessTokenParser } from "../../utils";
import { HeaderView } from "../../components/_Layout";
import { menuSwitcher, newPasswordSwitcher } from "../../store/layout";
import { useDispatch } from "react-redux";

export function Header() {
  const dispatch = useDispatch();
  const collapsed = useSelector(({ layout }) => layout.showMenu);
  const { push } = useHistory();
  const userData = accessTokenParser();

  const handleToggle = () => {
    dispatch(menuSwitcher(!collapsed));
  };

  const handleExit = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      removeTokens();
      push("/login");
    }
  };

  const handleShowPasswordDialog = () => {
    dispatch(newPasswordSwitcher(true));
  };

  // RENDER
  return (
    <HeaderView
      collapsed={collapsed}
      userData={userData}
      handleToggle={handleToggle}
      handleExit={handleExit}
      handleShowPasswordDialog={handleShowPasswordDialog}
    />
  );
}
