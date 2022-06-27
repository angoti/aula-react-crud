import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/admin",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAll = () => {
  return httpClient.get("/livro");
};

export const get = (id) => {
  return httpClient.get(`/livro/${id}`);
};

export const create = (data) => {
  return httpClient.post("", data);
};

export const update = (id, data) => {
  return httpClient.put(`/livro/${id}`, data);
};

export const remove = (id) => {
  return httpClient.delete(`/livro/${id}`);
};
