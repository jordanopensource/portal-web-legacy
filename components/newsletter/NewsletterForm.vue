<template>
<form class="flex flex-col">
  <input required type="email" id="email" placeholder="Email" v-model.lazy.trim="email">

  <div id="select-language" class="block">
    <radioButton id="english" value="English" label="English"
    v-model="language"/>
    <radioButton id="arabic" value="Arabic" label="Arabic"
    v-model="language"/>

  <div class="flex justify-between flex-wrap">
    <button class="button button-blue-full mb-4" @click.prevent="subscribe">subscribe</button>
    <button class="button button-blue mb-4" @click.prevent="unsubscribe">unsubscribe</button>
  </div>
</form>
</template>

<script>
import RadioButton from '~/components/form-components/RadioButton.vue'
export default {
  name: 'NewsletterForm',
  components: {
    'radioButton': RadioButton,
  },
  data() {
    return {
      email: '',
      language: 'English',
    }
  },
}
</script>

<style scoped>
#email {
  @apply w-full mb-4 p-4 text-josa-warm-grey-dark rounded-sm;
}

#email::placeholder {
  @apply text-josa-warm-grey-dark
}

ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
