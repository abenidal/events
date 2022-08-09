import axios from "axios";

export const appClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/abenidal/events",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    contentType: "application/json",
  },
});
