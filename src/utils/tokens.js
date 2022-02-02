import jwt_decode from "jwt-decode";

// set
export function setTokens(access_token, refresh_token) {
  localStorage.setItem(
    "tokens",
    JSON.stringify({ access_token: `Bearer ${access_token}`, refresh_token: `Bearer ${refresh_token}` })
  );
}

// get
export function getTokens() {
  try {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (tokens !== null && typeof tokens === "object" && !Array.isArray(tokens)) {
      return tokens;
    }
    return {};
  } catch (error) {
    return {};
  }
}

// remove
export function removeTokens() {
  localStorage.removeItem("tokens");
}

// access token parser
export function accessTokenParser() {
  try {
    const { access_token } = getTokens();
    return jwt_decode(access_token);
  } catch (error) {
    return {};
  }
}
