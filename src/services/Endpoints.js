import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAll = () => {
  return httpClient.get("/admin", { headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") } });
};

export const create = (data) => {
  return httpClient.post("/admin", data);
};

export const login = (data) => {
  return httpClient.post(
    "/token",
    {},
    {
      auth: {
        username: data.nome,
        password: data.senha,
      },
    }
  );
};
