import React from "react";
import { useSelector } from "react-redux";
import { newPasswordSwitcher, changeNewPassword, newPasswordSubmit } from "../../store/layout";
import { NewPasswordView } from "../../components/_Layout";
import { useDispatch } from "react-redux";

export function NewPassword() {
  const dispatch = useDispatch();
  const loader = useSelector(({ layout }) => layout.dialogLoader);
  const showNewPassword = useSelector(({ layout }) => layout.showNewPassword);
  const newPassword = useSelector(({ layout }) => layout.newPassword);

  const handleSubmit = (e) => {
    dispatch(newPasswordSubmit(newPassword));
  };

  const handleClose = () => {
    dispatch(newPasswordSwitcher(false));
  };

  const handleOnChange = (e) => {
    const target = e.target;
    dispatch(changeNewPassword({ targetName: target.name, targetValue: target.value }));
  };

  // RENDER
  return (
    <NewPasswordView
      show={showNewPassword}
      loader={loader}
      passwordData={newPassword}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
    />
  );
}
