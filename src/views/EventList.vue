<template>
  <div class="home" v-if="events && events.length">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventsService from "@/services/EventsService.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },

  created() {
    EventsService.getEvents()
      .then((response) => {
        console.log("response", response);
        this.events = response.data;
        this.events = [...this.events];
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
