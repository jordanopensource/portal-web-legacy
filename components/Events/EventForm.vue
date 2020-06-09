<template>
  <form @submit.prevent="onSave">
    <AppControlInput 
      v-model="editedEvent.name">Event Name</AppControlInput>
    <AppControlInput 
      v-model="editedEvent.location">Location</AppControlInput>
    <datetime 
      type="datetime" 
      zone="local" 
      v-model="editedEvent.date" />
    <AppControlInput
      control-type="textarea"
      v-model="editedEvent.description">Description</AppControlInput>
    <AppButton 
      btn-style="button-blue-full" 
      type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="button-grey"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import axios from 'axios'
import AppControlInput from "@/components/form-components/AppControlInput";
import AppButton from "@/components/form-components/AppButton";
export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    event: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedEvent: this.event
        ? { ...this.event }
        : {
            id: "",
            name: "",
            location: "",
            date: "",
            description: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the event
      this.$emit('submit', this.editedEvent)
    },
    onCancel() {
      // Navigate back
      this.$router.back();
    }
  },
    head() {
    return {
      title: this.editedEvent.id ? 'Edit Event' : 'Create Event'
    }
  }
};
</script>
