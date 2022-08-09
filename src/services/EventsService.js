import axios from "axios";

//create a signloton instance axios in the app

const appClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/abenidal/events",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    contentType: "application/json",
  },
});
export default {
  getEvents() {
    return appClient.get("/events");
  },
  getEvent(id) {
    return appClient.get("/events/" + id);
  },
};
