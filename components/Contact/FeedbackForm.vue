<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model="form.subject">What is your feedback or inquiry about?</AppControlInput>
    <AppControlInput v-model="form.inquiry" control-type="textarea">Please describe it in details.</AppControlInput>
    <AppControlInput v-model="form.name">Your Name</AppControlInput>
    <AppControlInput v-model="form.email" controlType="email">Your Email</AppControlInput>
    <div class="text-right">
      <AppButton btn-style="button-flat" type="submit">Submit</AppButton>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
  import AppControlInput from "@/components/form-components/AppControlInput";
  import AppButton from "@/components/form-components/AppButton";

  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          inquiry: ''
        }
      }
    },
    components: {
      AppControlInput,
      AppButton,
    },
    methods: {
      onSubmit() {
        // perform action
      }
    }
  };

</script>

<style scoped>
  form {
    @apply bg-josa-warm-grey p-8;
  }

</style>
