<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 111111,
          category: "Category",
          title: "Cat Adoption Day",
          description: "Find your",
          location: "Meaow Town",
          time: "12:00",
          petsAllowed: true,
          organizer: "Afaf",
        },
        {
          id: 222222,
          category: "Category",
          title: "Cat Adoption Day",
          description: "Find your",
          location: "Meaow Town",
          time: "12:00",
          petsAllowed: true,
          organizer: "Afaf",
        },
        {
          id: 11133333111,
          category: "Category",
          title: "Cat Adoption Day",
          description: "Find your",
          location: "Meaow Town",
          time: "12:00",
          petsAllowed: true,
          organizer: "Afaf",
        },
      ],
    };
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
