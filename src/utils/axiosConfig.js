import axios from "axios";
import { getTokens, setTokens, removeTokens } from "./index";
axios.defaults.baseURL = "http://192.168.150.64:8184/v1/";
export const axiosConfig = axios.create();

let refreshRequest = null;

// on request
axiosConfig.interceptors.request.use(
  function (config) {
    // adding token
    const { access_token } = getTokens();
    config.headers["Authorization"] = access_token;

    // deleting url param if it equal to '' or undefined
    for (const key in config.params) {
      if (Object.hasOwnProperty.call(config.params, key)) {
        if (config.params[key] === "" || config.params[key] === undefined) {
          delete config.params[key];
        }
      }
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// on response
axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (!refreshRequest) {
        refreshRequest = sendRefreshRequest();
      }

      await refreshRequest;

      const { access_token } = getTokens();
      if (access_token) {
        return axiosConfig(error.config);
      }
    }

    return Promise.reject(error);
  }
);

// refresh request
function sendRefreshRequest() {
  const { access_token, refresh_token } = getTokens();
  return axiosConfig("refresh", { headers: { Authorization: access_token, "Refresh-Authorization": refresh_token } })
    .then(function (response) {
      const { data } = response;
      setTokens(data.access_token, data.refresh_token);

      const { access_token } = getTokens();
      axiosConfig.defaults.headers.common["Authorization"] = access_token;
      refreshRequest = null;
    })
    .catch(function (error) {
      removeTokens();
    });
}
