import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginView } from "../../components/Login";
import { changeAuthData, loginSubmit } from "../../store/login";
import { useDocumentTitle } from "../../hooks";

export function Login() {
  useDocumentTitle("Авторизация");
  const dispatch = useDispatch();
  const captchaPicture = useSelector(({ login }) => login.captchaPicture);
  const authData = useSelector(({ login }) => login.authData);
  const loader = useSelector(({ login }) => login.loader);
  const { push } = useHistory();

  const handleSubmit = () => {
    dispatch(loginSubmit(authData, push));
  };

  const handleOnChange = (e) => {
    const target = e.target;
    dispatch(changeAuthData({ targetName: target.name, targetValue: target.value }));
  };

  // RENDER
  return (
    <LoginView
      authData={authData}
      captchaPicture={captchaPicture}
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      loader={loader}
    />
  );
}
