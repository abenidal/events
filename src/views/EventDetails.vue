<template>
  <div v-if="event">
    <div>
      <h1>{{ event.title }}</h1>
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
import EventsService from "@/services/EventsService.js";

export default {
  props: ["id"],
  name: "EventDetails",
  date() {
    return {
      event: null,
    };
  },
  created() {
    EventsService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
