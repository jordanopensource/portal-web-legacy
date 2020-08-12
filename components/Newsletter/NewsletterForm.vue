<template>
  <form class="flex flex-col">
    <AppControlInput id="email" v-model="email" controlType="email" :label="$t('meta.email')"></AppControlInput>
    <div id="select-language" class="block mb-8">
      <radioButton id="english" value="English" label="English" v-model="language" class="en" />
      <radioButton id="arabic" value="Arabic" label="العربية" v-model="language" class="ar" />
    </div>
    <div class="flex justify-between flex-wrap">
      <button class="button button-blue-full mb-4" @click.prevent="subscribe">{{ $t('button.subscribe') }}</button>
      <button class="button button-blue mb-4" @click.prevent="unsubscribe">{{ $t('button.unsubscribe') }}</button>
    </div>
  </form>
</template>

<script>
  import AppControlInput from "@/components/FormComponents/AppControlInput";

  import radioButton from '~/components/FormComponents/RadioButton.vue'
  export default {
    name: 'NewsletterForm',
    components: {
      radioButton,
      AppControlInput,

    },
    data() {
      return {
        email: '',
        language: 'English',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      }
    },
    methods: {
      isEmailValid() {
        return this.reg.test(this.email);
      },
      subscribe() {
        if (this.isEmailValid()) {
          alert("You have successfully subscribed to JOSA\'s newsletter.\nEmail: " + this.email + "\nLanguage: " + this
            .language);
          this.email = '';
        } else {
          alert('Please enter a valid email')
        }

      },
      unsubscribe() {
        if (this.isEmailValid()) {
          alert("You have successfully unsubscribed from JOSA\'s newsletter.\nEmail: " + this.email + "\nLanguage: " +
            this.language);
          this.email = '';
        } else {
          alert('Please enter a valid email')
        }
      },
    }
  }

</script>

<style scoped>
  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

</style>
