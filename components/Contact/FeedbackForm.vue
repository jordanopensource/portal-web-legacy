<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model="form.subject" required>{{ $t('feedback.form.subject') }}</AppControlInput>
    <AppControlInput v-model="form.description" control-type="textarea" required>{{ $t('feedback.form.inquiry') }}
    </AppControlInput>
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
          description: ''
        }
      }
    },
    components: {
      AppControlInput,
      AppButton,
    },
    methods: {
      async onSubmit() {
        await axios
          .post(process.env.baseUrl + "/feedbacks", this.form)
          .then(res => {
            if (res.status == 200) {
              this.success();
            } else {
              this.fail();
            }
          })
      },
      success() {
        this.flashMessage.setStrategy('single');
        this.flashMessage.success({
          message: this.$t('feedback.sent')
        });
      },
      fail() {
        this.flashMessage.setStrategy('single');
        this.flashMessage.error({
          message: this.$t('feedback.fail')
        });
      }
    },
  }

</script>

<style scoped>
  form {
    @apply bg-josa-warm-grey p-8;
  }

</style>
