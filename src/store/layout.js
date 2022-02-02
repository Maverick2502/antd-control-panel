import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { axiosConfig } from "../utils";

const initialState = {
  newPassword: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  showMenu: true,
  showNewPassword: false,
  dialogLoader: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    updateLayout: (state, action) => {
      return { ...state, ...action.payload };
    },

    changeNewPassword: (state, action) => {
      const { targetName, targetValue } = action.payload;
      state.newPassword[targetName] = targetValue;
    },

    newPasswordSwitcher: (state, action) => {
      state.showNewPassword = action.payload;
      state.newPassword = initialState.newPassword;
    },

    menuSwitcher: (state, action) => {
      state.showMenu = action.payload;
    },

    dialogLoaderSwitcher: (state, action) => {
      state.dialogLoader = action.payload;
    },

    resetState: () => initialState,
  },
});

export const { updateLayout, changeNewPassword, newPasswordSwitcher, menuSwitcher, dialogLoaderSwitcher, resetState } =
  layoutSlice.actions;

export const newPasswordSubmit = (passwordData) => async (dispatch) => {
  try {
    dispatch(dialogLoaderSwitcher(true));
    await axiosConfig.put("changeUserPass", passwordData);
    dispatch(dialogLoaderSwitcher(false));
    dispatch(newPasswordSwitcher(false));
    message.success("Пароль успешно изменён");
  } catch (error) {
    dispatch(dialogLoaderSwitcher(false));
    if (error.response) {
      message.error(error.response.data.message);
    } else {
      message.error(error.message);
    }
  }
};

export default layoutSlice.reducer;
