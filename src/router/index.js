import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import About from "@/views/AboutView.vue";
import EventDetails from "@/views/EventDetails.vue";
import FormsView from "@/views/FormsView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/form",
    name: "Form",
    component: FormsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
