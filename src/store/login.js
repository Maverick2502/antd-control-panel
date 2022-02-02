import { setTokens } from "../utils";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

const initialState = {
  authData: { username: "", password: "", captcha: "" },
  captchaPicture: null,
  loader: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateLogin: (state, action) => {
      return { ...state, ...action.payload };
    },

    changeAuthData: (state, action) => {
      const { targetName, targetValue } = action.payload;
      state.authData[targetName] = targetValue;
    },

    loaderSwitcher: (state, action) => {
      state.loader = action.payload;
    },

    resetState: () => initialState,
  },
});

export const { updateLogin, changeAuthData, loaderSwitcher, resetState } = loginSlice.actions;

export const loginSubmit = (authData, push) => async (dispatch) => {
  try {
    dispatch(loaderSwitcher(true));
    const response = await fetch(`${axios.defaults.baseURL}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authData),
    });
    dispatch(loaderSwitcher(false));

    // captcha
    if (response.status === 429) {
      const blobFile = await response.blob();
      const createUrl = window.URL.createObjectURL(blobFile);
      dispatch(updateLogin({ captchaPicture: createUrl }));

      const { captcha } = authData;
      if (!captcha) {
        message.error("Слишком много попыток входа, введите капчу");
      } else {
        dispatch(changeAuthData("captcha", ""));
        message.error("Неправильные данные, введите ещё раз");
      }
      return;
    }

    const jsonData = await response.json();
    if (!response.ok) {
      throw new Error(jsonData.message);
    }

    setTokens(jsonData.access_token, jsonData.refresh_token);
    dispatch(resetState());
    push("/");
  } catch (error) {
    dispatch(loaderSwitcher(false));
    message.error(error.message);
  }
};

export default loginSlice.reducer;
