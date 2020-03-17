<template>
<form>
  <input type="email" id="email" placeholder="Email" v-model.lazy.trim="email">

  <div id="select-language" class="block">
    <radioButton id="english" value="English" label="English" :model="language" 
    @onUpdate="updateActiveLanguage" />
    <radioButton id="arabic" value="Arabic" label="Arabic" :model="language" 
    @onUpdate="updateActiveLanguage" />

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
  methods: {
      updateActiveLanguage(val) {
          this.language = val;
      }
  }
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
