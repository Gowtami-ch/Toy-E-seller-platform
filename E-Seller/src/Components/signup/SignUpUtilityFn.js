import axios from "axios";
export const postLogin = async ({
  username,
  password,
  setToken,
  setRole,
  setWarning,
  history,
  role,
}) => {
  const url = role === "user" ? "/api/v1/login/" : "/api/v1/login/seller/";
  await axios
    .post(url, { username, password })
    .then((res) => {
      const { token } = res.data.data;
      setToken(token);
      setRole(role);
      const newUrl = role === "user" ? "/" : "/seller";

      setTimeout(() => {
        history.push(newUrl);
        window.location.reload();
      }, 200);
    })
    .catch((err) => {
      if (err.response) {
        const { data } = err.response;
        setWarning(data.msg);
        setTimeout(() => setWarning(""), 3000);
      } else {
        console.log(err);
      }
    });
};
