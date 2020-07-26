<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model="form.subject">{{ $t('feedback.form.subject') }}</AppControlInput>
    <AppControlInput v-model="form.inquiry" control-type="textarea">{{ $t('feedback.form.inquiry') }}</AppControlInput>
    <AppControlInput v-model="form.name">{{ $t('feedback.form.name') }}</AppControlInput>
    <AppControlInput v-model="form.email" controlType="email">{{ $t('feedback.form.email') }}</AppControlInput>
    <div class="ltr:text-right rtl:text-left">
      <AppButton btn-style="button-flat" type="submit">{{ $t('feedback.form.submit') }}</AppButton>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
  import AppControlInput from "@/components/FormComponents/AppControlInput";
  import AppButton from "@/components/FormComponents/AppButton";

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
